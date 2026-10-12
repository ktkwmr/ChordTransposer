export default {
  slug: "chordpro",
  en: {
    title: "ChordPro Format Explained: Chords in Brackets",
    heading: "The ChordPro format explained",
    nav: "The ChordPro format",
    description:
      "A practical introduction to ChordPro, the plain-text format that writes chords in square brackets inside the lyrics: syntax, common directives such as {title} and {key}, file extensions, and how to transpose ChordPro files.",
    body: () => `
<p class="lead">ChordPro is a plain-text format for songs with chords. Instead of putting chords on a separate line above the lyrics, it writes each chord in square brackets right before the syllable where it is played.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#compare">Chords over lyrics vs. ChordPro</a></li>
  <li><a href="#syntax">The basic syntax</a></li>
  <li><a href="#directives">Common directives</a></li>
  <li><a href="#files">Files and apps</a></li>
  <li><a href="#transpose">Transposing ChordPro files</a></li>
  <li><a href="#convert">Converting between the two styles</a></li>
</ol></nav>

<h2 id="compare">Chords over lyrics vs. ChordPro</h2>
<p>Most chord charts on the web use the "chords over lyrics" style. The same verse in ChordPro looks like this:</p>
<div class="pair">
  <figure><pre><code>G          G7       C        G
Amazing grace, how sweet the sound
G                     Em     D
That saved a wretch like me</code></pre><figcaption>Chords over lyrics</figcaption></figure>
  <figure><pre><code>[G]Amazing [G7]grace, how [C]sweet the [G]sound
That saved a [Em]wretch like [D]me</code></pre><figcaption>ChordPro</figcaption></figure>
</div>
<p class="cap"><i>Amazing Grace</i> is a traditional hymn in the public domain.</p>
<p>Chords over lyrics is easy to read but depends on spaces: in a proportional font, or after editing a line, the chords drift away from their words. ChordPro ties each chord to its syllable, so a songbook app can lay the song out in any font, column width, or screen size and still put every chord in the right place.</p>

<h2 id="syntax">The basic syntax</h2>
<ul>
  <li><b>Chords</b> go in square brackets, immediately before the syllable: <code>[Am]Hello</code>.</li>
  <li>A chord <b>between words</b> or at the end of a line is fine: <code>sound [D]</code>.</li>
  <li><b>Instrumental lines</b> can be written as chords only: <code>[G] [C] [D] [G]</code>.</li>
  <li><b>Directives</b> go in curly braces on their own line: <code>{title: Amazing Grace}</code>.</li>
  <li>Lines that start with <code>#</code> are <b>comments</b> for the file's author; apps do not display them.</li>
</ul>

<h2 id="directives">Common directives</h2>
<p>Directives add information such as the song title or mark sections of the song. Many have a short form.</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">Directive</th><th scope="col">Short form</th><th scope="col">Meaning</th></tr></thead>
    <tbody>
      <tr><th scope="row"><code>{title: …}</code></th><td data-label="Short form:"><code>{t: …}</code></td><td data-label="Meaning:">Song title</td></tr>
      <tr><th scope="row"><code>{subtitle: …}</code></th><td data-label="Short form:"><code>{st: …}</code></td><td data-label="Meaning:">Subtitle, often the artist</td></tr>
      <tr><th scope="row"><code>{artist: …}</code></th><td></td><td data-label="Meaning:">Performer or composer</td></tr>
      <tr><th scope="row"><code>{key: G}</code></th><td></td><td data-label="Meaning:">Key of the song</td></tr>
      <tr><th scope="row"><code>{capo: 2}</code></th><td></td><td data-label="Meaning:">Capo fret</td></tr>
      <tr><th scope="row"><code>{tempo: 90}</code></th><td></td><td data-label="Meaning:">Tempo in beats per minute</td></tr>
      <tr><th scope="row"><code>{comment: …}</code></th><td data-label="Short form:"><code>{c: …}</code></td><td data-label="Meaning:">A note shown with the song, such as "Slowly"</td></tr>
      <tr><th scope="row"><code>{start_of_chorus}</code> … <code>{end_of_chorus}</code></th><td data-label="Short form:"><code>{soc}</code> … <code>{eoc}</code></td><td data-label="Meaning:">Marks the chorus</td></tr>
      <tr><th scope="row"><code>{start_of_verse}</code> … <code>{end_of_verse}</code></th><td data-label="Short form:"><code>{sov}</code> … <code>{eov}</code></td><td data-label="Meaning:">Marks a verse</td></tr>
      <tr><th scope="row"><code>{start_of_tab}</code> … <code>{end_of_tab}</code></th><td data-label="Short form:"><code>{sot}</code> … <code>{eot}</code></td><td data-label="Meaning:">Guitar tablature, shown as is in a fixed-width font</td></tr>
    </tbody>
  </table>
</div>
<p>A complete small file:</p>
<pre><code>{title: Amazing Grace}
{key: G}

{start_of_verse}
[G]Amazing [G7]grace, how [C]sweet the [G]sound
That saved a [Em]wretch like [D]me
[G]I once was [G7]lost, but [C]now am [G]found
Was [G]blind, but [D]now I [G]see
{end_of_verse}</code></pre>
<p>The full specification, with many more directives, is published at <a href="https://www.chordpro.org/" rel="noopener">chordpro.org</a>.</p>

<h2 id="files">Files and apps</h2>
<p>A ChordPro file is an ordinary UTF-8 text file. Common extensions are <code>.cho</code>, <code>.chopro</code>, <code>.chordpro</code>, <code>.crd</code>, and <code>.pro</code>. Because it is plain text, you can write it in any text editor, keep it under version control, and import it into many songbook and stage apps.</p>

<h2 id="transpose">Transposing ChordPro files</h2>
<p>Chord Transposer reads ChordPro text directly. Paste it, or open a <code>.cho</code>, <code>.chopro</code>, <code>.crd</code>, or <code>.pro</code> file:</p>
<ul>
  <li>Chords in square brackets are transposed: <code>[G]Amazing</code> +2 → <code>[A]Amazing</code>.</li>
  <li>Lyrics, directives in curly braces, and <code>#</code> comment lines are left as they are.</li>
</ul>
<div class="note"><p><b>Update <code>{key:}</code> yourself.</b> The app does not change directives, so after transposing, edit <code>{key: G}</code> to the new key (for +2, <code>{key: A}</code>). In the chords-over-lyrics style, a <code>Key:</code> line at the top of the chart <i>is</i> updated automatically.</p></div>
<p>Save the result and the file is ready to import into your songbook app.</p>

<h2 id="convert">Converting between the two styles</h2>
<p>The app transposes but does not convert between styles. To convert by hand:</p>
<ul>
  <li><b>Chords over lyrics → ChordPro:</b> for each chord, find the letter of the lyric directly below it and insert <code>[Chord]</code> there. Then delete the chord line.</li>
  <li><b>ChordPro → chords over lyrics:</b> write each chord on a line above, starting in the same column as the syllable that followed it, and remove the brackets. Use a fixed-width font so the columns line up.</li>
</ul>
<p>See also: <a href="../transposition-basics/">transposing chords: the basics</a>.</p>
`,
  },
  ja: {
    title: "ChordPro（コードプロ）形式とは？書き方と移調の方法",
    heading: "ChordPro 形式の解説：書き方と移調の方法",
    nav: "ChordPro 形式の解説",
    description:
      "歌詞の中に [C] のようにコードを書き込むテキスト形式 ChordPro の解説。基本の書き方、{title}・{key} などのディレクティブ、ファイルの拡張子、ChordPro のコード譜を移調する方法をまとめました。",
    body: () => `
<p class="lead">ChordPro（コードプロ）は、コード付きの歌をテキストで書くための形式です。コードを歌詞の上の行に書く代わりに、そのコードを弾く文字の直前に角かっこで書き込みます。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#compare">歌詞の上にコードを書く形式との違い</a></li>
  <li><a href="#syntax">基本の書き方</a></li>
  <li><a href="#directives">よく使うディレクティブ</a></li>
  <li><a href="#files">ファイルとアプリ</a></li>
  <li><a href="#transpose">ChordPro のコード譜を移調する</a></li>
  <li><a href="#convert">2 つの形式を書き換える</a></li>
</ol></nav>

<h2 id="compare">歌詞の上にコードを書く形式との違い</h2>
<p>Web で見かけるコード譜の多くは、歌詞の上の行にコードを書く形式です。同じ部分を ChordPro で書くと次のようになります。</p>
<div class="pair">
  <figure><pre><code>C            G7  C
うさぎ追いし かの山
F            C   G7
こぶな釣りし かの川</code></pre><figcaption>歌詞の上にコードを書く形式</figcaption></figure>
  <figure><pre><code>[C]うさぎ追いし [G7]かの[C]山
[F]こぶな釣りし [C]かの[G7]川</code></pre><figcaption>ChordPro</figcaption></figure>
</div>
<p class="cap">例は文部省唱歌「故郷（ふるさと）」（著作権の保護期間が終了した曲）です。コードは説明用に簡単に付けたものです。</p>
<p>歌詞の上にコードを書く形式は読みやすい反面、スペースで位置を合わせているため、文字幅の違うフォントで表示したり歌詞を直したりすると、コードの位置がずれてしまいます。ChordPro はコードを文字に結び付けて書くので、ソングブックアプリがどんなフォントや画面の幅で表示しても、コードを正しい位置に置けます。全角と半角が混ざる日本語の歌詞では、特にこの違いが効いてきます。</p>

<h2 id="syntax">基本の書き方</h2>
<ul>
  <li><b>コード</b>は角かっこで囲み、そのコードを弾く文字の直前に書きます：<code>[Am]こんにちは</code></li>
  <li>語と語の間や行末にコードを置いてもかまいません：<code>かの山 [D]</code></li>
  <li><b>間奏</b>など歌詞のない部分はコードだけで書けます：<code>[G] [C] [D] [G]</code></li>
  <li><b>ディレクティブ</b>（指示）は波かっこで囲み、1 行に 1 つ書きます：<code>{title: 故郷}</code></li>
  <li><code>#</code> で始まる行は作成者用の<b>コメント</b>で、アプリには表示されません。</li>
</ul>

<h2 id="directives">よく使うディレクティブ</h2>
<p>ディレクティブで曲名などの情報を加えたり、曲のセクションを区切ったりします。多くは短い書き方もできます。</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">ディレクティブ</th><th scope="col">短縮形</th><th scope="col">意味</th></tr></thead>
    <tbody>
      <tr><th scope="row"><code>{title: …}</code></th><td data-label="短縮形："><code>{t: …}</code></td><td data-label="意味：">曲名</td></tr>
      <tr><th scope="row"><code>{subtitle: …}</code></th><td data-label="短縮形："><code>{st: …}</code></td><td data-label="意味：">サブタイトル（アーティスト名を書くことも多い）</td></tr>
      <tr><th scope="row"><code>{artist: …}</code></th><td></td><td data-label="意味：">アーティスト・作曲者</td></tr>
      <tr><th scope="row"><code>{key: G}</code></th><td></td><td data-label="意味：">曲のキー</td></tr>
      <tr><th scope="row"><code>{capo: 2}</code></th><td></td><td data-label="意味：">カポの位置</td></tr>
      <tr><th scope="row"><code>{tempo: 90}</code></th><td></td><td data-label="意味：">テンポ（BPM）</td></tr>
      <tr><th scope="row"><code>{comment: …}</code></th><td data-label="短縮形："><code>{c: …}</code></td><td data-label="意味：">曲と一緒に表示するメモ（「ゆっくり」など）</td></tr>
      <tr><th scope="row"><code>{start_of_chorus}</code> … <code>{end_of_chorus}</code></th><td data-label="短縮形："><code>{soc}</code> … <code>{eoc}</code></td><td data-label="意味：">サビ（コーラス）の範囲</td></tr>
      <tr><th scope="row"><code>{start_of_verse}</code> … <code>{end_of_verse}</code></th><td data-label="短縮形："><code>{sov}</code> … <code>{eov}</code></td><td data-label="意味：">A メロなど（バース）の範囲</td></tr>
      <tr><th scope="row"><code>{start_of_tab}</code> … <code>{end_of_tab}</code></th><td data-label="短縮形："><code>{sot}</code> … <code>{eot}</code></td><td data-label="意味：">TAB 譜。等幅フォントでそのまま表示</td></tr>
    </tbody>
  </table>
</div>
<p>小さなファイルの例です。</p>
<pre><code>{title: 故郷（ふるさと）}
{key: C}

{start_of_verse}
[C]うさぎ追いし [G7]かの[C]山
[F]こぶな釣りし [C]かの[G7]川
[C]夢は今も [F]めぐり[C]て
[F]忘れ[C]がたき [G7]ふる[C]さと
{end_of_verse}</code></pre>
<p>ほかにも多くのディレクティブがあります。仕様は <a href="https://www.chordpro.org/" rel="noopener">chordpro.org</a>（英語）で公開されています。</p>

<h2 id="files">ファイルとアプリ</h2>
<p>ChordPro のファイルは、ふつうの UTF-8 のテキストファイルです。拡張子は <code>.cho</code>・<code>.chopro</code>・<code>.chordpro</code>・<code>.crd</code>・<code>.pro</code> などがよく使われます。テキストなので、どのテキストエディタでも書け、多くのソングブックアプリやステージ用アプリに読み込めます。</p>

<h2 id="transpose">ChordPro のコード譜を移調する</h2>
<p>Chord Transposer は ChordPro のテキストをそのまま読み込めます。貼り付けるか、<code>.cho</code>・<code>.chopro</code>・<code>.crd</code>・<code>.pro</code> のファイルを開いてください。</p>
<ul>
  <li>角かっこの中のコードが移調されます：<code>[C]うさぎ</code> を +2 → <code>[D]うさぎ</code></li>
  <li>歌詞、波かっこのディレクティブ、<code>#</code> のコメント行はそのまま残ります。</li>
</ul>
<div class="note"><p><b><code>{key:}</code> は手で直してください。</b>アプリはディレクティブを書き換えないので、移調したあとに <code>{key: C}</code> を新しいキー（+2 なら <code>{key: D}</code>）に直します。なお、歌詞の上にコードを書く形式では、先頭の <code>Key:</code> の行は自動で書き換わります。</p></div>
<p>結果を保存すれば、そのままソングブックアプリに読み込めます。</p>

<h2 id="convert">2 つの形式を書き換える</h2>
<p>アプリは移調はできますが、形式の変換はしません。手で書き換えるときは次のようにします。</p>
<ul>
  <li><b>歌詞の上にコード → ChordPro：</b>コードの真下にある歌詞の文字を探し、その直前に <code>[コード]</code> を書き込みます。最後にコードの行を消します。</li>
  <li><b>ChordPro → 歌詞の上にコード：</b>コードを上の行に移し、直後にあった文字と同じ位置に置いて、角かっこを外します。位置がそろうよう、等幅フォントで作業しましょう。日本語の文字は半角 2 文字分の幅として数えます。</li>
</ul>
<p>関連記事：<a href="../transposition-basics/">移調・転調の基礎</a></p>
`,
  },
};
