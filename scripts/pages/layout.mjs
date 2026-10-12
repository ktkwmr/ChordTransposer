// Shared HTML template for the guide pages (public/chordtransposer/<slug>/ and ja/<slug>/).
// Used by scripts/build-pages.mjs.

export const ORIGIN = "https://ktkwmr.com";
export const APP_PATH = { en: "/chordtransposer/", ja: "/chordtransposer/ja/" };
export const PUBLISHED = "2026-10-12";

export const pagePath = (lang, slug) => APP_PATH[lang] + slug + "/";

export const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const UI = {
  en: {
    locale: "en_US",
    openApp: "Open the app",
    other: { lang: "ja", label: "日本語" },
    guides: "Guides",
    cta: "Transpose your chord chart now",
    ctaBody: "Paste a chord chart or open a text, PDF, or image file. Free, no sign-up, and your file never leaves your device.",
    footer: "Chord Transposer · © 2026 ktkwmr",
    source: "Source code on GitHub",
    feedback: "Feedback",
  },
  ja: {
    locale: "ja_JP",
    openApp: "アプリを開く",
    other: { lang: "en", label: "English" },
    guides: "ガイド",
    cta: "さっそくコード譜を移調する",
    ctaBody: "コード譜を貼り付けるか、テキスト・PDF・画像ファイルを開くだけ。無料・登録不要で、ファイルが端末の外に送られることはありません。",
    footer: "Chord Transposer · © 2026 ktkwmr",
    source: "GitHub のソースコード",
    feedback: "ご意見・ご質問",
  },
};

const MARK =
  '<svg class="mark" viewBox="0 0 28 28" aria-hidden="true"><rect width="28" height="28" rx="7" fill="#000"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M11 7v14M17 7v14M8 12.5l12-2.5M8 18.5l12-2.5"/></g></svg>';

const CSS = `
    :root {
      color-scheme: light;
      --ink: #000;
      --paper: #fff;
      --muted: #525252;
      --subtle: #737373;
      --line: #e5e5e5;
      --line-strong: #d4d4d4;
      --fill: #f5f5f5;
      --radius: 8px;
      --mono: "Cascadia Mono", "Consolas", "DejaVu Sans Mono", "MS Gothic", monospace;
      --sans: "Segoe UI Variable Text", "Segoe UI", "Yu Gothic UI", "Meiryo UI", "Meiryo", system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif;
    }
    * { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
    body { margin: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); font-size: 16px; line-height: 1.75; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-underline-offset: 3px; }
    a:focus-visible, .btn:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }

    .site-head { position: sticky; top: 0; z-index: 1; background: var(--paper); border-bottom: 1px solid var(--line); }
    .site-head .inner { display: flex; align-items: center; gap: 16px; max-width: 960px; margin: 0 auto; padding: 10px max(16px, env(safe-area-inset-right)) 10px max(16px, env(safe-area-inset-left)); }
    .brand { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; text-decoration: none; white-space: nowrap; }
    .mark { width: 28px; height: 28px; flex: none; }
    .head-links { display: flex; align-items: center; gap: 16px; margin-left: auto; font-size: 14px; }
    .head-links .lang { color: var(--muted); }
    .btn { display: inline-flex; align-items: center; height: 36px; padding: 0 16px; border-radius: var(--radius); background: var(--ink); color: var(--paper); font-size: 14px; font-weight: 600; text-decoration: none; white-space: nowrap; }
    .btn:hover { background: #262626; }

    main { max-width: 760px; margin: 0 auto; padding: 40px 16px 24px; }
    h1 { margin: 0 0 12px; font-size: 30px; line-height: 1.35; letter-spacing: -0.01em; }
    .lead { margin: 0 0 32px; color: var(--muted); font-size: 17px; }
    h2 { margin: 48px 0 12px; padding-top: 8px; font-size: 22px; line-height: 1.4; }
    h3 { margin: 32px 0 8px; font-size: 18px; line-height: 1.5; }
    p, ul, ol { margin: 0 0 16px; }
    li { margin: 4px 0; }
    li > ul, li > ol { margin: 4px 0 0; }
    code { font-family: var(--mono); font-size: 0.9em; background: var(--fill); padding: 1px 5px; border-radius: 4px; }
    pre { margin: 0 0 20px; padding: 14px 16px; overflow-x: auto; font-family: var(--mono); font-size: 14px; line-height: 1.6; background: var(--fill); border: 1px solid var(--line); border-radius: var(--radius); }
    pre code { background: none; padding: 0; font-size: inherit; }
    .pair { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin: 0 0 20px; }
    .pair pre { margin: 0; }
    .pair figcaption, figure.shot figcaption, .table-wrap + .cap { color: var(--subtle); font-size: 13px; }
    figure { margin: 0 0 24px; }
    figure.shot img { display: block; width: 100%; height: auto; border: 1px solid var(--line); border-radius: var(--radius); }
    figure.shot.phone img { max-width: 320px; }
    figure.shot figcaption { margin-top: 6px; }
    .note { margin: 0 0 20px; padding: 12px 16px; border-left: 3px solid var(--ink); background: var(--fill); border-radius: 0 var(--radius) var(--radius) 0; }
    .note p:last-child, .note ul:last-child { margin-bottom: 0; }
    .toc { margin: 0 0 32px; padding: 14px 18px; border: 1px solid var(--line); border-radius: var(--radius); font-size: 15px; }
    .toc b { display: block; margin-bottom: 4px; }
    .toc ol { margin: 0; padding-left: 1.4em; }

    .table-wrap { margin: 0 0 8px; overflow-x: auto; border: 1px solid var(--line); border-radius: var(--radius); }
    .table-wrap + .cap { margin: 0 0 24px; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th, td { padding: 7px 10px; border-bottom: 1px solid var(--line); text-align: center; white-space: nowrap; }
    tr:last-child > * { border-bottom: 0; }
    thead th { background: var(--fill); font-weight: 600; }
    tbody th { text-align: left; font-weight: 600; background: var(--paper); position: sticky; left: 0; }
    td.chord, td.num { font-family: var(--mono); }
    td.dim { color: #a3a3a3; }
    td.hit { background: var(--ink); color: var(--paper); font-weight: 700; }
    table.text td, table.text th { white-space: normal; text-align: left; }

    dl.faq dt { margin: 28px 0 6px; font-weight: 700; font-size: 17px; }
    dl.faq dd { margin: 0; }

    .cta { margin: 48px 0 0; padding: 24px; border: 1px solid var(--line-strong); border-radius: 12px; text-align: center; }
    .cta h2 { margin: 0 0 8px; padding: 0; font-size: 20px; }
    .cta p { color: var(--muted); font-size: 15px; }
    .cta .btn { height: 44px; padding: 0 24px; font-size: 15px; }

    .site-foot { margin-top: 56px; border-top: 1px solid var(--line); font-size: 14px; color: var(--muted); }
    .site-foot .inner { max-width: 760px; margin: 0 auto; padding: 28px 16px calc(32px + env(safe-area-inset-bottom)); }
    .site-foot h2 { margin: 0 0 8px; padding: 0; font-size: 14px; color: var(--ink); }
    .site-foot ul { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 2px 24px; margin: 0 0 24px; padding: 0; list-style: none; }
    .site-foot a { text-decoration: none; }
    .site-foot a:hover { text-decoration: underline; }
    .site-foot [aria-current] { color: var(--ink); font-weight: 600; }
    .site-foot .meta { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0; }

    @media (max-width: 600px) {
      main { padding-top: 28px; }
      h1 { font-size: 25px; }
      h2 { font-size: 20px; }
      .head-links { gap: 12px; }
      .brand span { display: none; }
    }
    @media print {
      .site-head, .site-foot, .cta { display: none; }
    }`;

