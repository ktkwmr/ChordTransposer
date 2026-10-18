# Web アプリ共通ベースライン（WEBAPP_BASELINE）

新しい Web アプリを作るときに、**アプリ独自の機能以外で必ずやること**をまとめたチェックリストです。
ChordTransposer（https://ktkwmr.com/chordtransposer/）の開発履歴（acogist 時代と ktkwmr 時代の Claude セッション、PR #1〜#17）と実装から抜き出しています。

- **Claude はこのファイルを読めば**、独自機能以外の部分を新しいリポジトリに作り、Claude が触れない作業を人間への指示として一覧にできます（→ [§A Claude の実行手順](#a-claude-の実行手順)）。
- **参照実装は `ktkwmr/ChordTransposer`** です。表の「参照」列のファイルをコピーして、アプリ名・パス・文言を置き換えるのが一番早く、確実です。
- 新しい共通項目が出てきたら、このファイルを更新します（→ [§U 更新ルール](#u-更新ルール)）。

最終更新: 2026-10-18（初版。ChordTransposer の PR #17 までを反映）

---

## 凡例

| 記号 | 意味 |
|---|---|
| 🤖 | Claude がリポジトリ内で実装できる |
| 👤 | 人間がやる（アカウント・管理画面・本番での確認など、Claude からアクセスできないもの） |
| 🤝 | Claude が準備し、人間が仕上げる（例: Claude が手順と貼り付け用の値を用意し、人間が管理画面に入力） |
| **必須** | 公開前に必ずやる |
| **推奨** | 公開後なるべく早く |
| **任意** | 必要になったとき（収益化・アクセス増加など） |

「CT」列は ChordTransposer での状態です（✅ 実装済み / ⚠️ 一部 / ❌ 未実装）。

---

## A. Claude の実行手順

新しいアプリのリポジトリでこのファイルを渡されたら、次の順に進めます。

1. **§0 の変数を決める**。不明なものは AskUserQuestion でまとめて聞く（1 回で済ませる）。決まった値はリポジトリの `CLAUDE.md` に書き残す。
2. **参照実装を読む**。`ktkwmr/ChordTransposer` を `add_repo`（read）で追加し、各表の「参照」列のファイルを読む。同名リポジトリは 1 セッションに 1 つしか置けないので、アプリ名が `chordtransposer` と被らないこと。
3. **§2〜§12 の 🤖 の項目を実装する**。順番は §2（土台）→ §3 PWA → §4 多言語 → §5 SEO → §6 セキュリティ → §7 プライバシー → §8 ライセンス → §9 共通 UI → §11 解析 → §12 CI。§10（記事）と §15（広告）は人間が「やる」と言ったときだけ。
4. **検証する**。生成スクリプトの `--check`、`npx wrangler dev` でのローカル表示（日英・スマホ幅 390px・PC 幅）、コンソールのエラーと CSP 違反が 0 件であること。
5. **人間への作業リストを出す**（§1・§13・§14 の 👤/🤝 と、実装中に出てきた確認事項）。書き方は [§B](#b-人間への指示の書き方)。
6. **新アプリの `docs/baseline-status.md` を作る**。各項目の状態（✅/⚠️/❌/対象外）を表にし、未完了の 👤 作業を残す。

## B. 人間への指示の書き方

ChordTransposer の開発で伝わりやすかった形です。

- 「私がやったこと」と「あなたにやってもらうこと」を分ける。
- 人間の作業は表にする: `# / 内容 / 手順 / 終わったかの確かめ方`。
- 手順には **URL を直接書く**（例: `https://github.com/settings/installations`）。画面の場所は「右上のアイコン → Settings → 左の Notifications」のように道順で書く。
- 値を入力してもらうときは、**貼り付ける値をそのまま書く**（Description、Topics、sitemap の URL など）。
- スマホでできない操作は先に言う（GitHub の About はモバイルアプリでは編集できない → Safari の「デスクトップ用 Web サイトを表示」か PC）。
- 急ぎのものに印を付ける（例:「1 の反映確認だけは早めに」）。
- Claude が確かめられなかったこと（本番サイト・Cloudflare 管理画面・実機 iPhone など）は「未確認」と明記し、確かめ方を書く。

---

## 0. 新アプリで最初に決めること（変数）

| 変数 | ChordTransposer の値 | 新アプリでの決め方 |
|---|---|---|
| アプリ名（表示名） | `Chord Transposer` | 英語名。日本語の検索用タイトルは別に決める |
| スラッグ（URL・キャッシュ名） | `chordtransposer` | 小文字英字のみ。URL は `https://<ドメイン>/<スラッグ>/` |
| ドメイン | `ktkwmr.com` | 既存ドメインのサブパスが基本（→ 下の注意） |
| GitHub リポジトリ | `ktkwmr/ChordTransposer` | `ktkwmr/<AppName>` |
| 運営者名・著作権者 | `ktkwmr`（個人開発者） | 同じ |
| 問い合わせ先 | GitHub Issues（メール・フォームは未設置） | AdSense をやるならメールかフォームも |
| 言語 | 英語（既定）＋日本語（`/ja/`） | 同じ構成を推奨 |
| デザイン | 白黒・モノクロアイコン・システムフォント | 同じ系統にするとサイト全体がそろう |
| Cloudflare Web Analytics token | ダッシュボードの JS Snippet の値 | サイトは同じなので同じ token を使える |
| AdSense パブリッシャー ID | 未取得 | 取得後に記入 |

**同じドメインに 2 つ目のアプリを置くときの注意（要決定・👤）**
今はドメイン直下のファイル（`/_redirects` の `/ → /chordtransposer/`、`/robots.txt`、`/sitemap.xml`、`/404.html`、将来の `/ads.txt`）が ChordTransposer の Worker に入っています。2 つ目のアプリを同じドメインに置くなら、次のどちらかを決めます。

- **A（推奨）**: 新アプリは別の Worker にし、Cloudflare の Routes で `ktkwmr.com/<スラッグ>/*` だけを割り当てる。ドメイン直下のファイルは ChordTransposer に置いたまま、sitemap は「サイトマップのインデックス」にして各アプリの sitemap を並べる。アプリが 3 つ以上になったら、ドメイン直下だけを持つ小さなリポジトリ（トップページ・robots・sitemap インデックス・ads.txt）に分ける。
- **B**: サブドメイン（`<スラッグ>.ktkwmr.com`）にする。完全に独立するが、AdSense・Search Console・Analytics の登録や評価は分かれやすい。

---

## 1. アカウントと開発環境（👤）

一度やれば次のアプリでは不要なものが多いです。新アプリでは「確認だけ」で済みます。

| # | 項目 | 担当 | 優先度 | メモ |
|---|---|---|---|---|
| 1-1 | 開発用 Gmail を用意し、GitHub・Cloudflare・Google（Search Console / AdSense）の登録メールをそこにそろえる | 👤 | 必須 | 日常用 Gmail は GitHub の Emails に残す（過去のコミットとの紐付け） |
| 1-2 | GitHub アカウント名は公開名（`ktkwmr`）にそろえる | 👤 | 必須 | 名前を変えると旧 URL は転送されるが、誰かが旧名を取ると止まる。Claude の GitHub App の再接続が要る（下の落とし穴） |
| 1-3 | GitHub: 2FA、Settings → Notifications の「Default notifications email」を開発用 Gmail に | 👤 | 必須 | |
| 1-4 | Claude の GitHub App に新リポジトリへのアクセスを許可 | 👤 | 必須 | https://github.com/settings/installations → Claude → Configure → Repository access。「All repositories」なら不要 |
| 1-5 | Cloudflare: パスワード＋2FA（GitHub ログインだけに頼らない）、リカバリーコード保存、Billing・Notifications のメールも変更 | 👤 | 必須 | メール変更の確認リンクは「旧アドレスでログインしているブラウザ」で開く |
| 1-6 | ローカル PC: `git config --global user.email`、Node.js（22 以上） | 👤 | 推奨 | Windows の PowerShell では `npx` が止められる → `npx.cmd` を使うか `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| 1-7 | Claude のセッションは、作業するリポジトリを選んで新しく始める（クラウド環境 → リポジトリ選択） | 👤 | — | リポジトリ名を変えたら古いセッションは使わない |

---

## 2. リポジトリの土台とホスティング（Cloudflare Workers 静的アセット）

構成はビルド不要の静的サイトです。`public/` をそのまま配信し、生成が必要なファイルだけ Node スクリプトで作ってコミットします。

```
public/
  _redirects  _headers  404.html  robots.txt  sitemap.xml(生成)
  <slug>/
    index.html            # アプリ本体（HTML/CSS/JS を 1 ファイル、英日の文言入り）
    ja/index.html         # 生成（編集しない）
    sw.js  manifest.json  icons/  og-image.png  THIRD_PARTY_LICENSES.md
    <記事slug>/index.html  ja/<記事slug>/index.html   # 生成（任意）
scripts/   # build-ja.mjs / build-pages.mjs / update-third-party-licenses.mjs / render-*.mjs
.github/workflows/
wrangler.jsonc  README.md  LICENSE  CLAUDE.md  .gitignore  .gitattributes
```

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 2-1 | `wrangler.jsonc`: `assets.directory: "./public"`、`not_found_handling: "404-page"`、`observability`、`build.command`（生成スクリプト）、**`"previews": {}`** | 🤖 | 必須 | ✅ | `wrangler.jsonc`。`previews` がないと PR ブランチのプレビュービルドが `wrangler preview` で失敗する |
| 2-2 | アプリは `public/<slug>/` に置き、`/` → `/<slug>/` を 301（同じドメインの 1 つ目のアプリだけ）。favicon・apple-touch-icon のルート URL も転送 | 🤖 | 必須 | ✅ | `public/_redirects` |
| 2-3 | `404.html`（アプリと同じデザイン、日英併記、`noindex`、アプリへ戻るボタン） | 🤖 | 必須 | ✅ | `public/404.html` |
| 2-4 | `.gitignore`: `node_modules/`、`package-lock.json`、**`.wrangler/`** | 🤖 | 必須 | ⚠️ | CT は `.wrangler/` がコミットされていて、`wrangler dev` のたびに差分が出る |
| 2-5 | `.gitattributes` で改行を LF にそろえる（`* text=auto eol=lf`）。生成スクリプトは読み込み時に CRLF→LF に正規化 | 🤖 | 必須 | ⚠️ | CT はスクリプト側で正規化のみ。Windows の Git が CRLF にして `build-ja.mjs` が失敗した |
| 2-6 | 生成スクリプトには `--check`（古ければ exit 1）を付け、置換が 1 回一致しなければエラーで止める | 🤖 | 必須 | ✅ | `scripts/build-ja.mjs` |
| 2-7 | README（英日併記）: 説明・公開 URL・機能・プライバシー・構成・開発・デプロイ・生成ファイル・ライセンス | 🤖 | 必須 | ✅ | `README.md` |
| 2-8 | LICENSE（MIT、© 年 ktkwmr） | 🤖 | 必須 | ✅ | `LICENSE` |
| 2-9 | `CLAUDE.md`（このベースラインへの参照、§0 の値、生成ファイルは編集しない等のルール） | 🤖 | 必須 | ✅ | `CLAUDE.md` |
| 2-10 | バージョン番号は表示しない（ビルド番号の置換をやめた）。Service Worker のキャッシュ名も固定 | 🤖 | — | ✅ | 置換の仕組みが消えて `Version: dev` のままになった経緯あり |
| 2-11 | Cloudflare: Workers & Pages で GitHub リポジトリを接続（Workers Builds）。本番ブランチ `main`、カスタムドメイン（またはルート）を設定 | 👤 | 必須 | ✅ | 以後は `main` への push で自動デプロイ。手動なら `npx wrangler deploy` |
| 2-12 | CDN・キャッシュ: 静的アセットは自動で CDN 配信。`index.html`・`sw.js` に長い `max-age` を付けない | — | — | ✅ | 確認は応答ヘッダーの `cf-ray` / `server: cloudflare` |

---

## 3. PWA（ホーム画面に追加・オフライン）

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 3-1 | `manifest.json`（`start_url`・`scope` は `./`、`display: standalone`、説明は英日併記） | 🤖 | 必須 | ✅ | `public/chordtransposer/manifest.json` |
| 3-2 | アイコン一式: `icon.svg`、`icon-192.png`、`icon-512.png`、`icon-maskable-512.png`、`apple-touch-icon.png` | 🤖 | 必須 | ✅ | `icons/` |
| 3-3 | `<head>` の PWA/iOS 用 meta（viewport に `viewport-fit=cover`、`theme-color`、`apple-mobile-web-app-*`、manifest、apple-touch-icon） | 🤖 | 必須 | ✅ | `index.html` 冒頭 |
| 3-4 | `sw.js`: **ネットワーク優先・キャッシュはオフライン用**。キャッシュ名は `<slug>-` で始め、activate 時は自分の接頭辞のキャッシュだけ消す（同じドメインの他アプリを消さない）。同一オリジンの GET だけ扱う | 🤖 | 必須 | ✅ | `sw.js` |
| 3-5 | SW 登録は `load` 後に `navigator.serviceWorker.register("sw.js")`（失敗は無視） | 🤖 | 必須 | ✅ | `index.html` 末尾 |
| 3-6 | `file://` で開かない（SW が動かない）ことを README に書く。古い画面が出るときは再読み込み／アプリの再起動 | 🤖 | 推奨 | ✅ | |
| 3-7 | インストールの案内（Android は `beforeinstallprompt` でボタン、iOS は「共有 → ホーム画面に追加」の案内を 1 回だけ。起動済みなら出さない） | 🤖 | 任意 | ❌ | 提案のみで未実装 |

---

## 4. 多言語（英語＋日本語）

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 4-1 | 文言は `index.html` 内の `I18N = { en: {...}, ja: {...} }` にまとめ、要素は `data-i18n` / `data-i18n-html` / `data-i18n-attr` で指定 | 🤖 | 必須 | ✅ | `index.html` の `I18N` |
| 4-2 | 言語の決め方: URL の `?lang=ja|en` → ページ固定の言語（`/ja/` の `data-page-lang`）→ ブラウザの第一言語（日本語以外は英語）。**言語切り替えメニューと言語の記憶は付けない** | 🤖 | 必須 | ✅ | `detectLang()`。メニューは不要と判断して削除した |
| 4-3 | 日本語ページ `/<slug>/ja/` を `index.html` から**自動生成**（`<head>` の lang・title・description・canonical・OGP・JSON-LD を日本語に、本文も日本語の文言に置換、`<base href>` 追加）。手で編集するのは `index.html` だけ | 🤖 | 必須 | ✅ | `scripts/build-ja.mjs`。JS で切り替えるだけだと Google は英語版しかインデックスしない |
| 4-4 | 日本語の検索用タイトル・説明文を決める | 🤝 | 必須 | ✅ | Claude が案を出し、人間が確認。`build-ja.mjs` 冒頭 |
| 4-5 | 歌詞など和文を表示する部分は `lang="ja"` に固定（英語 UI でも和文が中国語字形にならないように） | 🤖 | 該当時 | ✅ | プレビュー |
| 4-6 | 3 言語目以降は、アクセスの国別内訳（Cloudflare）を見てから URL を分けて足す | 👤 | 任意 | — | 言語を足すだけではユーザーは増えにくい |

---

## 5. SEO と SNS 表示

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 5-1 | `<title>`（「アプリ名 – 何ができるか」）、`meta description`（言語ごとに 1 言語だけ） | 🤖 | 必須 | ✅ | |
| 5-2 | `canonical`、`hreflang`（`en` / `ja` / `x-default`） | 🤖 | 必須 | ✅ | |
| 5-3 | OGP（`og:type/site_name/title/description/locale/url/image` と画像サイズ・alt）、`twitter:card = summary_large_image` | 🤖 | 必須 | ✅ | |
| 5-4 | シェア用画像 `og-image.png`（1200×630）を HTML から Playwright で生成 | 🤖 | 必須 | ✅ | `scripts/og-image.html`、`scripts/render-og-image.mjs` |
| 5-5 | JSON-LD（`WebApplication`、`offers` 0 円、`inLanguage`、`author`） | 🤖 | 必須 | ✅ | 記事は `Article` / `WebPage` |
| 5-6 | `robots.txt`（Sitemap の行）と `sitemap.xml`（hreflang 付き、**スクリプトで生成**） | 🤖 | 必須 | ✅ | `scripts/build-pages.mjs` |
| 5-7 | ページに `<h1>` を置く（見た目は CSS で調整） | 🤖 | 必須 | ❌ | CT のアプリ本体は `<span>` のまま。新アプリでは最初から入れる |
| 5-8 | 画面に見えるテキストを少し置く（何ができるか・対応形式・無料・登録不要）。ダイアログの中だけだと弱い | 🤖 | 推奨 | ⚠️ | CT は記事ページで補った |
| 5-9 | リダイレクト（`/`、末尾スラッシュなし、`index.html`、http/www）は意図どおり。Search Console の「ページにリダイレクトがあります」は対応不要 | — | — | ✅ | |

---

## 6. セキュリティヘッダー

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 6-1 | `public/_headers` に全ページ共通のヘッダー: CSP、`X-Content-Type-Options: nosniff`、`X-Frame-Options: DENY`、`Referrer-Policy: strict-origin-when-cross-origin`、`Permissions-Policy`（使わない機能を無効化） | 🤖 | 必須 | ✅ | `public/_headers`。各許可の理由をコメントで残す |
| 6-2 | CSP の基本形: `default-src 'self'`、`object-src 'none'`、`base-uri 'self'`、`form-action 'none'`、`frame-ancestors 'none'`。インライン JS なら `'unsafe-inline'`、WASM なら `'wasm-unsafe-eval'`、Worker を blob で起動するなら `worker-src blob:` | 🤖 | 必須 | ✅ | |
| 6-3 | **外部ホストを足したら CSP にも足す**（CDN・解析・広告）。足さないとブラウザがブロックする | 🤖 | 必須 | ✅ | README にも明記 |
| 6-4 | CSP を入れた状態で全機能（ファイル読み込み・Worker・プレビュー・保存・SW）を動かし、違反 0 件を確認 | 🤖 | 必須 | ✅ | iOS 15 以前は `wasm-unsafe-eval` 非対応 |
| 6-5 | Permissions-Policy でカメラ等を使う機能を作るときは、そこだけ許可する | 🤖 | 該当時 | — | |

---

## 7. プライバシー・法務・運営者情報

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 7-1 | アプリ内の「プライバシー」ダイアログ（データは端末内だけで処理／外部に送るもの／ブラウザに保存するもの／ホスティングのログ／解析） | 🤖 | 必須 | ✅ | `I18N.*.privacy.body` |
| 7-2 | プライバシーポリシーページ（日英）: 1 ファイル 2 保存データ 3 外部送信の一覧（送信先・タイミング・情報・目的の表＝電気通信事業法の外部送信規律）4 広告と Cookie 5 アクセス解析 6 第三者提供 7 問い合わせ 8 改定（制定日・最終改定日） | 🤖 | 必須 | ✅ | `scripts/pages/privacy.mjs` |
| 7-3 | 運営者情報ページ（日英）: サイト名・URL・運営者・内容・問い合わせ・免責（変換結果や OCR の正確さは保証しない）・著作権 | 🤖 | 必須 | ✅ | `scripts/pages/about.mjs` |
| 7-4 | 問い合わせ窓口（GitHub Issues。AdSense をやるならメールかフォームも） | 🤝 | 必須 | ⚠️ | メール未設置 |
| 7-5 | 外部サービスを足す・外すときは、ポリシーの外部送信表と最終改定日、アプリ内ダイアログ、README を**同時に**直す | 🤖 | 必須 | ✅ | 「広告なし」「解析なし」の記述と実態がずれやすい |
| 7-6 | 例に使うコンテンツ（歌詞・画像など）はオリジナルか著作権切れのものだけ | 🤖 | 必須 | ✅ | |
| 7-7 | ポリシー内の外部リンク（Google・Cloudflare・CDN の規約）を本番で開いて確認 | 👤 | 必須 | — | Claude の環境からは外部サイトを開けないことが多い |

---

## 8. サードパーティライセンス

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 8-1 | CDN から読むライブラリは `THIRD_PARTY_LICENSES.md` に一覧（パッケージ名・ライセンス・著作権者・本文）。バージョンは書かない | 🤖 | 必須 | ✅ | |
| 8-2 | `public/` 内の `cdn.jsdelivr.net/npm/…` / `unpkg.com/…` を探して、足りないものを npm から取得して追記するスクリプト＋ main への push で動く Actions。削除は警告だけ | 🤖 | 必須 | ✅ | `scripts/update-third-party-licenses.mjs`、`.github/workflows/third-party-licenses.yml` |
| 8-3 | About ダイアログで `THIRD_PARTY_LICENSES.md` を読み込んで表示（目印の HTML コメントは隠す）、MIT ライセンスと運営者情報へのリンク | 🤖 | 必須 | ✅ | |
| 8-4 | CDN の読み込みはバージョンを固定（`@5` のような範囲指定にしない）。重いライブラリは必要になったときだけ読み込む | 🤖 | 推奨 | ⚠️ | |

---

## 9. アプリ共通の UI・動作

独自機能に入る前に、どのアプリにも置くものです。

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 9-1 | ⚙ 設定メニュー: 使い方 / ガイド・記事（`<a href>` で HTML に直書き）/ プライバシー / このアプリについて | 🤖 | 必須 | ✅ | `#settingsMenu`。矢印キー操作・`aria-*` |
| 9-2 | 「使い方」ダイアログ（最後に詳しいガイドへのリンク） | 🤖 | 必須 | ✅ | `#helpDlg` |
| 9-3 | 入力内容と設定を `localStorage` に保存・復元（キーは `<slug>-state`、読み書きは try/catch、容量超過は黙って諦める）。**危ない状態は復元しない**（例: 新しいファイルを開いたら移調を 0 に戻す） | 🤖 | 推奨 | ✅ | `STATE_KEY`。プライバシーの説明にも書く。共用端末向けにクリア手段も検討 |
| 9-4 | スマホ対応: `100dvh`＋実測の高さ（`--app-h`）、`safe-area-inset-*`、狭い画面はタブ切り替え、横向き・タブレット縦も確認 | 🤖 | 必須 | ✅ | iOS の見切れ・Android のスクロール問題は初期に何度も直した |
| 9-5 | スマホでファイルを開く: `pointer: coarse` では `accept` を外す（選べないファイルが出るため） | 🤖 | 該当時 | ✅ | |
| 9-6 | 印刷: iOS（特にホーム画面アプリ）は `window.print()` を「自動的な印刷」としてブロックする → 画像にして `navigator.share` で共有メニュー →「プリント」 | 🤖 | 該当時 | ✅ | |
| 9-7 | 出力・保存はダウンロード（`a[download]`）、iOS では共有シート | 🤖 | 該当時 | ✅ | |
| 9-8 | アクセシビリティ: ボタンの `aria-label`、ダイアログに見出し、フォーカス表示、文字のコントラスト 4.5:1 以上 | 🤖 | 必須 | ✅ | |
| 9-9 | 自動テスト（独自ロジックの単体テストと CI） | 🤖 | 推奨 | ❌ | 公開前チェックで指摘され未対応 |

---

## 10. コンテンツページ（ガイド・記事）

検索からの流入と AdSense 審査のためのページです。アプリが道具 1 画面だけだと、検索にも審査にも弱いです。

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 10-1 | 生成の仕組み: `scripts/pages/<slug>.mjs` に英日の本文を別々に書き、共通のヘッダー・フッター・`<head>`（canonical・hreflang・OGP・JSON-LD）は `layout.mjs`、`build-pages.mjs` がページと sitemap を生成。`PAGES`（記事）と `INFO_PAGES`（ポリシー・運営者） | 🤖 | 推奨 | ✅ | `scripts/build-pages.mjs`、`scripts/pages/` |
| 10-2 | 最初の記事: 使い方ガイド（画面写真付き）＋ FAQ ＋ そのアプリの分野の基礎知識 3〜5 本。具体的な悩みの検索語を狙う | 🤝 | 推奨 | ✅ | テーマは人間と相談 |
| 10-3 | 表などは計算で生成して書き間違いを防ぐ | 🤖 | 推奨 | ✅ | `scripts/pages/music.mjs` |
| 10-4 | 画面写真は Playwright で撮る（スマホ・PC、日英）。見た目を変えたら撮り直す | 🤖 | 推奨 | ✅ | `scripts/render-guide-images.mjs` |
| 10-5 | 各記事の末尾に「アプリを開く」、フッターに全記事、日英切り替えリンク。アプリ側からは設定メニューと使い方から 2 か所 | 🤖 | 推奨 | ✅ | 主な導線は検索 → 記事 → アプリ |
| 10-6 | 公開前の UX レビュー（スマホ幅 390px で全ページ）: `<pre>` に字下げが入っていないか、横に長い表のスクロールの気づきやすさ、コントラスト、スマホで表が窮屈でないか、用語の初出説明、アプリ表記との一致 | 🤖 | 推奨 | ✅ | CT で 13 項目見つかった |

---

## 11. アクセス解析

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 11-1 | Cloudflare Web Analytics（Cookie なし）のサイトを登録し、JS Snippet の token を Claude に渡す | 👤 | 推奨 | ✅ | 自動埋め込みは動かなかったので手動の Snippet 方式 |
| 11-2 | 全ページの `</body>` 直前に beacon を入れる（生成ページも）。CSP に `script-src https://static.cloudflareinsights.com`、`connect-src https://cloudflareinsights.com` | 🤖 | 推奨 | ✅ | 404 には入れない |
| 11-3 | プライバシー（ポリシー・アプリ内・README）に解析の記述を足す | 🤖 | 推奨 | ✅ | §7-5 |
| 11-4 | 本番で DevTools の Network を `cloudflareinsights` で絞り、`beacon.min.js` と `rum` が 200/204 か確認 | 👤 | 推奨 | ✅ | 広告ブロッカー利用者は数えられない |

---

## 12. CI・自動化・開発フロー

| # | 項目 | 担当 | 優先度 | CT | 参照・メモ |
|---|---|---|---|---|---|
| 12-1 | Actions「Build generated pages」: main への push で生成スクリプトを実行し、差分があればボットがコミット | 🤖 | 必須 | ✅ | `.github/workflows/build-ja.yml`。main を保護して直接 push を禁止すると失敗する |
| 12-2 | Actions「Update third-party licenses」 | 🤖 | 必須 | ✅ | §8-2 |
| 12-3 | 作業の流れ: Claude が作業ブランチに push → PR → Cloudflare のプレビュービルド成功を確認 → **squash マージ**。マージ済みブランチは最新 main から作り直す | 🤖 | — | ✅ | ビルド失敗のログは Cloudflare にしかない → PR の Cloudflare ボットのコメント「View logs」を人間に開いてもらう |
| 12-4 | ローカル確認: `npx wrangler dev`（生成も走る）か `npx serve public`。Windows は `npx.cmd` | 👤 | — | ✅ | 生成ファイルが改行だけ変わって「変更あり」になることがある |
| 12-5 | 生成ファイルは手で編集しない（`ja/index.html`、記事ページ、`sitemap.xml`）。README と CLAUDE.md に明記 | 🤖 | 必須 | ✅ | |

---

## 13. 公開直前・公開時（👤 中心）

| # | 項目 | 担当 | 優先度 | メモ |
|---|---|---|---|---|
| 13-1 | Cloudflare で本番デプロイが成功しているか（Workers & Pages → <アプリ> → Deployments / Builds） | 👤 | 必須 | |
| 13-2 | 本番 URL を日英・スマホ・PC で開いて動作確認。PWA として追加して起動、オフラインで開けるか | 👤 | 必須 | Claude の環境は本番に接続できないことが多い |
| 13-3 | iPhone の実機確認（印刷・共有・ファイルを開く・OCR などの iOS 特有の動き） | 👤 | 必須 | |
| 13-4 | GitHub の About: Description・Website・Topics を入力（PC か「デスクトップ用 Web サイト」表示で） | 🤝 | 必須 | Claude の GitHub ツールでは書き換えられない。値は Claude が用意 |
| 13-5 | X や LINE に URL を貼ってカード（画像付き）が出るか | 👤 | 推奨 | |

## 14. 公開後（👤 中心）

| # | 項目 | 担当 | 優先度 | メモ |
|---|---|---|---|---|
| 14-1 | Google Search Console: ドメインプロパティ（Cloudflare の DNS に TXT レコード）。登録済みなら不要 | 👤 | 必須 | 新アプリでも同じドメインなら登録し直し不要 |
| 14-2 | サイトマップ送信 `https://<ドメイン>/sitemap.xml`、URL 検査で `/<slug>/` と `/<slug>/ja/` の「インデックス登録をリクエスト」 | 👤 | 必須 | ページを足したら再送信。デプロイ前に送らない |
| 14-3 | Bing Webmaster Tools（Search Console から取り込み） | 👤 | 推奨 | |
| 14-4 | `site:<ドメイン>` で検索してインデックスを確認。順位は数か月単位 | 👤 | 推奨 | |
| 14-5 | 外部からの紹介（GitHub の About、X・note・Qiita・Zenn の記事、分野のコミュニティ、ツールまとめサイト） | 👤 | 推奨 | |
| 14-6 | 数週間〜数か月後に Search Console の検索語・Cloudflare の国別アクセスを見て、記事や言語を足す | 👤 | 任意 | |

---

## 15. 収益化（Google AdSense・任意）

ChordTransposer で計画し、フェーズ 1 まで実施済みです。

| # | 項目 | 担当 | CT | メモ |
|---|---|---|---|---|
| 15-1 | フェーズ 1（審査前の準備）: 記事ページ（§10）、ポリシー・運営者情報（§7）、アプリから記事への導線、Search Console | 🤖👤 | ✅ | 一番時間がかかり、結果を左右する |
| 15-2 | AdSense アカウント作成（本名・住所）、サイト `<ドメイン>` を追加 | 👤 | ❌ | 18 歳以上 |
| 15-3 | サイト確認用のコード（`adsbygoogle.js?client=ca-pub-…` か `google-adsense-account` meta）を全ページの `<head>` に。生成ページにも自動で入るようにする | 🤖 | ❌ | |
| 15-4 | `public/ads.txt`: `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`（ドメイン直下） | 🤖 | ❌ | §0 の注意（ドメイン直下のファイル） |
| 15-5 | CSP に広告のホストを追加（`script-src`・`frame-src`・`img-src`・`connect-src`。googlesyndication / doubleclick / google / adtrafficquality / fundingchoicesmessages）。実際の違反をコンソールで見ながら詰める | 🤖 | ❌ | |
| 15-6 | プライバシーの「広告なし」を書き換え（アプリ内・README）。ポリシーには AdSense の必須 3 点（第三者の Cookie、広告設定でのオプトアウト、aboutads.info）を記載済み | 🤖 | ⚠️ | |
| 15-7 | AdSense の「プライバシーとメッセージ」で EEA・英国・スイス向けの同意メッセージを有効化 | 👤 | ❌ | |
| 15-8 | 審査申請（デプロイ後）。却下されたら理由を見てコンテンツを足す | 👤 | ❌ | |
| 15-9 | 承認後の広告枠: アプリ画面は高さ固定の帯（CLS を出さない）、操作ボタン・ダイアログ・プレビュー・保存ファイルには置かない、アプリ画面ではオーバーレイ型の自動広告を切る、記事ページは自動広告可、未配信時は枠を畳む | 🤖 | ❌ | |
| 15-10 | 税務情報（W-8BEN）、支払い口座、住所確認 PIN、確定申告 | 👤 | ❌ | |

---

## 16. 落とし穴と教訓（履歴から）

- **Claude の環境から届かないもの**: 本番サイト（ktkwmr.com）、Cloudflare 管理画面とビルドログ、jsDelivr などの外部 CDN、iPhone 実機。→ 結果の確認は人間にお願いし、Claude は「未確認」と書く。CDN のファイルは npm の公式サイトから取って代わりに返す形でテストした。
- **GitHub のアカウント名変更**: リポジトリは転送されるが、Claude の GitHub App は再接続が必要（`https://github.com/settings/installations` → Configure → Save、だめなら Revoke → `https://claude.ai/connect-github` で接続し直し）。途中で GitHub の本人確認（GitHub Mobile か メールのコード）が出る。
- **同名リポジトリ**: 旧名と新名のリポジトリは 1 セッションに同時に置けない。名前を変えたら新しいセッションで始める。
- **Cloudflare のプレビュービルド**: main 以外のブランチは `npx wrangler preview` が走り、`wrangler.jsonc` に `"previews": {}` がないと失敗する。本番には影響しないが、PR が赤くなる。
- **Windows**: PowerShell の実行ポリシーで `npx` が止まる（`npx.cmd`）。Git の改行変換で生成スクリプトが失敗する（LF に正規化）。
- **ドキュメントと実態のずれ**: 「広告なし」「解析なし」「手動で `wrangler deploy`」など、仕組みを変えたら README・アプリ内の文言・ポリシーを同じ PR で直す。
- **Cloudflare Web Analytics**: 「自動」設定でも beacon が入らず View が 0 のことがある。HTML に Snippet を直接書くのが確実。
- **Cloudflare のメール変更**: 確認リンクは旧アドレスでログイン中の同じブラウザで開く（Gmail アプリ内ブラウザは不可）。請求先メールは別に変える。
- **記事の生成**: HTML を整形するときに `<pre>` の中まで字下げしてしまうバグがあった。
- **iOS**: `window.print()` がブロックされる。ホーム画面アプリでの見切れ・スクロールの問題が多い。必ず実機で見る。
- **状態の保存**: 前回の設定がそのまま残ると、気づかず違う結果を保存してしまう。リセットすべき値を決める。

---

## 付録 1. 新アプリの CLAUDE.md の雛形

```markdown
# <AppName>

<1 行の説明>。公開 URL: https://<ドメイン>/<slug>/

## 共通ベースライン
- 独自機能以外の共通項目は ktkwmr/ChordTransposer の docs/WEBAPP_BASELINE.md に従う（移設後はそのリポジトリ）。
  読めないときは add_repo（read）で追加して読む。
- 各項目の状態は docs/baseline-status.md に記録する。
- どのアプリにも当てはまる新しい作業・設定・落とし穴が出てきたら、作業の最後に
  ベースラインへの追記案を出す（ユーザーが了承したらベースラインのリポジトリに PR）。

## このアプリの値
- スラッグ: <slug> / ドメイン: <ドメイン> / 言語: en（既定）+ ja（/ja/）
- 運営者: ktkwmr / 問い合わせ: GitHub Issues
- Cloudflare Web Analytics token: <token>

## ルール
- 生成ファイル（public/<slug>/ja/index.html、記事ページ、public/sitemap.xml）は編集しない。
- 外部ホストを足したら public/_headers の CSP と、プライバシーの説明（ポリシー・アプリ内・README）を同じ PR で直す。
- 作業はブランチ → PR → Cloudflare のプレビュービルド確認 → squash マージ。
```

## 付録 2. `docs/baseline-status.md` の雛形

```markdown
# ベースラインの実施状況（<AppName>）

基準: WEBAPP_BASELINE.md（最終更新 YYYY-MM-DD 版）

| # | 項目 | 状態 | メモ |
|---|---|---|---|
| 2-1 | wrangler.jsonc | ✅ | |
| 5-7 | h1 | ❌ | |
| 13-4 | GitHub About | 👤 待ち | Description: … |
```

---

## U. 更新ルール

**いつ更新するか**: どのアプリでも必要になる作業・設定・人間の手順・落とし穴が見つかったとき。例: 新しい外部サービスの導入手順、Cloudflare や Google の画面・仕様の変更、新しいブラウザの制約。アプリ独自の機能は書かない。

**誰が・どうやって**
1. Claude は作業の最後に「ベースラインに追記すべきこと」があるか確認し、あれば追記案（どの節に何を足すか）をユーザーに示す。
2. ユーザーが了承したら、このファイルを編集して PR を出す。番号は既存の節の末尾に足す（既存の番号は変えない。廃止は取り消し線で残す）。
3. 冒頭の「最終更新」と下の変更履歴を更新する。
4. ChordTransposer 以外のアプリで見つかった場合は、参照列にそのアプリのファイルを書く。

**書き方**: 1 項目 1 行。「何を・どこに・なぜ（落とし穴）」が分かるように。担当（🤖/👤/🤝）と優先度を必ず付ける。

## 変更履歴

| 日付 | 内容 |
|---|---|
| 2026-10-18 | 初版。ChordTransposer の開発履歴（PR #1〜#17、acogist / ktkwmr のセッション）から作成 |
