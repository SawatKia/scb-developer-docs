import { chromium, type Page, type Frame } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { normalizeRoute, routeToFile } from "./routes.js";
import { CONTENT_SELECTORS, discoverHrefs, expandAll, extract, waitForStable } from "./extractor.js";
import { sha256, toMarkdown, withFrontmatter } from "./markdown.js";
import { loadManifest, saveManifest } from "./manifest.js";

export interface Options {
  base: string; seeds: string[]; repoRoot: string; max: number; delayMs: number;
  include?: RegExp; headful: boolean; selectors: string[];
}
export const defaults = {
  base: "https://developer.scb/#/documents/documentation/basics/getting-started.html",
  max: 500, delayMs: 400, headful: false, selectors: CONTENT_SELECTORS,
};

async function open(opts: Options) {
  const browser = await chromium.launch({ headless: !opts.headful });
  const ctx = await browser.newContext({ locale: "en-US", viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const res = await page.goto(opts.base, { waitUntil: "networkidle" });
  if (res && res.status() >= 400) {
    console.warn(`! ${opts.base} returned HTTP ${res.status()} — blocked? try --headful or a different network`);
  }
  let frame = page.frames().find((f) => f.url().includes("assets/documents"));
  if (!frame) {
    await page.waitForTimeout(2000);
    frame = page.frames().find((f) => f.url().includes("assets/documents"));
  }
  return { browser, page, frame: frame ?? page.mainFrame() };
}

async function go(page: Page, frame: Frame, route: string, delayMs: number): Promise<Frame> {
  const assetPath = route.replace(/^#\/documents\/?/, "");
  const assetUrl = "https://developer.scb/assets/documents/" + assetPath;
  try {
    await frame.goto(assetUrl, { waitUntil: "domcontentloaded" });
  } catch {
    const currentFrame = page.frames().find((f) => f.url().includes("assets/documents"));
    if (currentFrame) {
      await currentFrame.goto(assetUrl, { waitUntil: "domcontentloaded" });
      frame = currentFrame;
    }
  }
  await waitForStable(frame);
  await expandAll(frame);
  if (delayMs > 0) await page.waitForTimeout(delayMs);
  return page.frames().find((f) => f.url().includes("assets/documents")) || frame;
}

export async function crawl(opts: Options): Promise<{ changed: number; total: number; failed: number }> {
  const manifestPath = join(opts.repoRoot, "scrape-manifest.json");
  const manifest = await loadManifest(manifestPath);
  const { browser, page, frame: initialFrame } = await open(opts);
  let frame = initialFrame;
  const now = new Date().toISOString();
  const queue: string[] = [];
  const seen = new Set<string>();
  const enqueue = (hrefs: string[]) => {
    for (const h of hrefs) {
      const r = normalizeRoute(h);
      if (r && !seen.has(r) && (!opts.include || opts.include.test(r))) { seen.add(r); queue.push(r); }
    }
  };

  try {
    await waitForStable(frame);
    await expandAll(frame);
    enqueue(await discoverHrefs(frame));
    enqueue(await discoverHrefs(page));
    enqueue(opts.seeds);
    if (!queue.length) console.warn("! no #/documents links discovered on landing page — pass --seed <url> or run `inspect`");

    let changed = 0, failed = 0, done = 0;
    while (queue.length && done < opts.max) {
      const route = queue.shift()!;
      done++;
      try {
        frame = await go(page, frame, route, opts.delayMs);
        enqueue(await discoverHrefs(frame));
        const ex = await extract(frame, opts.selectors);
        const body = toMarkdown(ex.html);
        if (body.length < 80) { console.log(`skip (empty) ${route}`); continue; }
        const hash = sha256(body);
        const file = routeToFile(route);
        const prev = manifest.routes[route];
        if (!prev || prev.hash !== hash) {
          const out = join(opts.repoRoot, "docs", file);
          await mkdir(dirname(out), { recursive: true });
          await writeFile(out, withFrontmatter(body, { sourceUrl: "https://developer.scb/" + route, route, hash }));
          changed++;
          console.log(`${prev ? "updated" : "new    "} ${file}  [${ex.selector}]`);
        } else console.log(`same    ${file}`);
        manifest.routes[route] = { file, hash, title: ex.title, changedAt: !prev || prev.hash !== hash ? now : prev.changedAt, lastChecked: now };
      } catch (e) {
        failed++;
        console.error(`FAIL ${route}: ${(e as Error).message}`);
        if (manifest.routes[route]) manifest.routes[route].error = (e as Error).message;
      }
    }
    await saveManifest(manifestPath, manifest);
    return { changed, total: done, failed };
  } finally {
    await browser.close();
  }
}

/** Dump rendered DOM + links for the first route so selectors can be tuned. */
export async function inspect(opts: Options, route?: string): Promise<void> {
  const { browser, page, frame: initialFrame } = await open(opts);
  let frame = initialFrame;
  try {
    await waitForStable(frame);
    await expandAll(frame);
    const links = (await discoverHrefs(frame)).map(normalizeRoute).filter(Boolean) as string[];
    const target = route ?? links[0];
    if (target) frame = await go(page, frame, target, opts.delayMs);
    const dir = join(opts.repoRoot, ".debug");
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "rendered.html"), await frame.content());
    await writeFile(join(dir, "links.txt"), [...new Set(links)].join("\n") + "\n");
    await page.screenshot({ path: join(dir, "page.png"), fullPage: true });
    const ex = await extract(frame, opts.selectors);
    await writeFile(join(dir, "extracted.md"), toMarkdown(ex.html));
    console.log(`inspected ${target ?? "(landing)"}; selector=${ex.selector}; ${new Set(links).size} routes → .debug/`);
  } finally { await browser.close(); }
}
