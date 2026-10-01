import { readFile, writeFile } from "node:fs/promises";

export interface Entry { file: string; hash: string; title: string; changedAt: string; lastChecked: string; error?: string }
export interface Manifest { routes: Record<string, Entry> }

export async function loadManifest(path: string): Promise<Manifest> {
  try { return JSON.parse(await readFile(path, "utf8")); } catch { return { routes: {} }; }
}
export async function saveManifest(path: string, m: Manifest): Promise<void> {
  const sorted = Object.fromEntries(Object.entries(m.routes).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(path, JSON.stringify({ routes: sorted }, null, 2) + "\n");
}
