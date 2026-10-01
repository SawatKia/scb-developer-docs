import { createHash } from "node:crypto";
import TurndownService from "turndown";
// @ts-expect-error no types shipped
import { gfm } from "turndown-plugin-gfm";

const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.use(gfm);

export function toMarkdown(html: string): string {
  return td.turndown(html).replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");

/** Frontmatter holds NO timestamps so unchanged pages never dirty git. */
export function withFrontmatter(body: string, o: { sourceUrl: string; route: string; hash: string }): string {
  return `---\nsource_url: "${o.sourceUrl}"\nsource_route: "${o.route}"\nsource: SCB Developer Portal\ncontent_hash: ${o.hash}\n---\n\n${body}`;
}
