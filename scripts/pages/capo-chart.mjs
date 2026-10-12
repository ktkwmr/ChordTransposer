import { MAJOR_KEYS, MINOR_KEYS, pc, majorKeyFor, minorKeyFor } from "./music.mjs";

const SHAPES = ["C", "A", "G", "E", "D"];
const MINOR_SHAPES = ["Am", "Em", "Dm"];
const MAX_PRACTICAL = 7;

const fret = (key, shape) => (pc(key.replace(/m$/, "")) - pc(shape.replace(/m$/, "")) + 12) % 12;
const cell = (n) => `<td class="num${n > MAX_PRACTICAL ? " dim" : ""}">${n}</td>`;

function capoTable(keys, shapes, keyHead, shapeHead) {
  return `<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">${keyHead}</th>${shapes.map((s) => `<th scope="col">${shapeHead(s)}</th>`).join("")}</tr></thead>
    <tbody>
${keys.map((k) => `      <tr><th scope="row">${k}</th>${shapes.map((s) => cell(fret(k, s))).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</div>`;
}

function soundingTable(capoHead, shapeHead) {
  const rows = [];
  for (let capo = 1; capo <= MAX_PRACTICAL; capo++) {
    rows.push(
      `      <tr><th scope="row">${capo}</th>${SHAPES.map((s) => `<td class="chord">${majorKeyFor(pc(s) + capo)}</td>`).join("")}${MINOR_SHAPES.map(
        (s) => `<td class="chord">${minorKeyFor(pc(s.slice(0, -1)) + capo)}</td>`
      ).join("")}</tr>`
    );
  }
  return `<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">${capoHead}</th>${[...SHAPES, ...MINOR_SHAPES].map((s) => `<th scope="col">${shapeHead(s)}</th>`).join("")}</tr></thead>
    <tbody>
${rows.join("\n")}
    </tbody>
  </table>
</div>`;
}

export default {
  slug: "capo-chart",
  en: {
    title: "Capo Chart: Which Fret to Use for Every Key",
    nav: "Capo chart",
    description:
      "A capo chart for guitar: find the capo fret for any key using C, A, G, E, or D chord shapes, see what key each capo position sounds in, and learn how to rewrite a chart for capo.",
    body: () => `
<p class="lead">A capo lets you play in a new key with the chord shapes you already know. Use the charts below to find the fret, then let the app rewrite the chords for you.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#how">How a capo changes the key</a></li>
  <li><a href="#find-fret">Find the capo fret for a key</a></li>
  <li><a href="#sounding">What key does each capo position sound in?</a></li>
  <li><a href="#minor">Minor keys</a></li>
  <li><a href="#rewrite">Rewrite a chord chart for capo</a></li>
</ol></nav>

<h2 id="how">How a capo changes the key</h2>
<p>A capo clamps all the strings at one fret. Every fret raises the pitch by one semitone (a half step), so with the capo on fret 2 a <b>G</b> shape sounds as <b>A</b>, two semitones higher.</p>
<p>The rule is simple:</p>
<ul>
  <li><b>Sounding key</b> = the shape you play + the capo fret</li>
  <li><b>Capo fret</b> = the sounding key − the shape you play</li>
</ul>
<p>Guitarists usually stick to the open-chord "families" of <b>C, A, G, E, and D</b>, because their chords are easy to play without barre chords. For each key, you can pick whichever family is easiest for the song.</p>

<h2 id="find-fret">Find the capo fret for a key</h2>
<p>Find the key the song is in (or the key you want to sing in) in the left column, then read across to the shape you want to play. The number is the capo fret. 0 means no capo.</p>
${capoTable(MAJOR_KEYS, SHAPES, "Key of the song", (s) => s + " shapes")}
<p class="cap">Gray numbers (fret 8 and above) work, but the frets get cramped. Choose another shape if you can.</p>
<p><b>Example:</b> a song in <b>Bb</b> is awkward in open position. Capo 3 with <b>G</b> shapes, or capo 1 with <b>A</b> shapes, gives the same key with easy chords.</p>

<h2 id="sounding">What key does each capo position sound in?</h2>
<p>If you already have a capo on and play a familiar set of chords, this table tells you the real key — useful when a singer or another instrument asks "what key are we in?"</p>
${soundingTable("Capo fret", (s) => s + " shapes")}
<p class="cap">Keys are written the usual way: Bb rather than A#, F# rather than Gb.</p>

<h2 id="minor">Minor keys</h2>
<p>Minor songs work the same way. The easiest open minor shapes are <b>Am, Em, and Dm</b>.</p>
${capoTable(MINOR_KEYS, MINOR_SHAPES, "Key of the song", (s) => s + " shapes")}
<p class="cap">Gray numbers are frets 8 and above.</p>

<h2 id="rewrite">Rewrite a chord chart for capo</h2>
<p>Charts are usually written in the sounding key. To play with a capo, you need the <i>shapes</i>, which are the chords moved <b>down</b> by the capo fret. In Chord Transposer:</p>
<ol>
  <li>Paste the chart or open the file.</li>
  <li>Set <b>Transpose</b> to minus the capo fret. For capo 2, choose <b>−2</b>.</li>
  <li>The output shows the shapes to play. Write "Capo 2" at the top so you remember.</li>
</ol>
<div class="pair">
  <figure><pre><code>Key: A
A        E/G#     F#m
D        A        E</code></pre><figcaption>The chart in A (as it sounds)</figcaption></figure>
  <figure><pre><code>Key: G
G        D/F#     Em
C        G        D</code></pre><figcaption>Transposed −2: shapes to play with capo 2</figcaption></figure>
</div>
<div class="note"><p>The app also changes a <code>Key:</code> line at the top of a chart, so the example above shows "Key: G" after transposing. The <code>Capo:</code> line is left as it is.</p></div>
<p>Going the other way works too: if a chart says "Capo 3" and shows G shapes, transpose <b>+3</b> to see the real chords, for example to share them with a keyboard player. Set <b>#/♭</b> to <b>Prefer b</b> so G becomes Bb rather than A# (see <a href="../sharps-and-flats/">sharps or flats?</a>).</p>
<p>See also: <a href="../transposition-basics/">Transposing chords: the basics</a> and <a href="../key-chart/">chords in every key</a>.</p>
`,
  },
  ja: {
    title: "カポ位置の早見表：キーごとに何フレットに付ければいい？",
    nav: "カポ位置の早見表",
    description:
      "ギターのカポ（カポタスト）位置の早見表。C・A・G・E・D のどのフォームで弾くと何フレットになるか、カポを付けたときに実際に鳴るキー、カポ用にコード譜を書き換える方法をまとめました。",
    body: () => `
<p class="lead">カポを使えば、弾き慣れたコードの形のままキーを変えられます。下の表でフレットを確かめ、コードの書き換えはアプリに任せましょう。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#how">カポでキーが変わるしくみ</a></li>
  <li><a href="#find-fret">キーからカポの位置を探す</a></li>
  <li><a href="#sounding">カポの位置から実際のキーを調べる</a></li>
  <li><a href="#minor">マイナーキーの場合</a></li>
  <li><a href="#rewrite">カポ用にコード譜を書き換える</a></li>
</ol></nav>

<h2 id="how">カポでキーが変わるしくみ</h2>
<p>カポはすべての弦を 1 つのフレットで押さえる道具です。1 フレットごとに音が半音ずつ高くなるので、2 フレットにカポを付けて <b>G</b> の形で弾くと、半音 2 つ分高い <b>A</b> の音が鳴ります。</p>
<p>計算はこれだけです。</p>
<ul>
  <li><b>実際に鳴るキー</b> ＝ 押さえる形（フォーム）＋ カポのフレット数</li>
  <li><b>カポのフレット数</b> ＝ 鳴らしたいキー − 押さえる形</li>
</ul>
<p>ギターでは、セーハ（バレー）の少ない <b>C・A・G・E・D</b> の 5 つのキーのフォームがよく使われます。キーごとに、曲に合わせて弾きやすいフォームを選べます。</p>

<h2 id="find-fret">キーからカポの位置を探す</h2>
<p>左の列で曲のキー（または歌いたいキー）を探し、弾きたいフォームの列と交わるところを見ます。数字がカポを付けるフレットです。0 はカポなしです。</p>
${capoTable(MAJOR_KEYS, SHAPES, "曲のキー", (s) => s + " のフォーム")}
<p class="cap">グレーの数字（8 フレット以上）でも弾けますが、フレットの間隔が狭く窮屈になります。できれば別のフォームを選びましょう。</p>
<p><b>例：</b>キーが <b>Bb</b> の曲は、開放弦のコードでは弾きにくいキーです。カポ 3 で <b>G</b> のフォーム、またはカポ 1 で <b>A</b> のフォームにすれば、同じキーを簡単なコードで弾けます。</p>

<h2 id="sounding">カポの位置から実際のキーを調べる</h2>
<p>カポを付けていつものコードを弾いているとき、実際には何のキーで鳴っているかを調べる表です。歌う人やほかの楽器の人に「キーは何？」と聞かれたときに役立ちます。</p>
${soundingTable("カポ", (s) => s + " のフォーム")}
<p class="cap">キーは一般的な書き方で表記しています（A# ではなく Bb、Gb ではなく F#）。</p>

<h2 id="minor">マイナーキーの場合</h2>
<p>マイナーキーの曲も考え方は同じです。開放弦で押さえやすいマイナーのフォームは <b>Am・Em・Dm</b> です。</p>
${capoTable(MINOR_KEYS, MINOR_SHAPES, "曲のキー", (s) => s + " のフォーム")}
<p class="cap">グレーの数字は 8 フレット以上です。</p>

<h2 id="rewrite">カポ用にコード譜を書き換える</h2>
<p>コード譜はふつう、実際に鳴るキーで書かれています。カポを付けて弾くには、コードをカポのフレット数だけ<b>下げた</b>「押さえる形」が必要です。Chord Transposer なら次の手順で書き換えられます。</p>
<ol>
  <li>コード譜を貼り付けるか、ファイルを開きます。</li>
  <li><b>移調</b>を「マイナスのカポのフレット数」にします。カポ 2 なら <b>−2</b> です。</li>
  <li>出力に押さえる形のコードが表示されます。忘れないよう、上に「Capo 2」と書いておきましょう。</li>
</ol>
<div class="pair">
  <figure><pre><code>Key: A
A        E/G#     F#m
D        A        E</code></pre><figcaption>キー A のコード譜（実際に鳴る音）</figcaption></figure>
  <figure><pre><code>Key: G
G        D/F#     Em
C        G        D</code></pre><figcaption>−2 で移調：カポ 2 で押さえる形</figcaption></figure>
</div>
<div class="note"><p>コード譜の先頭にある <code>Key:</code> の行もアプリが書き換えるので、上の例では移調後に「Key: G」になります。<code>Capo:</code> の行はそのまま残ります。</p></div>
<p>逆の使い方もできます。「Capo 3」と書かれた G のフォームのコード譜なら、<b>+3</b> で移調すると実際に鳴るコードがわかります。キーボードの人とコード譜を共有するときに便利です。このとき <b>#/♭</b> を「<b>b を優先</b>」にすると、G が A# ではなく Bb になります（<a href="../sharps-and-flats/"># と ♭ の使い分け</a>を参照）。</p>
<p>関連記事：<a href="../transposition-basics/">移調・転調の基礎</a>、<a href="../key-chart/">キー別のコード表</a></p>
`,
  },
};
