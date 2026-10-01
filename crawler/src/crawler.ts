import { chromium, type Page } from "playwright";
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
  base: "https://developer.scb/", max: 500, delayMs: 500, headful: false, selectors: CONTENT_SELECTORS,
};

async function open(opts: Options) {
  const browser = await chromium.launch({ headless: !opts.headful });
  const ctx = await browser.newContext({ locale: "en-US", viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const res = await page.goto(opts.base, { waitUntil: "networkidle" });
  if (res && res.status() >= 400) {
    console.warn(`! ${opts.base} returned HTTP ${res.status()} — blocked? try --headful or a different network`);
  }
  return { browser, page };
}

async function go(page: Page, route: string, delayMs: number) {
  await page.evaluate((r) => { location.hash = r; }, route);
  await page.waitForTimeout(600);
  await waitForStable(page);
  await expandAll(page);
  await page.waitForTimeout(delayMs);
}

export async function crawl(opts: Options): Promise<{ changed: number; total: number; failed: number }> {
  const manifestPath = join(opts.repoRoot, "scrape-manifest.json");
  const manifest = await loadManifest(manifestPath);
  const { browser, page } = await open(opts);
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
    await waitForStable(page);
    await expandAll(page);
    enqueue(await discoverHrefs(page));
    enqueue(opts.seeds);
    if (!queue.length) console.warn("! no #/documents links discovered on landing page — pass --seed <url> or run `inspect`");

    let changed = 0, failed = 0, done = 0;
    while (queue.length && done < opts.max) {
      const route = queue.shift()!;
      done++;
      try {
        await go(page, route, opts.delayMs);
        enqueue(await discoverHrefs(page));
        const ex = await extract(page, opts.selectors);
        const body = toMarkdown(ex.html);
        if (body.length < 80) { console.log(`skip (empty) ${route}`); continue; }
        const hash = sha256(body);
        const file = routeToFile(route);
        const prev = manifest.routes[route];
        if (!prev || prev.hash !== hash) {
          const out = join(opts.repoRoot, "docs", file);
          await mkdir(dirname(out), { recursive: true });
          await writeFile(out, withFrontmatter(body, { sourceUrl: opts.base.replace(/\/?$/, "/") + route, route, hash }));
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
  const { browser, page } = await open(opts);
  try {
    await waitForStable(page);
    await expandAll(page);
    const links = (await discoverHrefs(page)).map(normalizeRoute).filter(Boolean) as string[];
    const target = route ?? links[0];
    if (target) await go(page, target, opts.delayMs);
    const dir = join(opts.repoRoot, ".debug");
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "rendered.html"), await page.content());
    await writeFile(join(dir, "links.txt"), [...new Set(links)].join("\n") + "\n");
    await page.screenshot({ path: join(dir, "page.png"), fullPage: true });
    const ex = await extract(page, opts.selectors);
    await writeFile(join(dir, "extracted.md"), toMarkdown(ex.html));
    console.log(`inspected ${target ?? "(landing)"}; selector=${ex.selector}; ${new Set(links).size} routes → .debug/`);
  } finally { await browser.close(); }
}
