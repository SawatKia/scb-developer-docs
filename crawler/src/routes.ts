/** Normalize any href/URL into a "#/documents/..." route, or null if not a docs route. */
export function normalizeRoute(href: string): string | null {
  const i = href.indexOf("#/");
  if (i === -1) return null;
  const r = href.slice(i).split("?")[0].replace(/\/+$/, "");
  return r.startsWith("#/documents") ? r : null;
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
