const img = (lang, name, alt, cls = "") =>
  `<img src="/chordtransposer/images/guide/${lang}-${name}.png" alt="${alt}" width="${name === "phone" ? 780 : name === "preview" ? 1024 : 1200}" height="${name === "phone" ? 1440 : name === "preview" ? 720 : 640}" loading="lazy" decoding="async"${cls}>`;

export default {
  slug: "guide",
  en: {
    title: "How to Use Chord Transposer: Complete Guide",
    heading: "How to use Chord Transposer",
    nav: "How to use (guide)",
    description:
      "Step-by-step guide to Chord Transposer: paste or open a chord chart (text, PDF, or image), transpose it, choose sharps or flats, preview, print, and save — plus tips for reading photos and scanned PDFs with OCR.",
    body: () => `
<p class="lead">Chord Transposer changes the key of a chord chart in your browser. This guide walks through every button and shares tips for getting clean results from PDFs and photos.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#screen">The screen at a glance</a></li>
  <li><a href="#quick">Transpose a chart in four steps</a></li>
  <li><a href="#files">Opening files</a></li>
  <li><a href="#ocr">Tips for photos and scanned PDFs</a></li>
  <li><a href="#check">Check the result</a></li>
  <li><a href="#preview">Preview, print, and save</a></li>
  <li><a href="#phone">On a phone</a></li>
  <li><a href="#offline">Install the app and use it offline</a></li>
</ol></nav>

<h2 id="screen">The screen at a glance</h2>
<figure class="shot">
  ${img("en", "overview", "Chord Transposer on a computer: the toolbar at the top, the Input area on the left with Amazing Grace in G, and the Output area on the right with the song transposed to A. Numbers 1 to 8 mark the controls.")}
  <figcaption>Input on the left, Output on the right. The numbers match the list below.</figcaption>
</figure>
<ol>
  <li><b>Open</b> (folder button): open a chord chart file.</li>
  <li><b>Input</b>: paste or type a chord chart here. You can edit it at any time.</li>
  <li><b>Transpose</b>: the number of semitones to move, from −12 to +12.</li>
  <li><b>#/♭</b>: how to write the transposed chords — Original, Prefer #, or Prefer b.</li>
  <li><b>Size</b>: the text size of Input and Output.</li>
  <li><b>Preview</b>: show the whole chart at once, ready to print. Input and Output each have their own Preview button.</li>
  <li><b>Save</b>: save Input or Output as a text file.</li>
  <li><b>Settings</b>: How to use, Privacy, and About (license information).</li>
</ol>

<h2 id="quick">Transpose a chart in four steps</h2>
<ol>
  <li><b>Add the chart.</b> Paste it into Input, or press the folder button to open a file.</li>
  <li><b>Choose the shift</b> in Transpose. For example, +2 moves G to A. Not sure how far to move? See <a href="../key-chart/#shift">how many semitones between two keys</a>.</li>
  <li><b>Choose sharps or flats</b> in #/♭. For a flat key such as F, Bb, or Eb, choose Prefer b (see <a href="../sharps-and-flats/">sharps or flats?</a>).</li>
  <li><b>Use the result:</b> preview, print, or save Output. Output updates as soon as you change anything, so you can try several keys quickly.</li>
</ol>
<p>Only chord names change. Lyrics, titles, and notes stay as they are, and the app keeps each chord above the same word by adjusting the spaces around it. A <code>Key:</code> line at the top of the chart is updated too.</p>

<h2 id="files">Opening files</h2>
<div class="table-wrap">
  <table class="text">
    <thead><tr><th scope="col">File</th><th scope="col">How it is read</th></tr></thead>
    <tbody>
      <tr><th scope="row">Text (.txt, .cho, .chopro, .crd, .pro, …)</th><td>Read as it is. The most accurate option. <a href="../chordpro/">ChordPro</a> files work too.</td></tr>
      <tr><th scope="row">PDF with text</th><td>The text is taken from the PDF, keeping the columns of chords and lyrics as far as possible.</td></tr>
      <tr><th scope="row">Scanned PDF</th><td>Pages without text are read with OCR (text recognition). Up to the first 20 pages are read.</td></tr>
      <tr><th scope="row">Image (PNG, JPEG, WebP, …)</th><td>Read with OCR for Japanese and English.</td></tr>
    </tbody>
  </table>
</div>
<p>When you open a file, Transpose goes back to 0 so the new song does not start in a shifted key. If the file does not seem to contain chords, the app tells you instead of loading it.</p>
<p>Files are processed only in your browser and are never uploaded. To read PDFs and images, the app downloads its reading libraries the first time you open one, so that step needs an internet connection.</p>

<h2 id="ocr">Tips for photos and scanned PDFs</h2>
<p>OCR guesses each character from the picture, so it can misread chords — for example, <code>b</code> as <code>6</code>, or a bar line <code>|</code> as <code>I</code>. These tips make a big difference:</p>
<ul>
  <li><b>Use text when you can.</b> If the chart exists as a web page, a text file, or a PDF you can select text in, use that instead of a photo or screenshot.</li>
  <li><b>Shoot straight on.</b> Hold the phone parallel to the page so the lines are straight and the page is flat. Curved pages near a book's spine are hard to read.</li>
  <li><b>Use even, bright light.</b> Avoid shadows from your hand or phone and glare on glossy paper.</li>
  <li><b>Crop to the chart.</b> Remove headers, photos, and other columns before opening the image.</li>
  <li><b>Use enough resolution.</b> The chord letters should be sharp when you zoom in. Very small text in a large photo is often misread.</li>
  <li><b>Printed charts work best.</b> Handwritten chords are usually not recognized.</li>
  <li><b>Scan at 300 dpi or more</b> if you use a scanner, in black and white or grayscale.</li>
</ul>
<p>After OCR, compare Input with the original and fix any mistakes in Input. Output follows your corrections immediately.</p>

<h2 id="check">Check the result</h2>
<p>The app recognizes most chord symbols: <code>C</code>, <code>Am7</code>, <code>F#m7-5</code>, <code>Gsus4</code>, <code>Cadd9</code>, <code>Bbmaj7</code>, slash chords such as <code>D/F#</code>, chords in brackets such as <code>[G]</code> or <code>(Em)</code>, and bar lines like <code>| C | G |</code>. Things to check:</p>
<ul>
  <li><b>Single capital letters in lyrics</b> such as "A" or "I" in "A man walked in" are not changed. On a line that contains only chords, they are.</li>
  <li><b>Unusual symbols</b> (for example, Nashville numbers or chords with words attached) may be left as they are. Edit them in Input or by hand.</li>
  <li><b>Directives in ChordPro</b>, such as <code>{key: G}</code>, are not changed. Update them yourself.</li>
</ul>

<h2 id="preview">Preview, print, and save</h2>
<figure class="shot">
  ${img("en", "preview", "The preview of the transposed song in large text, with a print button and a close button in the top-right corner.")}
  <figcaption>Preview on a tablet. Long charts are split into columns to fit on one screen.</figcaption>
</figure>
<ul>
  <li><b>Preview</b> lays out the whole chart, in columns if needed, at the largest size that fits on one screen. On a computer it opens in a new window (allow pop-ups for this site if your browser blocks it). On phones and tablets it opens over the page; pinch to zoom.</li>
  <li><b>Print</b> on a computer with your browser's print command (Ctrl+P, or ⌘P on a Mac) in the preview window. On phones and tablets, tap the printer button in the preview; on iPhone and iPad, then choose Print in the share menu that appears.</li>
  <li><b>Save</b> writes a UTF-8 text file. The output file is named after the original file and the shift, for example <code>song_transposed+2.txt</code>. In Chrome and Edge on a computer you can choose where to save it; other browsers save it to your downloads.</li>
</ul>

<h2 id="phone">On a phone</h2>
<figure class="shot phone">
  ${img("en", "phone", "Chord Transposer on a phone: the toolbar at the top, Input and Output tabs with the Output tab selected, and the transposed song below.", ' style="max-width:320px"')}
  <figcaption>On a narrow screen, Input and Output are tabs. Preview and Save are next to the tabs.</figcaption>
</figure>
<p>Tap the folder button to choose a file from your phone, or a photo from your camera roll. The Preview and Save buttons act on the tab that is open.</p>

<h2 id="offline">Install the app and use it offline</h2>
<p>Chord Transposer is a web app you can add to your home screen:</p>
<ul>
  <li><b>iPhone / iPad (Safari):</b> tap Share, then <b>Add to Home Screen</b>.</li>
  <li><b>Android (Chrome):</b> open the menu and choose <b>Install app</b> or <b>Add to Home screen</b>.</li>
  <li><b>Computer (Chrome / Edge):</b> click the install icon in the address bar.</li>
</ul>
<p>After your first visit, the app opens and transposes without an internet connection. The chart you were working on and your settings are kept in your browser, so you can pick up where you left off. Clear this site's data in your browser settings to remove them.</p>
<p>More questions? See the <a href="../faq/">FAQ</a>.</p>
`,
  },
  ja: {
    title: "Chord Transposer の使い方：コード譜を移調する手順とコツ",
    heading: "Chord Transposer の使い方",
    nav: "使い方ガイド",
    description:
      "Chord Transposer の使い方を画面つきで解説。コード譜の貼り付けやテキスト・PDF・画像ファイルの読み込み、移調、# と b の選び方、プレビュー・印刷・保存の手順と、写真やスキャンした PDF をうまく読み取るコツを紹介します。",
    body: () => `
<p class="lead">Chord Transposer は、コード譜のキーをブラウザで変えられるアプリです。このガイドでは、すべてのボタンの働きと、PDF や写真からきれいに読み取るコツを説明します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#screen">画面の見方</a></li>
  <li><a href="#quick">4 ステップで移調する</a></li>
  <li><a href="#files">ファイルを開く</a></li>
  <li><a href="#ocr">写真やスキャンした PDF を読み取るコツ</a></li>
  <li><a href="#check">結果を確認する</a></li>
  <li><a href="#preview">プレビュー・印刷・保存</a></li>
  <li><a href="#phone">スマホで使う</a></li>
  <li><a href="#offline">ホーム画面に追加してオフラインで使う</a></li>
</ol></nav>

<h2 id="screen">画面の見方</h2>
<figure class="shot">
  ${img("ja", "overview", "パソコンで表示した Chord Transposer。上にツールバー、左の入力欄にキー C の「故郷」、右の出力欄にキー D に移調した結果。1〜8 の番号で各ボタンを示している。")}
  <figcaption>左が入力、右が出力です。番号は下の一覧と対応しています。</figcaption>
</figure>
<ol>
  <li><b>開く</b>（フォルダのボタン）：コード譜のファイルを開きます。</li>
  <li><b>入力</b>：コード譜を貼り付けたり、直接入力したりします。いつでも編集できます。</li>
  <li><b>移調</b>：動かす半音の数です。−12〜+12 から選びます。</li>
  <li><b>#/♭</b>：移調したコードの書き方です。「オリジナル」「# を優先」「b を優先」から選びます。</li>
  <li><b>文字サイズ</b>：入力欄と出力欄の文字の大きさです。</li>
  <li><b>プレビュー</b>：コード譜全体をまとめて表示し、印刷できます。入力と出力のそれぞれにボタンがあります。</li>
  <li><b>保存</b>：入力または出力をテキストファイルに保存します。</li>
  <li><b>設定</b>：使い方・プライバシー・このアプリについて（ライセンス）を表示します。</li>
</ol>

<h2 id="quick">4 ステップで移調する</h2>
<ol>
  <li><b>コード譜を用意します。</b>入力欄に貼り付けるか、フォルダのボタンでファイルを開きます。</li>
  <li><b>移調で半音数を選びます。</b>たとえば +2 なら G が A になります。いくつ動かせばいいかわからないときは、<a href="../key-chart/#shift">キーからキーへの半音数の表</a>を見てください。</li>
  <li><b>#/♭ で書き方を選びます。</b>F・Bb・Eb のようなフラット系のキーなら「b を優先」を選びます（<a href="../sharps-and-flats/"># と ♭ の使い分け</a>を参照）。</li>
  <li><b>結果を使います。</b>出力をプレビュー・印刷・保存します。設定を変えるとすぐに出力が更新されるので、いくつかのキーを手早く試せます。</li>
</ol>
<p>書き換わるのはコード名だけです。歌詞・曲名・メモはそのまま残り、コードの前後のスペースを調整して、同じ文字の上にコードを保ちます。コード譜の先頭にある <code>Key:</code> の行も書き換わります。</p>

<h2 id="files">ファイルを開く</h2>
<div class="table-wrap">
  <table class="text">
    <thead><tr><th scope="col">ファイル</th><th scope="col">読み込み方</th></tr></thead>
    <tbody>
      <tr><th scope="row">テキスト（.txt・.cho・.chopro・.crd・.pro など）</th><td>そのまま読み込みます。いちばん正確です。<a href="../chordpro/">ChordPro</a> のファイルにも対応しています。</td></tr>
      <tr><th scope="row">文字情報のある PDF</th><td>PDF の文字を取り出し、コードと歌詞の位置関係をできるだけ保ちます。</td></tr>
      <tr><th scope="row">スキャンした PDF</th><td>文字情報のないページを OCR（文字認識）で読み取ります。読み込むのは先頭から 20 ページまでです。</td></tr>
      <tr><th scope="row">画像（PNG・JPEG・WebP など）</th><td>日本語と英語の OCR で読み取ります。</td></tr>
    </tbody>
  </table>
</div>
<p>ファイルを開くと、新しい曲がずれたキーのまま始まらないよう、移調は 0 に戻ります。コードが含まれていないファイルは、読み込まずにお知らせします。</p>
<p>ファイルはブラウザの中だけで処理され、サーバーには送られません。PDF や画像を読み取るためのライブラリは、初めて開いたときにダウンロードするので、そのときはインターネット接続が必要です。</p>

<h2 id="ocr">写真やスキャンした PDF を読み取るコツ</h2>
<p>OCR は画像から文字を推測するため、<code>b</code> を <code>6</code> と読んだり、小節線の <code>|</code> を <code>I</code> と読んだりすることがあります。次の点に気をつけると、精度が大きく上がります。</p>
<ul>
  <li><b>できるだけテキストを使う。</b>Web ページ、テキストファイル、文字を選択できる PDF があるなら、写真やスクリーンショットよりそちらを使いましょう。</li>
  <li><b>真上から撮る。</b>スマホを紙と平行に構え、行がまっすぐ、紙が平らに写るようにします。本の綴じ目近くの曲がったページは読み取りにくくなります。</li>
  <li><b>明るく均一な光で。</b>手やスマホの影、光沢紙の反射を避けます。</li>
  <li><b>コード譜の部分だけに切り抜く。</b>見出しや写真、ほかの段は、画像を開く前に切り取っておきます。</li>
  <li><b>十分な解像度で。</b>拡大したときにコードの文字がくっきり見えるようにします。大きな写真の中の小さな文字は読み違えやすくなります。</li>
  <li><b>印刷されたコード譜がおすすめ。</b>手書きのコードは、ほとんど認識できません。</li>
  <li><b>スキャナーなら 300 dpi 以上</b>で、白黒またはグレースケールで読み込みます。</li>
</ul>
<p>読み取ったあとは、入力欄を元の譜面と見比べて、間違いがあれば入力欄で直してください。直した内容はすぐに出力に反映されます。</p>

<h2 id="check">結果を確認する</h2>
<p><code>C</code>・<code>Am7</code>・<code>F#m7-5</code>・<code>Gsus4</code>・<code>Cadd9</code>・<code>Bbmaj7</code> などのコード、<code>D/F#</code> のような分数コード（オンコード）、<code>[G]</code> や <code>(Em)</code> のようにかっこで囲んだコード、<code>| C | G |</code> のような小節線を含む行に対応しています。次の点を確認してください。</p>
<ul>
  <li><b>英語の歌詞の中の大文字 1 文字</b>（"A man walked in" の "A" など）は書き換えません。コードだけの行では書き換えます。</li>
  <li><b>特殊な表記</b>（ナッシュビル・ナンバーや、言葉がついたコードなど）はそのまま残ることがあります。入力欄で直すか、手で書き換えてください。</li>
  <li><b>ChordPro のディレクティブ</b>（<code>{key: G}</code> など）は書き換わりません。手で直してください。</li>
</ul>

<h2 id="preview">プレビュー・印刷・保存</h2>
<figure class="shot">
  ${img("ja", "preview", "移調した「故郷」を大きな文字で表示したプレビュー。右上に印刷ボタンと閉じるボタンがある。")}
  <figcaption>タブレットでのプレビュー。長いコード譜は段組みにして 1 画面に収めます。</figcaption>
</figure>
<ul>
  <li><b>プレビュー</b>は、コード譜全体を 1 画面に収まるいちばん大きな文字で、必要なら段組みにして表示します。パソコンでは新しいウィンドウで開きます（ポップアップがブロックされたら、このサイトのポップアップを許可してください）。スマホ・タブレットでは画面に重ねて表示し、ピンチで拡大・縮小できます。</li>
  <li><b>印刷</b>は、パソコンではプレビューのウィンドウでブラウザの印刷機能（Ctrl+P、Mac では ⌘P）を使います。スマホ・タブレットでは、プレビューのプリンターのボタンをタップします。iPhone・iPad では、続けて表示される共有メニューで「プリント」を選びます。</li>
  <li><b>保存</b>すると UTF-8 のテキストファイルになります。出力のファイル名は、元のファイル名と移調の幅から <code>song_transposed+2.txt</code> のように付けられます。パソコンの Chrome・Edge では保存先を選べ、ほかのブラウザではダウンロードフォルダに保存されます。</li>
</ul>

<h2 id="phone">スマホで使う</h2>
<figure class="shot phone">
  ${img("ja", "phone", "スマホで表示した Chord Transposer。上にツールバー、その下に入力と出力のタブがあり、出力タブに移調した「故郷」が表示されている。", ' style="max-width:320px"')}
  <figcaption>画面の幅が狭いときは、入力と出力がタブで切り替わります。プレビューと保存はタブの右にあります。</figcaption>
</figure>
<p>フォルダのボタンをタップすると、スマホ内のファイルや写真ライブラリから選べます。プレビューと保存のボタンは、開いているタブの内容に対して働きます。</p>

<h2 id="offline">ホーム画面に追加してオフラインで使う</h2>
<p>Chord Transposer はホーム画面に追加できる Web アプリです。</p>
<ul>
  <li><b>iPhone・iPad（Safari）：</b>共有ボタンをタップし、<b>ホーム画面に追加</b>を選びます。</li>
  <li><b>Android（Chrome）：</b>メニューを開き、<b>アプリをインストール</b>または<b>ホーム画面に追加</b>を選びます。</li>
  <li><b>パソコン（Chrome・Edge）：</b>アドレスバーのインストールのアイコンをクリックします。</li>
</ul>
<p>一度開けば、インターネットに接続していなくてもアプリを開いて移調できます。編集中のコード譜と設定はブラウザに保存されるので、次に開いたときに続きから使えます。消したいときは、ブラウザの設定でこのサイトのデータを削除してください。</p>
<p>そのほかの疑問は<a href="../faq/">よくある質問</a>をご覧ください。</p>
`,
  },
};
