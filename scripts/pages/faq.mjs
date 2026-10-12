// Questions and answers. The answers are HTML; build-pages.mjs also puts a plain-text
// copy in the FAQPage structured data.
const EN = [
  {
    q: "Is Chord Transposer free?",
    a: "Yes. It is free to use, with no sign-up or account.",
  },
  {
    q: "Are my files uploaded to a server?",
    a: "No. Chord charts you open or type are processed only in your browser and never leave your device. When you open a PDF or an image, the app downloads its reading libraries from a CDN, but your file is not sent.",
  },
  {
    q: "Which files can I open?",
    a: 'Text files (including ChordPro files such as .cho and .crd), PDFs, and images such as PNG and JPEG. PDFs with text are read directly; scanned pages and images are read with OCR (Japanese and English). Up to the first 20 pages of a PDF are read. See <a href="../guide/#files">opening files</a>.',
  },
  {
    q: "The text from my photo or scanned PDF is wrong. What can I do?",
    a: 'OCR can misread characters, especially in photos taken at an angle, in poor light, or at low resolution. Fix mistakes directly in Input — Output updates immediately. For better results, see the <a href="../guide/#ocr">tips for photos and scanned PDFs</a>. Handwritten charts are usually not recognized.',
  },
  {
    q: "Why were some chords not transposed?",
    a: 'The app only changes text that looks like a chord. A single capital letter inside lyrics, such as "A" in "A man walked in", is left alone on purpose, and unusual symbols may not be recognized. ChordPro directives such as <code>{key: G}</code> are also not changed. Edit these in Input or by hand.',
  },
  {
    q: "The chords no longer line up with the lyrics.",
    a: "Chord charts line up only in a fixed-width (monospace) font, where every character has the same width. If you paste the result into a word processor, choose a font such as Courier New, Consolas, or MS Gothic. In Japanese lyrics, a full-width character takes the space of two half-width characters.",
  },
  {
    q: "Why do I get A# when I expected Bb?",
    a: 'Both names are the same note. Set <b>#/♭</b> to <b>Prefer b</b> for flat keys (F, Bb, Eb, Ab, Db, Gb) or <b>Prefer #</b> for sharp keys. See <a href="../sharps-and-flats/">sharps or flats?</a>.',
  },
  {
    q: "How many semitones should I transpose?",
    a: 'Count the semitones from the old key to the new key, or look them up in the <a href="../key-chart/#shift">key-to-key table</a>. For singing, try 1 or 2 semitones first. A karaoke key setting of +2 is the same as +2 in the app.',
  },
  {
    q: "How do I rewrite a chart for playing with a capo?",
    a: 'Transpose by minus the capo fret. For capo 2, choose −2: the output shows the chord shapes to play. The <a href="../capo-chart/">capo chart</a> shows which fret to use for each key.',
  },
  {
    q: "Can I transpose minor keys and songs with key changes?",
    a: "Yes. Every chord moves by the same number of semitones, so minor keys and key changes within a song keep their relationships.",
  },
  {
    q: "Does it understand German H notation?",
    a: "Yes. H is read as B (and Hm as Bm). Transposed chords are written with B.",
  },
  {
    q: "Does it work on iPhone and Android?",
    a: 'Yes. It works in the browser on phones, tablets, and computers. On a phone, Input and Output are shown as tabs. You can also add it to your home screen; see <a href="../guide/#offline">install the app</a>.',
  },
  {
    q: "Can I use it offline?",
    a: "Yes. After your first visit, the app opens and transposes without a connection. Opening PDFs and images needs a connection the first time, to download the reading libraries.",
  },
  {
    q: "How do I print the result?",
    a: 'Open the preview. On a computer, use your browser\'s print command (Ctrl+P or ⌘P) in the preview window. On phones and tablets, tap the printer button; on iPhone and iPad, choose Print in the share menu. See <a href="../guide/#preview">preview, print, and save</a>.',
  },
  {
    q: "Is my chart saved?",
    a: "The chart you are working on and your settings are kept in your browser so you can continue next time. They are not sent anywhere. To keep a copy, save it as a text file. To remove the stored data, clear this site's data in your browser settings.",
  },
  {
    q: "How do I report a problem or suggest a feature?",
    a: 'Please open an issue on <a href="https://github.com/ktkwmr/ChordTransposer/issues" rel="noopener">GitHub</a>. If a chart is converted incorrectly, include a short example of the text.',
  },
];

