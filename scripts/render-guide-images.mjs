#!/usr/bin/env node
// Takes the app screenshots used in the guide page:
//   public/chordtransposer/images/guide/{en,ja}-{overview,overview-phone,menu,phone,preview}.png
// Requires Playwright (once):
//   npm install --no-save playwright && npx playwright install chromium
// Then:
//   node scripts/render-guide-images.mjs
// Re-run it when the app's look changes. The example songs are in the public domain.
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));
const OUT = join(PUBLIC, "chordtransposer/images/guide/");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".md": "text/markdown; charset=utf-8" };

const SONGS = {
  // Amazing Grace (John Newton, 1779)
  en: `Amazing Grace
Key: G

G          G7       C        G
Amazing grace, how sweet the sound
G                     Em     D
That saved a wretch like me
G           G7      C         G
I once was lost, but now am found
G        D        G
Was blind, but now I see`,
  // 故郷（高野辰之 作詞・岡野貞一 作曲, 1914）
  ja: `故郷（ふるさと）
Key: C

C            G7  C
うさぎ追いし かの山
F            C   G7
こぶな釣りし かの川
C        F     C
夢は今も めぐりて
F     C    G7    C
忘れがたき ふるさと`,
};
const SHIFT = { en: 2, ja: 2 };
const PATH = { en: "/chordtransposer/?lang=en", ja: "/chordtransposer/ja/" };

// Minimal static server for public/ (the app needs http:// for its absolute paths)
const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = normalize(join(PUBLIC, path));
  if (!file.startsWith(PUBLIC)) return res.writeHead(403).end();
  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

// Numbered markers drawn next to controls, matching the numbered list in the guide.
// sel may list several selectors ("a, b"); the first visible match is used.
// side "inside" puts the marker in the top-right corner of the element.
async function addMarkers(page, targets) {
  await page.evaluate((targets) => {
    targets.forEach(([sel, n, side]) => {
      const el = [...document.querySelectorAll(sel)].find((e) => e.getBoundingClientRect().width > 0);
      if (!el) throw new Error("marker target not found: " + sel);
      const r = el.getBoundingClientRect();
      const m = document.createElement("div");
      m.textContent = n;
      const size = 22;
      const x = side === "left" ? r.left - size - 4 : side === "below" ? r.left + r.width / 2 - size / 2 : side === "inside" ? r.right - size - 12 : r.right + 4;
      const y = side === "below" ? r.bottom + 4 : side === "inside" ? r.top + 10 : r.top + r.height / 2 - size / 2;
      Object.assign(m.style, {
        position: "fixed", left: x + "px", top: y + "px", width: size + "px", height: size + "px", zIndex: 99999,
        borderRadius: "50%", background: "#e11d48", color: "#fff", font: "700 13px/22px system-ui, sans-serif",
        textAlign: "center", boxShadow: "0 0 0 2px #fff", pointerEvents: "none",
      });
      document.body.appendChild(m);
    });
  }, targets);
}

async function setUp(page, lang) {
  await page.goto(origin + PATH[lang]);
  await page.fill("#input", SONGS[lang]);
  await page.selectOption("#semitones", String(SHIFT[lang]));
  await page.waitForTimeout(300);
}

const browser = await chromium.launch();
await mkdir(OUT, { recursive: true });
for (const lang of ["en", "ja"]) {
  // 1. Desktop overview with numbered controls
  {
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 640 }, deviceScaleFactor: 1, locale: lang });
    const page = await ctx.newPage();
    await setUp(page, lang);
    await addMarkers(page, [
      ["#openBtn", "1", "below"],
      ["#input", "2", "inside"],
      ["label.ctl.key", "3", "below"],
      ["label.ctl.acc", "4", "below"],
      ["label.ctl.size", "5", "below"],
      ["#previewBtn", "6", "left"],
      ["#saveBtn", "7", "below"],
      ["#settingsBtn", "8", "left"],
    ]);
    await page.screenshot({ path: join(OUT, `${lang}-overview.png`) });
    await ctx.close();
  }
  // 1a. Settings menu, opened (2x, shown at half size)
  {
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 640 }, deviceScaleFactor: 2, locale: lang });
    const page = await ctx.newPage();
    await page.goto(origin + PATH[lang]);
    await page.click("#settingsBtn");
    await page.waitForTimeout(100);
    const box = await page.evaluate(() => {
      const r = document.querySelector("#settingsMenu").getBoundingClientRect();
      const b = document.querySelector("#settingsBtn").getBoundingClientRect();
      return { x: Math.floor(r.left - 16), y: Math.floor(b.top - 8), right: Math.ceil(Math.max(r.right, b.right) + 16), bottom: Math.ceil(r.bottom + 24) };
    });
    await page.screenshot({ path: join(OUT, `${lang}-menu.png`), clip: { x: box.x, y: box.y, width: box.right - box.x, height: box.bottom - box.y } });
    await ctx.close();
  }
  // 1b. Phone overview with the same numbered controls (shown instead of 1 on narrow screens)
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 560 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: lang });
    const page = await ctx.newPage();
    await setUp(page, lang);   // a phone switches to the Output tab after transposing
    await addMarkers(page, [
      ["#openBtn", "1", "below"],
      ['.tab[data-view="in"]', "2", "below"],
      ["label.ctl.key", "3", "below"],
      ["label.ctl.acc", "4", "below"],
      ["label.ctl.size", "5", "below"],
      ["#previewInBtn, #previewBtn", "6", "below"],
      ["#saveInBtn, #saveBtn", "7", "below"],
      ["#settingsBtn", "8", "left"],
    ]);
    await page.screenshot({ path: join(OUT, `${lang}-overview-phone.png`) });
    await ctx.close();
  }
  // 2. Phone, Output tab
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 720 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: lang });
    const page = await ctx.newPage();
    await setUp(page, lang);
    await page.click('.tab[data-view="out"]');
    await page.waitForTimeout(200);
    await page.screenshot({ path: join(OUT, `${lang}-phone.png`) });
    await ctx.close();
  }
  // 3. Preview of the output (on a computer it opens in a new window; a tablet shows it in the page)
  {
    const ctx = await browser.newContext({ viewport: { width: 1024, height: 720 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, locale: lang });
    const page = await ctx.newPage();
    await setUp(page, lang);
    await page.click("#previewBtn");
    await page.waitForTimeout(600);
    await page.screenshot({ path: join(OUT, `${lang}-preview.png`) });
    await ctx.close();
  }
  console.log(`Wrote the ${lang} screenshots`);
}
await browser.close();
server.close();
