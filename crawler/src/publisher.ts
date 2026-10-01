import { execFileSync } from "node:child_process";

export function publish(repoRoot: string, push: boolean, summary: string): void {
  const git = (...a: string[]) => execFileSync("git", a, { cwd: repoRoot, encoding: "utf8" });
  git("add", "docs", "scrape-manifest.json");
  if (!git("status", "--porcelain", "docs", "scrape-manifest.json").trim()) {
    console.log("git: nothing to commit");
    return;
  }
  git("commit", "-m", `docs: sync SCB portal (${summary})`);
  console.log("git: committed");
  if (push) { git("push"); console.log("git: pushed"); }
}
