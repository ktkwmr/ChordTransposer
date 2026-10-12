import { wideTable } from "./layout.mjs";
import { MAJOR_KEYS, MINOR_KEYS, diatonicChords, shortestShift, signed } from "./music.mjs";

const DEGREES = ["I", "IIm", "IIIm", "IV", "V", "VIm", "VIIdim"];
// Keys for the shift table: all 12, sharps for the 6-accidental key as in MAJOR_KEYS
const SHIFT_KEYS = MAJOR_KEYS;

function chordTable(lang, keyHead, minorHead) {
  return wideTable(lang, `<table>
  <thead><tr><th scope="col">${keyHead}</th>${DEGREES.map((d) => `<th scope="col">${d}</th>`).join("")}<th scope="col">${minorHead}</th></tr></thead>
  <tbody>
${MAJOR_KEYS.map((k, i) => `    <tr><th scope="row">${k}</th>${diatonicChords(k).map((c) => `<td class="chord">${c}</td>`).join("")}<td class="chord">${MINOR_KEYS[i]}</td></tr>`).join("\n")}
  </tbody>
</table>`);
}

// fromHead / toHead: what the rows and the columns are
function shiftTable(lang, fromHead, toHead) {
  return wideTable(lang, `<table>
  <thead>
    <tr><th scope="col" rowspan="2" class="group">${fromHead}</th><th scope="colgroup" colspan="${SHIFT_KEYS.length}" class="group">${toHead}</th></tr>
    <tr>${SHIFT_KEYS.map((k) => `<th scope="col">${k}</th>`).join("")}</tr>
  </thead>
  <tbody>
${SHIFT_KEYS.map((from) => `    <tr><th scope="row">${from}</th>${SHIFT_KEYS.map((to) => {
  const d = shortestShift(from, to);
  return `<td class="num${d === 0 ? " dim" : ""}">${signed(d)}</td>`;
}).join("")}</tr>`).join("\n")}
  </tbody>
</table>`);
}

