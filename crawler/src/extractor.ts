import type { Page, Frame } from "playwright";

type Target = Page | Frame;

/** Tried in order; first with enough text wins. Tune after `npm run inspect`. */
export const CONTENT_SELECTORS = [
  ".doc-content", ".document-content", "main", "article", "[role=main]", ".content", "#content", "app-document",
];
const NOISE =
  "script,style,noscript,nav,header,footer,aside,[role=navigation],[class*=sidebar],[class*=navbar],[class*=cookie],[class*=breadcrumb]";

export async function waitForStable(target: Target, timeoutMs = 15000): Promise<void> {
  const start = Date.now();
  let last = -1, same = 0;
  while (Date.now() - start < timeoutMs) {
    const len = await target.evaluate(() => document.body?.innerText.length ?? 0);
    same = len === last && len > 0 ? same + 1 : 0;
    if (same >= 2) return;
    last = len;
    await target.waitForTimeout(400);
  }
}

export async function expandAll(target: Target): Promise<void> {
  for (let i = 0; i < 10; i++) {
    const n = await target.evaluate(() => {
      const els = [...document.querySelectorAll<HTMLElement>('[aria-expanded="false"]')];
      els.forEach((e) => e.click());
      return els.length;
    });
    if (!n) break;
    await target.waitForTimeout(300);
  }
}

export async function discoverHrefs(target: Target): Promise<string[]> {
  return target.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((a) => (a as HTMLAnchorElement).href || a.getAttribute("href") || ""),
  );
}

export interface Extracted { title: string; html: string; selector: string }

export async function extract(target: Target, selectors: string[] = CONTENT_SELECTORS): Promise<Extracted> {
  return target.evaluate(
    ({ selectors, noise }) => {
      let el: Element | null = null;
      let used = "body";
      for (const s of selectors) {
        const c = document.querySelector(s) as HTMLElement | null;
        if (c && c.innerText.trim().length > 200) { el = c; used = s; break; }
      }
      const root = (el ?? document.body).cloneNode(true) as HTMLElement;
      root.querySelectorAll(noise).forEach((n) => n.remove());
      const title = root.querySelector("h1")?.textContent?.trim() || document.title.trim();
      return { title, html: root.innerHTML, selector: used };
    },
    { selectors, noise: NOISE },
  );
}
