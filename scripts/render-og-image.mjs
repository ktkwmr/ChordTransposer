#!/usr/bin/env node
// Renders scripts/og-image.html to public/chordtransposer/og-image.png (1200x630).
// Requires Playwright (once):
//   npm install --no-save playwright && npx playwright install chromium
// Then:
//   node scripts/render-og-image.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const IMAGES = [
  ["og-image.html", "../public/chordtransposer/og-image.png"],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [src, dest] of IMAGES) {
  const out = fileURLToPath(new URL(dest, import.meta.url));
  await page.goto(new URL(src, import.meta.url).href);
  await page.screenshot({ path: out });
  console.log("Wrote " + out);
}
await browser.close();
