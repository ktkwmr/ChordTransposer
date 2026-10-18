# Chord Transposer

コード譜を転調する Web アプリ。公開 URL: https://ktkwmr.com/chordtransposer/ （日本語: /chordtransposer/ja/）
構成・開発・デプロイの詳細は README.md を参照。

## 共通ベースライン
- `docs/WEBAPP_BASELINE.md` は、このアプリに限らず今後の Web アプリ全部で共通にやることのチェックリスト。ChordTransposer はその参照実装。
- どのアプリにも当てはまる新しい作業・設定・人間の手順・落とし穴が出てきたら、作業の最後に「ベースラインへの追記案」（どの節に何を足すか）をユーザーに示す。了承されたら `docs/WEBAPP_BASELINE.md` を更新し（更新ルールは同ファイルの §U）、同じ PR に含める。
- 独自機能（転調・OCR・プレビューなど）の変更だけなら追記は不要。

## このアプリの値
- スラッグ: `chordtransposer` / ドメイン: `ktkwmr.com` / 言語: en（既定）+ ja（`/ja/`）
- 運営者: ktkwmr / 問い合わせ: GitHub Issues
- ホスティング: Cloudflare Workers 静的アセット（`main` への push で自動デプロイ、PR ブランチはプレビュービルド）

## ルール
- 手で編集するのはアプリ本体 `public/chordtransposer/index.html` と `scripts/`。生成ファイル（`public/chordtransposer/ja/index.html`、記事ページ、`public/sitemap.xml`）は編集せず、`node scripts/build-ja.mjs` と `node scripts/build-pages.mjs` で作り直す（`--check` で確認）。
- 外部ホストを足したら `public/_headers` の CSP と、プライバシーの説明（`scripts/pages/privacy.mjs`、アプリ内の `privacy.body`、README）を同じ PR で直す。
- 例に使うコード譜はオリジナルか著作権切れの曲だけ。
- 作業はブランチ → PR → Cloudflare のプレビュービルド確認 → squash マージ。
- 本番サイト・Cloudflare 管理画面・外部 CDN にはこの環境から届かないことが多い。確かめられなかったことは「未確認」と書き、ユーザーに確認手順を伝える。
