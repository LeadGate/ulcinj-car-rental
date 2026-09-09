// @ts-nocheck
// prerender_body_inject.mjs — BOSS Pipeline Phase 1A/1B snapshot freeze (v2)
//
// Runs AFTER `prerender.mjs` (head-patcher). Reads pre-rendered HTML from
// `snapshots/<slug>.html` and injects each into the matching
// `dist/<slug>/index.html` between <div id="root"> and </div>.
// The special slug `index` targets the homepage `dist/index.html`.
//
// 2026-08-20: source moved from `public/__snapshots__/` to `snapshots/`.
// Anything under `public/` is copied verbatim into the build, so the snapshots
// shipped to the live site: `/__snapshots__/` answered 200 with a bare page body
// - no <head>, no meta description, no canonical - a thin duplicate of the route
// it was cut from. They are a BUILD INPUT, not a public asset.
//
// Why: Vite SPA build emits empty <div id="root"></div>. Crawlers without JS
// execution (GPTBot, ClaudeBot, PerplexityBot, CCBot, GoogleOther) see no
// content, and even Googlebot's scheduler deprioritises pages whose static
// HTML carries no internal links (GSC 2026-07-29: money-league pages sat at
// "URL is unknown to Google" for 3 months with fresh sitemaps). React
// replaces the static body on mount via createRoot — side-by-side compromise.
//
// v2 change vs madeira original: injection anchors on the LITERAL empty
// `<div id="root"></div>` a fresh Vite build always emits, instead of a
// non-greedy regex to the first </div> — DOM-captured snapshots contain
// nested <div>s, which the old regex would truncate. Build chain runs this
// exactly once per fresh build, so no idempotency pass is needed.
//
// Localrent guard: snapshots must use a static <a href="/" rel="nofollow">
// CTA placeholder, NOT live widget DOM. Widget loads client-side after mount.
//
// Reference: Council of Mentats decision 2026-04-29 (Stage 1, Phase 1A);
// vault/thoughts/projects/process_council_prerender_ssr_decision.md

import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SNAPSHOT_DIR = 'snapshots';
const EMPTY_ROOT = '<div id="root"></div>';

if (!fs.existsSync(SNAPSHOT_DIR)) {
  console.log('[prerender-body] no snapshots/ directory, skipping');
  process.exit(0);
}

const snapshots = fs
  .readdirSync(SNAPSHOT_DIR)
  .filter((f) => f.endsWith('.html') && !f.endsWith('.generated.html'));

if (snapshots.length === 0) {
  console.log('[prerender-body] snapshots/ is empty, skipping');
  process.exit(0);
}

let injected = 0;
let skipped = 0;
let errored = 0;

for (const file of snapshots) {
  const slug = file.replace(/\.html$/, '');
  const targetIndex =
    slug === 'index'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, slug, 'index.html');

  if (!fs.existsSync(targetIndex)) {
    console.warn(`[prerender-body] SKIP ${slug} — ${targetIndex} not found (run prerender.mjs first)`);
    skipped += 1;
    continue;
  }

  let html = fs.readFileSync(targetIndex, 'utf-8');
  const body = fs.readFileSync(path.join(SNAPSHOT_DIR, file), 'utf-8').trim();

  if (!html.includes(EMPTY_ROOT)) {
    console.error(`[prerender-body] FATAL ${slug} — no ${EMPTY_ROOT} in ${targetIndex}; ` +
      'either the build template changed or something already filled the root');
    errored += 1;
    continue;
  }

  html = html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`);
  fs.writeFileSync(targetIndex, html);
  injected += 1;
  console.log(`[prerender-body] injected ${slug} (${body.length} bytes body)`);
}

console.log(`[prerender-body] done — injected=${injected} skipped=${skipped} errored=${errored}`);

if (errored > 0) {
  process.exit(1);
}
