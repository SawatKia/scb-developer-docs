import { resolve } from "node:path";
import { crawl, inspect, defaults, type Options } from "./crawler.js";
import { publish } from "./publisher.js";

const [cmd = "crawl", ...rest] = process.argv.slice(2);
const flag = (n: string) => rest.includes(`--${n}`);
const vals = (n: string) => rest.flatMap((a, i) => (a === `--${n}` && rest[i + 1] ? [rest[i + 1]] : []));
const val = (n: string) => vals(n)[0];

const opts: Options = {
  ...defaults,
  base: val("base") ?? defaults.base,
  seeds: vals("seed"),
  repoRoot: resolve(import.meta.dirname, "../.."),
  max: val("max") ? Number(val("max")) : defaults.max,
  delayMs: val("delay") ? Number(val("delay")) : defaults.delayMs,
  include: val("include") ? new RegExp(val("include")!) : undefined,
  headful: flag("headful"),
  selectors: vals("selector").length ? vals("selector") : defaults.selectors,
};

if (cmd === "inspect") {
  await inspect(opts, opts.seeds[0]);
} else if (cmd === "crawl") {
  const r = await crawl(opts);
  console.log(`done: ${r.total} routes, ${r.changed} changed, ${r.failed} failed`);
  if (flag("commit") || flag("push")) publish(opts.repoRoot, flag("push"), `${r.changed} changed`);
  if (r.failed && !r.total - r.failed) process.exit(1);
} else {
  console.error("usage: scrape | inspect [--seed <route>] [--base url] [--include regex] [--max n] [--delay ms] [--selector css] [--headful] [--commit] [--push]");
  process.exit(2);
}