export default {
  slug: "key-chart",
  en: {
    title: "Chords in Every Key: Transposition Chart",
    nav: "Chords in every key",
    description:
      "Transposition chart with the diatonic chords (I, ii, iii, IV, V, vi, vii°) of all 12 major keys and their relative minors, plus a table of how many semitones to move between any two keys.",
    body: () => `
<p class="lead">Every major key uses the same pattern of seven chords. Once you know the pattern, you can transpose any song by reading across a table — or by letting the app do it.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#pattern">The chord pattern of a major key</a></li>
  <li><a href="#chart">Chords in all 12 keys</a></li>
  <li><a href="#transpose">Transpose with the chart</a></li>
  <li><a href="#shift">How many semitones between two keys?</a></li>
  <li><a href="#other">Sevenths, slash chords, and other chords</a></li>
</ol></nav>

<h2 id="pattern">The chord pattern of a major key</h2>
<p>Build a triad on each note of a major scale and you get seven chords. Their qualities always follow the same order:</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">Degree</th><th scope="col">Quality</th><th scope="col">In C</th><th scope="col">Role</th></tr></thead>
    <tbody>
      <tr><th scope="row">I</th><td data-label="Quality:">major</td><td class="chord" data-label="In C:">C</td><td data-label="Role:">Home. Songs usually start and end here.</td></tr>
      <tr><th scope="row">IIm</th><td data-label="Quality:">minor</td><td class="chord" data-label="In C:">Dm</td><td data-label="Role:">Often leads to V.</td></tr>
      <tr><th scope="row">IIIm</th><td data-label="Quality:">minor</td><td class="chord" data-label="In C:">Em</td><td data-label="Role:">A softer substitute for I or V.</td></tr>
      <tr><th scope="row">IV</th><td data-label="Quality:">major</td><td class="chord" data-label="In C:">F</td><td data-label="Role:">Moves away from home.</td></tr>
      <tr><th scope="row">V</th><td data-label="Quality:">major (often V7)</td><td class="chord" data-label="In C:">G</td><td data-label="Role:">Tension that pulls back to I.</td></tr>
      <tr><th scope="row">VIm</th><td data-label="Quality:">minor</td><td class="chord" data-label="In C:">Am</td><td data-label="Role:">The relative minor: the "sad" home.</td></tr>
      <tr><th scope="row">VIIdim</th><td data-label="Quality:">diminished</td><td class="chord" data-label="In C:">Bdim</td><td data-label="Role:">Rare in pop; often played as V7 instead.</td></tr>
    </tbody>
  </table>
</div>
<p class="cap">Roman numerals describe a chord by its position in the key, so "I–V–VIm–IV" means the same progression in any key.</p>

<h2 id="chart">Chords in all 12 keys</h2>
<p>Each row is one major key. The last column is its relative minor key, which uses the same seven chords but treats VIm as home.</p>
${chordTable("en", "Key", "Relative minor")}
<p class="cap">Chords are spelled from each key's scale, so the key of F# has E#dim (the same pitch as Fdim). Db and F# are written the usual way; their twins C# and Gb use the same pitches.</p>

<h2 id="transpose">Transpose with the chart</h2>
<p>To move a song from one key to another, find each chord in the row of the old key, then read the chord in the same column of the new key.</p>
<p><b>Example:</b> a song in <b>G</b> uses G, Em, C, and D (I, VIm, IV, V). In the key of <b>Bb</b>, the same columns give Bb, Gm, Eb, and F.</p>
<div class="pair">
  <figure><pre><code>G       Em      C       D
I       VIm     IV      V</code></pre><figcaption>Key of G</figcaption></figure>
  <figure><pre><code>Bb      Gm      Eb      F
I       VIm     IV      V</code></pre><figcaption>Key of Bb (+3)</figcaption></figure>
</div>
<p>Doing this by hand gets slow with long songs and chords such as <code>D7sus4</code> or <code>F#m7-5</code>. Chord Transposer moves every chord in the chart in one step and keeps the spacing between chords and lyrics. For flat keys such as Bb, set <b>#/♭</b> to <b>Prefer b</b> so the chords come out as Bb and Eb rather than A# and D#.</p>

<h2 id="shift">How many semitones between two keys?</h2>
<p>The app transposes by semitones. Rows are the original key and columns are the new key: find the original key in the left column and the new key at the top; the number is the value to choose in <b>Transpose</b>. The table shows the smaller move (up to 6 semitones). Moving the other way also works: +5 and -7 give the same chords, an octave apart.</p>
${shiftTable("en", "From ↓", "To →")}
<p class="cap">For example, G → Bb is +3, and E → C is -4.</p>
<p>Singers often move a key by just one or two semitones. Try a small change first, then sing a line or two before going further.</p>

<h2 id="other">Sevenths, slash chords, and other chords</h2>
<ul>
  <li><b>Extensions stay the same.</b> Only the letter name (the root) moves: <code>Cmaj7</code> +2 is <code>Dmaj7</code>, and <code>G7sus4</code> +2 is <code>A7sus4</code>.</li>
  <li><b>Slash chords move both notes.</b> <code>C/E</code> +2 is <code>D/F#</code>.</li>
  <li><b>Chords outside the key</b> (borrowed chords such as <code>Bb</code> in the key of C) move by the same number of semitones as everything else.</li>
</ul>
<p>Next: <a href="../sharps-and-flats/">sharps or flats?</a> explains why the key of F uses Bb and not A#.</p>
`,
  },
  ja: {
    title: "キー別のコード表（移調表）：12 キーのダイアトニックコード",
    nav: "キー別のコード表",
    description:
      "12 のメジャーキーと平行調のダイアトニックコード（I・IIm・IIIm・IV・V・VIm・VIIdim）の一覧表と、キーからキーへ移調するときの半音数の早見表。コード譜を移調するときに使えます。",
    body: () => `
<p class="lead">メジャーキーで使う 7 つのコードは、どのキーでも同じ並び方をしています。この並びを知っていれば、表を横に読むだけでどんな曲でも移調できます。もちろんアプリに任せることもできます。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#pattern">メジャーキーのコードの並び</a></li>
  <li><a href="#chart">12 キーのコード表</a></li>
  <li><a href="#transpose">表を使って移調する</a></li>
  <li><a href="#shift">キーからキーへ、何半音動かす？</a></li>
  <li><a href="#other">セブンスや分数コードなど</a></li>
</ol></nav>

<h2 id="pattern">メジャーキーのコードの並び</h2>
<p>メジャースケールの各音の上に 3 和音を作ると、7 つのコードができます。これを<b>ダイアトニックコード</b>といい、コードの種類はどのキーでも同じ順番です。</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">度数</th><th scope="col">種類</th><th scope="col">キー C</th><th scope="col">役割</th></tr></thead>
    <tbody>
      <tr><th scope="row">I</th><td data-label="種類：">メジャー</td><td class="chord" data-label="キー C：">C</td><td data-label="役割：">トニック（安定）。曲の始まりと終わりに多い</td></tr>
      <tr><th scope="row">IIm</th><td data-label="種類：">マイナー</td><td class="chord" data-label="キー C：">Dm</td><td data-label="役割：">V につながることが多い</td></tr>
      <tr><th scope="row">IIIm</th><td data-label="種類：">マイナー</td><td class="chord" data-label="キー C：">Em</td><td data-label="役割：">I や V の代わりに使われる</td></tr>
      <tr><th scope="row">IV</th><td data-label="種類：">メジャー</td><td class="chord" data-label="キー C：">F</td><td data-label="役割：">サブドミナント。安定から離れる</td></tr>
      <tr><th scope="row">V</th><td data-label="種類：">メジャー（V7 も多い）</td><td class="chord" data-label="キー C：">G</td><td data-label="役割：">ドミナント。I に戻りたくなる緊張感</td></tr>
      <tr><th scope="row">VIm</th><td data-label="種類：">マイナー</td><td class="chord" data-label="キー C：">Am</td><td data-label="役割：">平行調のトニック。切ない響き</td></tr>
      <tr><th scope="row">VIIdim</th><td data-label="種類：">ディミニッシュ</td><td class="chord" data-label="キー C：">Bdim</td><td data-label="役割：">ポップスでは少なめ。VIIm7-5 として使われることも</td></tr>
    </tbody>
  </table>
</div>
<p class="cap">ローマ数字はキーの中での位置を表すので、「I–V–VIm–IV」はどのキーでも同じ進行を意味します。</p>

<h2 id="chart">12 キーのコード表</h2>
<p>1 行が 1 つのメジャーキーです。右端の列は平行調（同じ 7 つのコードを使い、VIm を主役にするマイナーキー）です。</p>
${chordTable("ja", "キー", "平行調")}
<p class="cap">コードは各キーの音階に合わせて表記しているため、キー F# には E#dim（Fdim と同じ音）が出てきます。Db と F# は一般的な書き方で載せています。C# と Gb は同じ音の別名です。</p>

<h2 id="transpose">表を使って移調する</h2>
<p>移調するには、元のキーの行で各コードを探し、新しいキーの行の同じ列のコードに置き換えます。</p>
<p><b>例：</b>キー <b>G</b> の曲で G・Em・C・D（I・VIm・IV・V）を使っているとき、キー <b>Bb</b> の行の同じ列は Bb・Gm・Eb・F です。</p>
<div class="pair">
  <figure><pre><code>G       Em      C       D
I       VIm     IV      V</code></pre><figcaption>キー G</figcaption></figure>
  <figure><pre><code>Bb      Gm      Eb      F
I       VIm     IV      V</code></pre><figcaption>キー Bb（+3）</figcaption></figure>
</div>
<p>長い曲や <code>D7sus4</code>・<code>F#m7-5</code> のようなコードが多いと、手作業では時間がかかります。Chord Transposer なら、コード譜のすべてのコードを一度に移調し、コードと歌詞の位置関係も保ちます。Bb のようなフラット系のキーでは、<b>#/♭</b> を「<b>b を優先</b>」にすると A#・D# ではなく Bb・Eb で表示されます。</p>

<h2 id="shift">キーからキーへ、何半音動かす？</h2>
<p>アプリでは半音単位で移調します。<b>縦（左の列）が元のキー、横（上の行）が移調先のキー</b>です。左の列で元のキー、上の行で新しいキーを探すと、<b>移調</b>で選ぶ値がわかります。表には動きの小さい方（6 半音まで）を載せています。反対方向に動かしても同じコードになります（たとえば +5 と -7 は 1 オクターブ違いの同じキー）。</p>
${shiftTable("ja", "元のキー ↓", "移調先のキー →")}
<p class="cap">たとえば G → Bb は +3、E → C は -4 です。</p>
<p>歌のキーを合わせるときは、1〜2 半音の小さな変更で十分なことがよくあります。まず少しだけ動かして、実際に歌って確かめてから調整しましょう。</p>

<h2 id="other">セブンスや分数コードなど</h2>
<ul>
  <li><b>テンションや種類はそのまま。</b>動くのは音名（ルート）だけです。<code>Cmaj7</code> を +2 すると <code>Dmaj7</code>、<code>G7sus4</code> は <code>A7sus4</code> になります。</li>
  <li><b>分数コード（オンコード）は両方の音が動きます。</b><code>C/E</code> を +2 すると <code>D/F#</code> です。</li>
  <li><b>キーの外のコード</b>（キー C での <code>Bb</code> のような借用和音など）も、ほかのコードと同じ半音数だけ動きます。</li>
</ul>
<p>次の記事：<a href="../sharps-and-flats/"># と ♭ の使い分け</a>では、キー F で A# ではなく Bb と書く理由を説明しています。</p>
`,
  },
};
