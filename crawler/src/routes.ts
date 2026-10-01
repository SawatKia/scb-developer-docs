/** Normalize any href/URL into a "#/documents/..." route, or null if not a docs route. */
export function normalizeRoute(href: string): string | null {
  if (!href) return null;
  const hashIdx = href.indexOf("#/documents");
  if (hashIdx !== -1) {
    const after = href.slice(hashIdx);
    return after.split("?")[0].replace(/\/+$/, "");
  }
  const assetMatch = href.match(/\/assets\/documents\/([^\?#]+)/);
  if (assetMatch) {
    const p = assetMatch[1].replace(/\/+$/, "");
    if (p.endsWith(".html")) {
      return `#/documents/${p}`;
    }
  }
  return null;
}

/** Deterministic route -> relative .md path (under docs/). */
export function routeToFile(route: string): string {
  const p = route.replace(/^#\/documents\/?/, "").replace(/\.html?$/i, "");
  const segs = p
    .split("/")
    .filter(Boolean)
    .map((s) => decodeURIComponent(s).toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, ""))
    .filter(Boolean);
  return segs.length ? segs.join("/") + ".md" : "index.md";
}