const JA = [
  {
    q: "無料で使えますか？",
    a: "はい。無料で、登録やアカウントも不要です。",
  },
  {
    q: "ファイルはサーバーに送られますか？",
    a: "いいえ。開いたコード譜や入力した内容はブラウザの中だけで処理され、端末の外に出ることはありません。PDF や画像を開いたときは読み取り用のライブラリを CDN からダウンロードしますが、ファイルの内容は送られません。",
  },
  {
    q: "どんなファイルを開けますか？",
    a: 'テキストファイル（.cho・.crd などの ChordPro ファイルを含む）、PDF、PNG・JPEG などの画像です。文字情報のある PDF はそのまま読み込み、スキャンしたページや画像は OCR（日本語・英語）で読み取ります。PDF は先頭から 20 ページまで読み込みます。詳しくは<a href="../guide/#files">ファイルを開く</a>をご覧ください。',
  },
  {
    q: "写真やスキャンした PDF の読み取り結果が間違っています。",
    a: 'OCR は文字を読み違えることがあります。斜めから撮った写真、暗い写真、解像度の低い画像では特に起こりやすくなります。間違いは入力欄で直接直してください。出力にすぐ反映されます。精度を上げるには<a href="../guide/#ocr">写真やスキャンした PDF を読み取るコツ</a>をご覧ください。手書きのコード譜はほとんど認識できません。',
  },
  {
    q: "一部のコードが移調されません。",
    a: '書き換えるのは、コードらしく見える文字だけです。英語の歌詞の中の大文字 1 文字（"A man walked in" の "A" など）はわざと書き換えず、特殊な表記は認識できないことがあります。ChordPro のディレクティブ（<code>{key: G}</code> など）も書き換えません。入力欄で直すか、手で書き換えてください。',
  },
  {
    q: "コードと歌詞の位置がずれます。",
    a: "コード譜の位置がそろうのは、すべての文字が同じ幅の等幅フォントで表示したときだけです。Word などに貼り付けるときは、MS ゴシックや Courier New などの等幅フォントを選んでください。日本語の全角文字は、半角 2 文字分の幅になります。",
  },
  {
    q: "Bb のはずが A# と表示されます。",
    a: 'どちらも同じ音です。フラット系のキー（F・Bb・Eb・Ab・Db・Gb）なら <b>#/♭</b> を「<b>b を優先</b>」に、シャープ系のキーなら「<b># を優先</b>」にしてください。詳しくは<a href="../sharps-and-flats/"># と ♭ の使い分け</a>をご覧ください。',
  },
  {
    q: "何半音移調すればいいですか？",
    a: '元のキーから新しいキーまでの半音を数えるか、<a href="../key-chart/#shift">キーからキーへの半音数の表</a>で調べてください。歌に合わせるなら、まず 1〜2 半音から試しましょう。カラオケのキー設定の「+2」は、アプリの +2 と同じです。',
  },
  {
    q: "カポを付けて弾くためのコード譜にするには？",
    a: 'マイナスのカポのフレット数だけ移調します。カポ 2 なら −2 を選ぶと、出力に押さえる形のコードが表示されます。キーごとのカポの位置は<a href="../capo-chart/">カポ位置の早見表</a>をご覧ください。',
  },
  {
    q: "マイナーキーの曲や、途中で転調する曲も移調できますか？",
    a: "はい。すべてのコードが同じ半音数だけ動くので、マイナーキーでも、曲の途中の転調でも、コード同士の関係はそのまま保たれます。",
  },
  {
    q: "ドイツ式の H 表記に対応していますか？",
    a: "はい。H は B（Hm は Bm）として読み取ります。移調したコードは B で書きます。",
  },
  {
    q: "iPhone や Android でも使えますか？",
    a: 'はい。スマホ・タブレット・パソコンのブラウザで使えます。スマホでは入力と出力がタブで切り替わります。ホーム画面に追加することもできます（<a href="../guide/#offline">ホーム画面に追加する</a>を参照）。',
  },
  {
    q: "オフラインでも使えますか？",
    a: "はい。一度開けば、インターネットに接続していなくてもアプリを開いて移調できます。PDF や画像を開くときは、初回だけ読み取り用のライブラリをダウンロードするため接続が必要です。",
  },
  {
    q: "結果を印刷するには？",
    a: 'プレビューを開きます。パソコンでは、プレビューのウィンドウでブラウザの印刷機能（Ctrl+P、Mac では ⌘P）を使います。スマホ・タブレットではプリンターのボタンをタップし、iPhone・iPad では共有メニューで「プリント」を選びます。詳しくは<a href="../guide/#preview">プレビュー・印刷・保存</a>をご覧ください。',
  },
  {
    q: "コード譜は保存されますか？",
    a: "編集中のコード譜と設定は、次に開いたときに続きから使えるようブラウザに保存されます。どこにも送信されません。手元に残したいときはテキストファイルに保存してください。保存されたデータを消すには、ブラウザの設定でこのサイトのデータを削除します。",
  },
  {
    q: "不具合の報告や要望はどこに送ればいいですか？",
    a: '<a href="https://github.com/ktkwmr/ChordTransposer/issues" rel="noopener">GitHub の Issues</a> にお寄せください。変換結果がおかしいときは、短いテキストの例を添えていただけると助かります。',
  },
];

const list = (items) =>
  `<dl class="faq">\n${items.map((qa) => `  <dt>${qa.q}</dt>\n  <dd>${qa.a}</dd>`).join("\n")}\n</dl>`;

export default {
  slug: "faq",
  faq: true,
  en: {
    title: "Chord Transposer FAQ",
    heading: "Frequently asked questions",
    nav: "FAQ",
    description:
      "Answers to common questions about Chord Transposer: privacy, supported files, OCR accuracy, chords that are not transposed, sharps and flats, capo, offline use, printing, and more.",
    faq: EN,
    body: () => `<p class="lead">Short answers to common questions. For step-by-step instructions, see the <a href="../guide/">guide</a>.</p>\n${list(EN)}`,
  },
  ja: {
    title: "よくある質問（FAQ）",
    heading: "よくある質問",
    nav: "よくある質問",
    description:
      "Chord Transposer についてのよくある質問。プライバシー、対応ファイル、OCR の精度、移調されないコード、# と b、カポ、オフラインでの利用、印刷などについてお答えします。",
    faq: JA,
    body: () => `<p class="lead">よくある質問への短い回答です。詳しい手順は<a href="../guide/">使い方ガイド</a>をご覧ください。</p>\n${list(JA)}`,
  },
};
