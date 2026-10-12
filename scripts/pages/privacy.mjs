// Privacy policy (site information page, linked from the footer and from the app's Privacy dialog).
// Includes the disclosures Google AdSense requires and the external-transmission notice
// required in Japan (電気通信事業法の外部送信規律). Update `modified` when the content changes.
const ISSUES = "https://github.com/ktkwmr/ChordTransposer/issues";
const GOOGLE_ADS = "https://policies.google.com/technologies/ads";
const GOOGLE_PARTNERS = "https://policies.google.com/technologies/partner-sites";
const ADS_SETTINGS = "https://adssettings.google.com/";
const ABOUTADS = "https://www.aboutads.info/choices/";
const JSDELIVR = "https://www.jsdelivr.com/terms";
const CLOUDFLARE = "https://www.cloudflare.com/privacypolicy/";

export default {
  slug: "privacy",
  schemaType: "WebPage",
  modified: "2026-10-12",
  en: {
    title: "Privacy Policy",
    heading: "Privacy policy",
    nav: "Privacy policy",
    description:
      "How Chord Transposer handles information: files stay on your device, data saved in your browser, external services (jsDelivr, Cloudflare, Google AdSense), cookies, and how to opt out of personalized ads.",
    body: () => `
<p class="lead">This policy explains how Chord Transposer (https://ktkwmr.com/chordtransposer/, "this site") handles information. In short: the chord charts you work with never leave your device.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#files">Your chord charts and files</a></li>
  <li><a href="#storage">Data saved in your browser</a></li>
  <li><a href="#external">Information sent to external services</a></li>
  <li><a href="#ads">Advertising and cookies</a></li>
  <li><a href="#analytics">Analytics</a></li>
  <li><a href="#third-party">Sharing with third parties</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#changes">Changes to this policy</a></li>
</ol></nav>

<h2 id="files">1. Your chord charts and files</h2>
<p>Chord charts you type or paste and files you open (text, PDF, and images) are processed only in your browser. They are never uploaded to our server or to anyone else. This site has no accounts, and we do not ask for your name, email address, or other personal information.</p>

<h2 id="storage">2. Data saved in your browser</h2>
<p>The following data is saved in your browser's storage on your device. It is not sent to us.</p>
<ul>
  <li><b>Your work and settings:</b> the chord chart you are working on, the transpose and #/♭ settings, the text size, and the name of the file you opened, so you can continue next time.</li>
  <li><b>App files:</b> the pages and files of this site you have opened, so the app works offline.</li>
  <li><b>OCR language data:</b> the Japanese and English data for reading text from images, after you first open an image or a scanned PDF.</li>
</ul>
<p>To delete this data, clear this site's data (site data, cookies, and storage for ktkwmr.com) in your browser settings.</p>

<h2 id="external">3. Information sent to external services</h2>
<p>When you use this site, your browser sends information to the following services. This list also serves as the notice of external transmission required under Japan's Telecommunications Business Act.</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">Service (operator)</th><th scope="col">When</th><th scope="col">Information sent</th><th scope="col">Purpose</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a> (Cloudflare, Inc.)</th><td data-label="When:">Every page and file request</td><td data-label="Information sent:">IP address, browser information (user agent), requested URL, date and time</td><td data-label="Purpose:">Hosting this site, security, and access logs for operation</td></tr>
      <tr><th scope="row"><a href="${JSDELIVR}" rel="noopener">jsDelivr</a> (cdn.jsdelivr.net)</th><td data-label="When:">When you open a PDF or an image</td><td data-label="Information sent:">IP address, browser information, requested URL, date and time. <b>Your file is not sent.</b></td><td data-label="Purpose:">Downloading the PDF.js and Tesseract.js libraries and the OCR language data</td></tr>
      <tr><th scope="row"><a href="${GOOGLE_ADS}" rel="noopener">Google AdSense</a> (Google LLC)</th><td data-label="When:">When a page shows ads</td><td data-label="Information sent:">IP address, browser information, the URL of the page, cookie and advertising identifiers</td><td data-label="Purpose:">Showing ads, measuring them, and preventing fraud (see the next section)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="ads">4. Advertising and cookies</h2>
<p>This site itself does not set cookies. To keep the app free, this site may show ads from <b>Google AdSense</b>, a third-party advertising service. When ads are shown:</p>
<ul>
  <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
  <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to this site and/or other sites on the Internet. For details, see <a href="${GOOGLE_ADS}" rel="noopener">how Google uses cookies in advertising</a> and <a href="${GOOGLE_PARTNERS}" rel="noopener">how Google uses information from sites that use its services</a>.</li>
  <li>You can opt out of personalized advertising in Google's <a href="${ADS_SETTINGS}" rel="noopener">Ads Settings</a>. You can also opt out of other third-party vendors' use of cookies for personalized advertising at <a href="${ABOUTADS}" rel="noopener">www.aboutads.info</a>.</li>
  <li>Visitors from the European Economic Area, the United Kingdom, and Switzerland are asked for consent before cookies are used for advertising.</li>
</ul>
<p>Even if you opt out of personalized ads, you may still see ads; they are just not based on your interests.</p>

<h2 id="analytics">5. Analytics</h2>
<p>This site does not use access analytics tools such as Google Analytics. We only use the standard access logs described above.</p>

<h2 id="third-party">6. Sharing with third parties</h2>
<p>We do not collect personal information that identifies you, and we do not sell or provide it to third parties, except where required by law.</p>

<h2 id="contact">7. Contact</h2>
<p>For questions about this policy, please open an issue on <a href="${ISSUES}" rel="noopener">GitHub Issues</a>. See <a href="../about/">about this site</a> for the operator.</p>

<h2 id="changes">8. Changes to this policy</h2>
<p>We may update this policy when the site changes, for example when we add or remove a service. The updated policy applies from the time it is posted on this page.</p>
<p>Effective: October 12, 2026</p>
`,
  },
  ja: {
    title: "プライバシーポリシー",
    heading: "プライバシーポリシー",
    nav: "プライバシーポリシー",
    description:
      "Chord Transposer のプライバシーポリシー。ファイルが端末の外に出ないこと、ブラウザに保存するデータ、外部への送信（jsDelivr・Cloudflare・Google AdSense）、Cookie と広告、パーソナライズ広告の無効化について。",
    body: () => `
<p class="lead">Chord Transposer（https://ktkwmr.com/chordtransposer/、以下「本サイト」）での情報の取り扱いについて説明します。要点は、扱うコード譜が端末の外に出ないことです。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#files">コード譜とファイル</a></li>
  <li><a href="#storage">ブラウザに保存するデータ</a></li>
  <li><a href="#external">外部への情報の送信</a></li>
  <li><a href="#ads">広告と Cookie</a></li>
  <li><a href="#analytics">アクセス解析</a></li>
  <li><a href="#third-party">第三者への提供</a></li>
  <li><a href="#contact">お問い合わせ</a></li>
  <li><a href="#changes">改定</a></li>
</ol></nav>

<h2 id="files">1. コード譜とファイル</h2>
<p>入力・貼り付けたコード譜や、開いたファイル（テキスト・PDF・画像）は、ブラウザの中だけで処理されます。運営者のサーバーやほかの誰かに送られることはありません。本サイトにはアカウント登録はなく、氏名やメールアドレスなどの個人情報をお聞きすることもありません。</p>

<h2 id="storage">2. ブラウザに保存するデータ</h2>
<p>次のデータを、お使いの端末のブラウザ内に保存します。運営者に送られることはありません。</p>
<ul>
  <li><b>編集中の内容と設定：</b>次に開いたときに続きから使えるよう、編集中のコード譜、移調と #/♭ の設定、文字サイズ、開いたファイルの名前を保存します。</li>
  <li><b>アプリのファイル：</b>オフラインでも使えるよう、開いた本サイトのページやファイルを保存します。</li>
  <li><b>OCR 用の言語データ：</b>画像やスキャンした PDF を初めて開いたときに、文字を読み取るための日本語・英語のデータを保存します。</li>
</ul>
<p>消したいときは、ブラウザの設定でこのサイト（ktkwmr.com）のデータ（サイトデータ・Cookie・ストレージ）を削除してください。</p>

<h2 id="external">3. 外部への情報の送信</h2>
<p>本サイトを利用すると、お使いのブラウザから次のサービスに情報が送信されます。この一覧は、電気通信事業法の外部送信規律に基づく公表を兼ねています。</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">送信先（事業者）</th><th scope="col">送信のタイミング</th><th scope="col">送信される情報</th><th scope="col">利用目的</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a>（Cloudflare, Inc.）</th><td data-label="タイミング：">すべてのページ・ファイルの読み込み時</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報（ユーザーエージェント）、アクセスした URL、日時</td><td data-label="利用目的：">本サイトの配信、セキュリティの確保、運用のためのアクセスログ</td></tr>
      <tr><th scope="row"><a href="${JSDELIVR}" rel="noopener">jsDelivr</a>（cdn.jsdelivr.net）</th><td data-label="タイミング：">PDF や画像を開いたとき</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報、アクセスした URL、日時。<b>ファイルの内容は送られません。</b></td><td data-label="利用目的：">PDF.js・Tesseract.js のライブラリと OCR 用の言語データのダウンロード</td></tr>
      <tr><th scope="row"><a href="${GOOGLE_ADS}" rel="noopener">Google AdSense</a>（Google LLC）</th><td data-label="タイミング：">広告を表示するページを開いたとき</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報、閲覧したページの URL、Cookie や広告識別子</td><td data-label="利用目的：">広告の配信・効果測定・不正防止（次の項目を参照）</td></tr>
    </tbody>
  </table>
</div>

<h2 id="ads">4. 広告と Cookie</h2>
<p>本サイト自体は Cookie を設定しません。アプリを無料で提供し続けるため、本サイトでは第三者配信の広告サービス「<b>Google AdSense</b>」の広告を表示する場合があります。広告を表示する場合、次のとおりです。</p>
<ul>
  <li>Google などの第三者配信事業者は Cookie を使用して、ユーザーが本サイトやほかのサイトに過去にアクセスした際の情報に基づいて広告を配信します。</li>
  <li>Google は広告 Cookie を使用することにより、ユーザーが本サイトやほかのサイトにアクセスした際の情報に基づいて、Google やそのパートナーが適切な広告を表示できます。詳しくは「<a href="${GOOGLE_ADS}" rel="noopener">Google の広告における Cookie の使用</a>」と「<a href="${GOOGLE_PARTNERS}" rel="noopener">Google のサービスを使用するサイトやアプリから収集した情報の Google による使用</a>」をご覧ください。</li>
  <li>パーソナライズ広告は、Google の<a href="${ADS_SETTINGS}" rel="noopener">広告設定</a>で無効にできます。また、<a href="${ABOUTADS}" rel="noopener">www.aboutads.info</a> にアクセスすれば、パーソナライズ広告に使われる第三者配信事業者の Cookie を無効にできます。</li>
  <li>欧州経済領域（EEA）・英国・スイスからアクセスした方には、広告に Cookie を使う前に同意をお願いします。</li>
</ul>
<p>パーソナライズ広告を無効にしても広告は表示されますが、興味・関心に基づかない広告になります。</p>

<h2 id="analytics">5. アクセス解析</h2>
<p>本サイトでは、Google アナリティクスなどのアクセス解析ツールは使用していません。利用しているのは、上記の標準的なアクセスログだけです。</p>

<h2 id="third-party">6. 第三者への提供</h2>
<p>本サイトは、個人を特定できる情報を収集していません。法令に基づく場合を除き、個人情報を第三者に販売・提供することはありません。</p>

<h2 id="contact">7. お問い合わせ</h2>
<p>本ポリシーについてのご質問は、<a href="${ISSUES}" rel="noopener">GitHub の Issues</a> にお寄せください。運営者については<a href="../about/">運営者情報</a>をご覧ください。</p>

<h2 id="changes">8. 改定</h2>
<p>サービスの追加・終了など本サイトの変更に合わせて、本ポリシーを改定することがあります。改定後のポリシーは、このページに掲載した時点から適用されます。</p>
<p>制定日：2026 年 10 月 12 日</p>
`,
  },
};
