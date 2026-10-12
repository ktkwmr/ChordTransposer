const SHARP_KEYS = [["G", "Em", 1], ["D", "Bm", 2], ["A", "F#m", 3], ["E", "C#m", 4], ["B", "G#m", 5], ["F#", "D#m", 6], ["C#", "A#m", 7]];
const FLAT_KEYS = [["F", "Dm", 1], ["Bb", "Gm", 2], ["Eb", "Cm", 3], ["Ab", "Fm", 4], ["Db", "Bbm", 5], ["Gb", "Ebm", 6], ["Cb", "Abm", 7]];

function keyTable(head) {
  const rows = SHARP_KEYS.map((s, i) => {
    const f = FLAT_KEYS[i];
    return `      <tr><th scope="row">${s[2]}</th><td class="chord">${s[0]} / ${s[1]}</td><td class="chord">${f[0]} / ${f[1]}</td></tr>`;
  });
  return `<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">${head[0]}</th><th scope="col">${head[1]}</th><th scope="col">${head[2]}</th></tr></thead>
    <tbody>
      <tr><th scope="row">0</th><td class="chord" colspan="2">C / Am</td></tr>
${rows.join("\n")}
    </tbody>
  </table>
</div>`;
}

export default {
  slug: "sharps-and-flats",
  en: {
    title: "Sharps or Flats? How to Choose # and b in Chord Charts",
    heading: "Sharps or flats? Choosing # and b in chord charts",
    nav: "Sharps or flats?",
    description:
      "C# or Db? A# or Bb? Learn which spelling to use in each key, why the key of F uses Bb, how to spell chromatic chords, and how Chord Transposer's #/♭ setting works.",
    body: () => `
<p class="lead">On a piano, C# and Db are the same black key. In a chord chart, though, one spelling usually reads better than the other. Here is how to choose.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#same">Same sound, two names</a></li>
  <li><a href="#rule">The basic rule: follow the key</a></li>
  <li><a href="#keys">Sharp keys and flat keys</a></li>
  <li><a href="#outside">Chords outside the key</a></li>
  <li><a href="#app">The #/♭ setting in Chord Transposer</a></li>
</ol></nav>

<h2 id="same">Same sound, two names</h2>
<p>There are 12 different notes in an octave but only 7 letters (A to G). The five notes between the letters get two names each: C#/Db, D#/Eb, F#/Gb, G#/Ab, and A#/Bb. Two names for the same pitch are called <b>enharmonic</b> equivalents.</p>
<p>A guitar or keyboard plays them the same way, so neither spelling is "wrong". But the right one makes a chart quicker to read and shows how the chords relate to each other.</p>
<div class="note"><p>In plain text, <code>#</code> stands for sharp (♯) and a lowercase <code>b</code> for flat (♭). Chord Transposer reads both forms and writes <code>#</code> and <code>b</code>.</p></div>

<h2 id="rule">The basic rule: follow the key</h2>
<p>A major scale uses each letter exactly once. In the key of F, the notes are F, G, A, <b>Bb</b>, C, D, E. Writing A# instead would use the letter A twice and skip B, so the fourth chord of F is <b>Bb</b>, not A#.</p>
<div class="pair">
  <figure><pre><code>F    Bb   C7   F</code></pre><figcaption>Key of F: reads naturally</figcaption></figure>
  <figure><pre><code>F    A#   C7   F</code></pre><figcaption>Same sound, but harder to read</figcaption></figure>
</div>
<p>So: in a <b>sharp key</b>, write black-key chords with #. In a <b>flat key</b>, write them with b.</p>

<h2 id="keys">Sharp keys and flat keys</h2>
<p>Each key (and its relative minor) uses either sharps or flats, never both:</p>
${keyTable(["# or b in the key", "Sharp keys (major / minor)", "Flat keys (major / minor)"])}
<p class="cap">The keys with 6 and 7 accidentals have twins: F# = Gb, C# = Db, and Cb = B. Most charts use F# (or Gb), Db, and B.</p>
<p>A quick memory aid: <b>F and every key whose name contains b</b> are flat keys. The other keys, apart from C, are sharp keys.</p>

<h2 id="outside">Chords outside the key</h2>
<p>Songs often borrow chords from outside the key. Common habits:</p>
<ul>
  <li><b>Borrowed chords from the minor key</b> are written with flats. In C, the chords from C minor are <code>Bb</code>, <code>Ab</code>, <code>Eb</code>, and <code>Fm</code> — not A#, G#, or D#.</li>
  <li><b>Rising lines</b> are usually written with sharps: <code>C  C#dim  Dm</code>.</li>
  <li><b>Falling lines</b> are usually written with flats: <code>D  Db  C</code>, or a bass line like <code>C  C/B  C/Bb  F/A</code>.</li>
</ul>
<p>When in doubt, pick the spelling that keeps the letters moving in a step-by-step order.</p>

<h2 id="app">The #/♭ setting in Chord Transposer</h2>
<p>The app has three choices for how transposed chords are spelled:</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">Setting</th><th scope="col"><code>F Bb C7 Dm</code> +3 becomes</th><th scope="col">Rule</th></tr></thead>
    <tbody>
      <tr><th scope="row">Original</th><td class="chord" data-label="Result:">G# Db D#7 Fm</td><td data-label="Rule:">Follows the source: a chord written with b stays with b (Bb → Db). A chord with no # or b gets # (F → G#).</td></tr>
      <tr><th scope="row">Prefer #</th><td class="chord" data-label="Result:">G# C# D#7 Fm</td><td data-label="Rule:">Always #.</td></tr>
      <tr><th scope="row">Prefer b</th><td class="chord" data-label="Result:">Ab Db Eb7 Fm</td><td data-label="Rule:">Always b.</td></tr>
    </tbody>
  </table>
</div>
<p class="cap">The example moves a chart from F to Ab, a flat key, so Prefer b gives the expected spelling.</p>
<p><b>How to choose:</b> look up the new key in the <a href="#keys">table of sharp and flat keys</a>. If it is a flat key, choose <b>Prefer b</b>; if it is a sharp key, choose <b>Prefer #</b>. Then check the chords outside the key and fix any by hand.</p>
<p>When <b>Transpose</b> is 0, Prefer # and Prefer b only rewrite chords that already have # or b. Use this to clean up a chart that mixes the two, for example <code>Db</code> → <code>C#</code>.</p>
<p>See also: <a href="../key-chart/">chords in every key</a>, which spells every chord from its key.</p>
`,
  },
  ja: {
    title: "# と ♭ の使い分け：コード譜はシャープとフラットどちらで書く？",
    heading: "# と ♭ の使い分け：コード譜はシャープとフラットどちらで書く？",
    nav: "# と ♭ の使い分け",
    description:
      "C# と Db、A# と Bb はどちらで書くのが正しい？ キーごとのシャープ・フラットの決め方、キー F で Bb と書く理由、キーの外のコードの書き方、Chord Transposer の #/♭ 設定の使い方を解説します。",
    body: () => `
<p class="lead">ピアノでは C# と Db は同じ黒鍵です。それでもコード譜では、どちらかの書き方のほうが読みやすいのがふつうです。その選び方を説明します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#same">同じ音に 2 つの名前</a></li>
  <li><a href="#rule">基本はキーに合わせる</a></li>
  <li><a href="#keys">シャープ系のキーとフラット系のキー</a></li>
  <li><a href="#outside">キーの外のコード</a></li>
  <li><a href="#app">Chord Transposer の #/♭ 設定</a></li>
</ol></nav>

<h2 id="same">同じ音に 2 つの名前</h2>
<p>1 オクターブには 12 の音がありますが、音名のアルファベットは A〜G の 7 つしかありません。そのため、間にある 5 つの音には C#/Db、D#/Eb、F#/Gb、G#/Ab、A#/Bb と 2 つずつ名前があります。同じ高さの音の別名を<b>異名同音</b>（エンハーモニック）といいます。</p>
<p>ギターでもキーボードでも弾き方は同じなので、どちらも「間違い」ではありません。ただ、キーに合った書き方をすると譜面が読みやすくなり、コード同士の関係もわかりやすくなります。</p>
<div class="note"><p>テキストのコード譜では、シャープ（♯）を <code>#</code>、フラット（♭）を小文字の <code>b</code> で書くのが一般的です。Chord Transposer はどちらの書き方も読み取り、<code>#</code> と <code>b</code> で出力します。</p></div>

<h2 id="rule">基本はキーに合わせる</h2>
<p>メジャースケールでは、A〜G の各アルファベットを 1 回ずつ使います。キー F の音階は F・G・A・<b>Bb</b>・C・D・E です。A# と書くと A を 2 回使って B を飛ばすことになるので、キー F の IV のコードは A# ではなく <b>Bb</b> と書きます。</p>
<div class="pair">
  <figure><pre><code>F    Bb   C7   F</code></pre><figcaption>キー F：自然に読める</figcaption></figure>
  <figure><pre><code>F    A#   C7   F</code></pre><figcaption>同じ音だが読みにくい</figcaption></figure>
</div>
<p>つまり、<b>シャープ系のキー</b>なら黒鍵のコードは # で、<b>フラット系のキー</b>なら b で書きます。</p>

<h2 id="keys">シャープ系のキーとフラット系のキー</h2>
<p>それぞれのキー（とその平行調）は、シャープかフラットのどちらか一方だけを使います。</p>
${keyTable(["調号の数", "シャープ系（メジャー / マイナー）", "フラット系（メジャー / マイナー）"])}
<p class="cap">調号が 6 つと 7 つのキーには同じ音の別名があります（F# = Gb、C# = Db、Cb = B）。コード譜では F#（または Gb）、Db、B がよく使われます。</p>
<p>覚え方：<b>F と、名前に b が付くキー</b>がフラット系です。C 以外の残りのキーはシャープ系です。</p>

<h2 id="outside">キーの外のコード</h2>
<p>曲にはキーの外のコードもよく出てきます。よく使われる書き方の習慣は次のとおりです。</p>
<ul>
  <li><b>同主調（マイナー）からの借用和音</b>はフラットで書きます。キー C なら、C マイナーから借りるコードは A#・G#・D# ではなく <code>Bb</code>・<code>Ab</code>・<code>Eb</code>・<code>Fm</code> です。</li>
  <li><b>上がっていく進行</b>はシャープで書くことが多いです：<code>C  C#dim  Dm</code></li>
  <li><b>下がっていく進行</b>はフラットで書くことが多いです：<code>D  Db  C</code>、ベースラインなら <code>C  C/B  C/Bb  F/A</code></li>
</ul>
<p>迷ったら、アルファベットが順番に動いて見える書き方を選びましょう。</p>

<h2 id="app">Chord Transposer の #/♭ 設定</h2>
<p>アプリには、移調したコードの書き方を決める 3 つの選択肢があります。</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">設定</th><th scope="col"><code>F Bb C7 Dm</code> を +3 した結果</th><th scope="col">ルール</th></tr></thead>
    <tbody>
      <tr><th scope="row">オリジナル</th><td class="chord" data-label="結果：">G# Db D#7 Fm</td><td data-label="ルール：">元の書き方に合わせます。b で書かれたコードは b のまま（Bb → Db）、# も b もないコードは # になります（F → G#）。</td></tr>
      <tr><th scope="row"># を優先</th><td class="chord" data-label="結果：">G# C# D#7 Fm</td><td data-label="ルール：">いつも # で書きます。</td></tr>
      <tr><th scope="row">b を優先</th><td class="chord" data-label="結果：">Ab Db Eb7 Fm</td><td data-label="ルール：">いつも b で書きます。</td></tr>
    </tbody>
  </table>
</div>
<p class="cap">この例はキー F からキー Ab（フラット系）への移調なので、「b を優先」が適切な書き方になります。</p>
<p><b>選び方：</b>移調先のキーを<a href="#keys">シャープ系・フラット系のキーの表</a>で探します。フラット系なら「<b>b を優先</b>」、シャープ系なら「<b># を優先</b>」を選びます。そのあと、キーの外のコードを確認して、必要なら手で直してください。</p>
<p><b>移調</b>が 0 のときは、「# を優先」「b を優先」は # や b の付いたコードだけを書き換えます。# と b が混ざったコード譜をそろえるのに使えます（例：<code>Db</code> → <code>C#</code>）。</p>
<p>関連記事：<a href="../key-chart/">キー別のコード表</a>では、すべてのコードを各キーの音階に合わせて表記しています。</p>
`,
  },
};