// pages: [{ slug, [lang]: { nav } }] in footer order
export function renderPage({ lang, page, pages, body, jsonLd }) {
  const ui = UI[lang];
  const t = page[lang];
  const otherLang = ui.other.lang;
  const url = ORIGIN + pagePath(lang, page.slug);
  const enUrl = ORIGIN + pagePath("en", page.slug);
  const jaUrl = ORIGIN + pagePath("ja", page.slug);
  const fullTitle = `${t.title} | Chord Transposer`;

  const nav = pages
    .map((p) => {
      const current = p.slug === page.slug ? ' aria-current="page"' : "";
      return `          <li><a href="${pagePath(lang, p.slug)}"${current}>${escapeHtml(p[lang].nav)}</a></li>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<!-- Generated by scripts/build-pages.mjs from scripts/pages/${page.slug}.mjs. Do not edit. -->
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" type="image/svg+xml" href="/chordtransposer/icons/icon.svg" />
  <link rel="apple-touch-icon" href="/chordtransposer/icons/apple-touch-icon.png" />
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(t.description)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${enUrl}" />
  <link rel="alternate" hreflang="ja" href="${jaUrl}" />
  <link rel="alternate" hreflang="x-default" href="${enUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Chord Transposer" />
  <meta property="og:title" content="${escapeHtml(t.title)}" />
  <meta property="og:description" content="${escapeHtml(t.description)}" />
  <meta property="og:locale" content="${ui.locale}" />
  <meta property="og:locale:alternate" content="${UI[otherLang].locale}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/chordtransposer/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c").replace(/^/gm, "  ")}
  </script>
  <style>${CSS}
  </style>
</head>
<body>
  <header class="site-head">
    <div class="inner">
      <a class="brand" href="${APP_PATH[lang]}">${MARK}<span>Chord Transposer</span></a>
      <nav class="head-links" aria-label="${lang === "ja" ? "サイト" : "Site"}">
        <a class="lang" href="${pagePath(otherLang, page.slug)}" hreflang="${otherLang}" lang="${otherLang}">${ui.other.label}</a>
        <a class="btn" href="${APP_PATH[lang]}">${ui.openApp}</a>
      </nav>
    </div>
  </header>
  <main>
    <article>
      <h1>${escapeHtml(t.heading || t.title)}</h1>
${body.trim().replace(/^/gm, "      ")}
    </article>
    <aside class="cta">
      <h2>${ui.cta}</h2>
      <p>${ui.ctaBody}</p>
      <a class="btn" href="${APP_PATH[lang]}">${ui.openApp}</a>
    </aside>
  </main>
  <footer class="site-foot">
    <div class="inner">
      <nav aria-labelledby="guides-title">
        <h2 id="guides-title">${ui.guides}</h2>
        <ul>
${nav}
        </ul>
      </nav>
      <p class="meta">
        <span>${ui.footer}</span>
        <a href="https://github.com/ktkwmr/ChordTransposer" rel="noopener">${ui.source}</a>
        <a href="https://github.com/ktkwmr/ChordTransposer/issues" rel="noopener">${ui.feedback}</a>
      </p>
    </div>
  </footer>
</body>
</html>
`;
}
