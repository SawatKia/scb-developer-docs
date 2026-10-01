# scb-developer-docs

Markdown mirror of the SCB Developer Portal (Angular SPA, `#/documents/...` routes), built for [Context7](https://context7.com) so coding agents get static, versioned docs.

```
developer.scb → Playwright (route discovery + render) → HTML → Markdown → docs/ → GitHub → Context7
```

## Use
```bash
cd crawler
npm install && npx playwright install chromium
npm run inspect                       # dumps .debug/ (rendered.html, links.txt, extracted.md) — tune selectors
npm run scrape                        # crawl all discovered routes
npm run scrape -- --seed "#/documents/api-reference-index/qr-payments/get-billpayment-transactions.html"
npm run scrape -- --include "qr-payments" --commit   # --push to push too
```
Flags: `--base`, `--seed` (repeatable), `--include <regex>`, `--max`, `--delay`, `--selector <css>` (repeatable), `--headful`, `--commit`, `--push`.

## Layout
- `docs/` — generated Markdown (only folder Context7 indexes, see `context7.json`)
- `scrape-manifest.json` — route → file/hash/timestamps (timestamps live here, not in files, so git diffs stay clean)
- `crawler/` — TypeScript crawler; routes are discovered from the DOM, never hard-coded

## Notes
- developer.scb returned 403 to plain HTTP crawlers; real Chromium may or may not pass. If blocked, try `--headful`.
- Content selectors are guesses (`main`, `article`, …). Run `inspect`, then pass `--selector` or edit `CONTENT_SELECTORS` in `src/extractor.ts`.
- Respect SCB's terms of use before publishing a mirror to a public repo (Context7 needs public repos).
