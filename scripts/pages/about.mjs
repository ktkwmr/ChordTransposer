// Operator information (site information page, linked from the footer)
const ISSUES = "https://github.com/ktkwmr/ChordTransposer/issues";
const REPO = "https://github.com/ktkwmr/ChordTransposer";

export default {
  slug: "about",
  schemaType: "AboutPage",
  modified: "2026-10-12",
  en: {
    title: "About This Site",
    heading: "About this site",
    nav: "About this site",
    description: "Operator information for Chord Transposer: who runs the site, how to contact us, disclaimer, and copyright.",
    body: () => `
<div class="table-wrap">
  <table class="text stack">
    <tbody>
      <tr><th scope="row">Site name</th><td>Chord Transposer</td></tr>
      <tr><th scope="row">URL</th><td><a href="/chordtransposer/">https://ktkwmr.com/chordtransposer/</a></td></tr>
      <tr><th scope="row">Operator</th><td>ktkwmr (individual developer)</td></tr>
      <tr><th scope="row">What we offer</th><td>A free web app that transposes chord charts, and articles about transposing, capos, and chord notation</td></tr>
      <tr><th scope="row">Contact</th><td><a href="${ISSUES}" rel="noopener">GitHub Issues</a></td></tr>
    </tbody>
  </table>
</div>

<h2 id="contact">Contact</h2>
<p>For questions, bug reports, and suggestions, please open an issue on <a href="${ISSUES}" rel="noopener">GitHub Issues</a>. A GitHub account (free) is required.</p>
<p>Issues are public. Do not include personal information or the full lyrics of copyrighted songs. If a chart is converted incorrectly, a short example of a few lines is enough.</p>

<h2 id="disclaimer">Disclaimer</h2>
<ul>
  <li>We try to make the app and the articles accurate, but we do not guarantee that transposition results, text read from PDFs or images, or the information in the articles are correct or complete. Please check the result before you perform or share it.</li>
  <li>We are not responsible for any loss or damage resulting from the use of this site.</li>
  <li>Links to other websites are provided for convenience. We are not responsible for their content.</li>
  <li>The content of this site may be changed or removed, and the service may be stopped, without notice.</li>
</ul>

<h2 id="copyright">Copyright</h2>
<ul>
  <li>The app's source code is published under the <a href="${REPO}/blob/main/LICENSE" rel="noopener">MIT License</a>. Libraries used by the app are listed under Settings → About in the app.</li>
  <li>The articles and images on this site are © 2026 ktkwmr.</li>
  <li>The example songs in the articles (<i>Amazing Grace</i> and 「故郷」) are in the public domain. The chords added to them are simple examples written for this site.</li>
  <li>Chord charts you open or type in the app are processed only on your device. Respect the copyright of the songs you use.</li>
</ul>

<h2 id="privacy">Privacy and advertising</h2>
<p>How this site handles information, including cookies and advertising, is described in the <a href="../privacy/">privacy policy</a>.</p>
`,
  },
  ja: {
    title: "運営者情報",
    heading: "運営者情報",
    nav: "運営者情報",
    description: "Chord Transposer の運営者情報。運営者、お問い合わせ先、免責事項、著作権について。",
    body: () => `
<div class="table-wrap">
  <table class="text stack">
    <tbody>
      <tr><th scope="row">サイト名</th><td>Chord Transposer</td></tr>
      <tr><th scope="row">URL</th><td><a href="/chordtransposer/ja/">https://ktkwmr.com/chordtransposer/ja/</a></td></tr>
      <tr><th scope="row">運営者</th><td>ktkwmr（個人開発者）</td></tr>
      <tr><th scope="row">内容</th><td>コード譜を移調する無料の Web アプリと、移調・カポ・コード表記についての解説記事</td></tr>
      <tr><th scope="row">お問い合わせ</th><td><a href="${ISSUES}" rel="noopener">GitHub の Issues</a></td></tr>
    </tbody>
  </table>
</div>

<h2 id="contact">お問い合わせ</h2>
<p>ご質問・不具合の報告・ご要望は、<a href="${ISSUES}" rel="noopener">GitHub の Issues</a> にお寄せください。投稿には GitHub のアカウント（無料）が必要です。</p>
<p>Issues の内容は公開されます。個人情報や、著作権のある曲の歌詞全文は書かないでください。変換がおかしいときは、数行の短い例があれば十分です。</p>

<h2 id="disclaimer">免責事項</h2>
<ul>
  <li>アプリと記事の内容はできるだけ正確になるよう努めていますが、移調の結果、PDF や画像から読み取った文字、記事の情報が正確・完全であることを保証するものではありません。演奏や共有の前に、結果を確認してください。</li>
  <li>本サイトの利用によって生じた損害について、運営者は責任を負いません。</li>
  <li>本サイトからリンクしている外部サイトの内容について、運営者は責任を負いません。</li>
  <li>本サイトの内容は、予告なく変更・削除したり、提供を終了したりすることがあります。</li>
</ul>

<h2 id="copyright">著作権</h2>
<ul>
  <li>アプリのソースコードは <a href="${REPO}/blob/main/LICENSE" rel="noopener">MIT ライセンス</a>で公開しています。アプリが使用しているライブラリは、アプリの「設定 → このアプリについて」に掲載しています。</li>
  <li>本サイトの記事と画像の著作権は ktkwmr に帰属します（© 2026 ktkwmr）。</li>
  <li>記事で例に使っている曲（<i>Amazing Grace</i> と「故郷」）は、著作権の保護期間が終了しています。付けているコードは、本サイトで説明用に簡単に付けたものです。</li>
  <li>アプリで開いたり入力したりしたコード譜は、お使いの端末の中だけで処理されます。曲の著作権には十分ご注意ください。</li>
</ul>

<h2 id="privacy">プライバシーと広告</h2>
<p>Cookie や広告を含む、本サイトでの情報の取り扱いについては<a href="../privacy/">プライバシーポリシー</a>をご覧ください。</p>
`,
  },
};
