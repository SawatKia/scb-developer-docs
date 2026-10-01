import type { Page } from "playwright";

/** Tried in order; first with enough text wins. Tune after `npm run inspect`. */
export const CONTENT_SELECTORS = [
  "main", "article", "[role=main]", ".document-content", ".doc-content", ".content", "#content", "app-document",
];
const NOISE =
  "script,style,noscript,nav,header,footer,aside,[role=navigation],[class*=sidebar],[class*=navbar],[class*=cookie],[class*=breadcrumb]";

export async function waitForStable(page: Page, timeoutMs = 15000): Promise<void> {
  const start = Date.now();
  let last = -1, same = 0;
  while (Date.now() - start < timeoutMs) {
    const len = await page.evaluate(() => document.body?.innerText.length ?? 0);
    same = len === last && len > 0 ? same + 1 : 0;
    if (same >= 2) return;
    last = len;
    await page.waitForTimeout(400);
  }
}

export async function expandAll(page: Page): Promise<void> {
  for (let i = 0; i < 10; i++) {
    const n = await page.evaluate(() => {
      const els = [...document.querySelectorAll<HTMLElement>('[aria-expanded="false"]')];
      els.forEach((e) => e.click());
      return els.length;
    });
    if (!n) break;
    await page.waitForTimeout(300);
  }
}

export async function discoverHrefs(page: Page): Promise<string[]> {
  return page.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href") || ""),
  );
}

export interface Extracted { title: string; html: string; selector: string }

export async function extract(page: Page, selectors: string[] = CONTENT_SELECTORS): Promise<Extracted> {
  return page.evaluate(
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
