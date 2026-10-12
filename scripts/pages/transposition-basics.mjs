export default {
  slug: "transposition-basics",
  en: {
    title: "How to Transpose Chords: A Beginner's Guide",
    heading: "How to transpose chords: a beginner's guide",
    nav: "Transposing chords: the basics",
    description:
      "What transposing means, why musicians change key, how to count semitones, how to find the key of a song, and how to transpose a chord chart by hand or in one step with Chord Transposer.",
    body: () => `
<p class="lead">Transposing means moving a whole song up or down to a new key. The melody and chord progression stay the same; only the pitch changes. Here is everything you need to do it by hand — and a faster way.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#why">Why transpose?</a></li>
  <li><a href="#semitones">Semitones: the unit of transposing</a></li>
  <li><a href="#by-hand">Transpose a chord chart by hand</a></li>
  <li><a href="#find-key">Find the key of a song</a></li>
  <li><a href="#singer">Choose a key for a singer</a></li>
  <li><a href="#app">Transpose in one step with the app</a></li>
</ol></nav>

<h2 id="why">Why transpose?</h2>
<ul>
  <li><b>To fit a voice.</b> A song that is too high or too low becomes comfortable when you move it a few semitones.</li>
  <li><b>To make the chords easier.</b> A song in Eb is full of barre chords on guitar; in D or E it may use open chords. (A <a href="../capo-chart/">capo</a> is another way to do this.)</li>
  <li><b>To play with other instruments.</b> Trumpets, clarinets, and saxophones are "transposing instruments": their written notes sound different from the notes on a piano. A Bb trumpet part, for example, is written 2 semitones higher than it sounds.</li>
  <li><b>To match a recording</b> that is in a different key from your sheet music.</li>
</ul>
<div class="note"><p><b>Transposing vs. modulating:</b> transposing moves the whole piece to another key. A <b>modulation</b> (key change) happens inside a song, like the lift to a higher key in the last chorus. When you transpose a song that has a key change, both parts move by the same amount.</p></div>

<h2 id="semitones">Semitones: the unit of transposing</h2>
<p>Western music divides the octave into 12 equal steps called <b>semitones</b> (half steps). On a guitar, one semitone is one fret; on a piano, it is the next key, black or white.</p>
<pre><code>C  C#  D  D#  E  F  F#  G  G#  A  A#  B  (C)
   Db      Eb         Gb      Ab      Bb</code></pre>
<p>Note that there is no black key between E and F or between B and C, so those pairs are only one semitone apart.</p>
<p>To move a chord up, count steps to the right; to move it down, count to the left, wrapping around from B back to C. For example, <b>G +2</b> → G#, <b>A</b>. And <b>C −3</b> → B, Bb, <b>A</b>.</p>
<p>Shifting by 12 semitones gives the same chord names an octave higher, so for chord charts +12 is the same as 0, and +5 gives the same chords as −7.</p>

<h2 id="by-hand">Transpose a chord chart by hand</h2>
<ol>
  <li><b>Decide the shift</b>, for example "up 2 semitones".</li>
  <li><b>Move the root</b> of every chord (the letter and its # or b) by that many semitones.</li>
  <li><b>Keep the rest of the chord as it is.</b> m, 7, maj7, sus4, add9, and other symbols do not change: Em7 +2 → F#m7.</li>
  <li><b>Move the bass note</b> of slash chords too: D/F# +2 → E/G#.</li>
  <li><b>Choose sharps or flats</b> that suit the new key (see <a href="../sharps-and-flats/">sharps or flats?</a>).</li>
</ol>
<p>Here is the first verse of <i>Amazing Grace</i> (a traditional hymn in the public domain), moved from G to A (+2):</p>
<div class="pair">
  <figure><pre><code>G          G7       C        G
Amazing grace, how sweet the sound
G                     Em     D
That saved a wretch like me
G           G7      C         G
I once was lost, but now am found
G        D        G
Was blind, but now I see</code></pre><figcaption>Key of G</figcaption></figure>
  <figure><pre><code>A          A7       D        A
Amazing grace, how sweet the sound
A                     F#m    E
That saved a wretch like me
A           A7      D         A
I once was lost, but now am found
A        E        A
Was blind, but now I see</code></pre><figcaption>Key of A (+2)</figcaption></figure>
</div>
<p>A <a href="../key-chart/">chart of the chords in every key</a> makes this quicker: find each chord in the row of the old key and read the same column in the new key.</p>

<h2 id="find-key">Find the key of a song</h2>
<p>To know where you are moving <i>from</i>, you need the original key. Some quick clues:</p>
<ul>
  <li>The <b>last chord</b> is usually the key, and the first chord often is too.</li>
  <li>The chord that feels like "home" and appears most often is usually the key.</li>
  <li>Check which chords fit one row of the <a href="../key-chart/">key chart</a>. G, C, D, and Em all belong to the key of G.</li>
  <li>If the home chord is minor (Am, Em, …), the song is in a minor key. Transposing works the same way.</li>
</ul>

<h2 id="singer">Choose a key for a singer</h2>
<ol>
  <li>Find the highest and lowest notes of the melody.</li>
  <li>Sing the song in its original key and notice whether the high part strains or the low part disappears.</li>
  <li>Move by 1 or 2 semitones at a time. A small change is often enough.</li>
</ol>
<p>If you use a karaoke machine, its key control also moves in semitones. A song that felt right at "+2" on karaoke needs +2 in the app.</p>

<h2 id="app">Transpose in one step with the app</h2>
<p>Chord Transposer does all of the above for a whole chart at once:</p>
<ol>
  <li>Paste the chord chart, or open a text, PDF, or image file.</li>
  <li>Choose the number of semitones in <b>Transpose</b> (−12 to +12).</li>
  <li>Choose how to write sharps and flats in <b>#/♭</b>.</li>
  <li>Preview, print, or save the result.</li>
</ol>
<p>The app keeps the chords above the right words, and it leaves the lyrics untouched. Read the <a href="../guide/">full guide</a> for details and tips.</p>
`,
  },
  ja: {
    title: "コードの移調のやり方：初心者のための移調・転調の基礎",
    heading: "コードの移調のやり方：移調・転調の基礎",
    nav: "移調・転調の基礎",
    description:
      "移調と転調の違い、キーを変える理由、半音の数え方、曲のキーの見つけ方、コード譜を手で移調する手順と、Chord Transposer でまとめて移調する方法をわかりやすく解説します。",
    body: () => `
<p class="lead">移調とは、曲全体を別のキー（調）に上げ下げすることです。メロディーやコード進行の形はそのままで、音の高さだけが変わります。手で移調するための基礎と、もっと速い方法を紹介します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#diff">移調と転調の違い</a></li>
  <li><a href="#why">なぜ移調するのか</a></li>
  <li><a href="#semitones">半音：移調の単位</a></li>
  <li><a href="#by-hand">コード譜を手で移調する</a></li>
  <li><a href="#find-key">曲のキーを見つける</a></li>
  <li><a href="#singer">歌いやすいキーを選ぶ</a></li>
  <li><a href="#app">アプリでまとめて移調する</a></li>
</ol></nav>

<h2 id="diff">移調と転調の違い</h2>
<p>よく似た言葉ですが、意味が違います。</p>
<ul>
  <li><b>移調</b>：曲全体を、そっくりそのまま別のキーに移すこと。歌いやすい高さに合わせるときなどに行います。</li>
  <li><b>転調</b>：曲の途中でキーが変わること。最後のサビで半音や全音上がる「サビ転調」などが代表例です。</li>
</ul>
<p>日常会話では「キーを変える」という意味で「転調」と言うこともありますが、コード譜を書き換える作業は正確には<b>移調</b>です。転調を含む曲を移調するときは、転調の前も後も同じ半音数だけ動かします。</p>

<h2 id="why">なぜ移調するのか</h2>
<ul>
  <li><b>声に合わせるため。</b>高すぎる・低すぎる曲も、数半音動かすだけで歌いやすくなります。</li>
  <li><b>コードを弾きやすくするため。</b>キー Eb の曲はギターではセーハ（バレー）だらけですが、D や E に移せば開放弦のコードで弾けることがあります（<a href="../capo-chart/">カポ</a>を使う方法もあります）。</li>
  <li><b>ほかの楽器と合わせるため。</b>トランペット・クラリネット・サックスは「移調楽器」で、楽譜の音とピアノで鳴る音が違います。たとえば B♭ のトランペットの譜面は、実際の音より 2 半音高く書きます。</li>
  <li><b>音源のキーに合わせるため。</b>手元の楽譜と録音のキーが違うときに使います。</li>
</ul>

<h2 id="semitones">半音：移調の単位</h2>
<p>1 オクターブは 12 の<b>半音</b>に分かれています。ギターでは 1 フレット、ピアノでは隣の鍵盤（白鍵・黒鍵を問わず）が半音 1 つです。</p>
<pre><code>C  C#  D  D#  E  F  F#  G  G#  A  A#  B  (C)
   Db      Eb         Gb      Ab      Bb</code></pre>
<p>E と F、B と C の間には黒鍵がないので、この 2 組は半音 1 つしか離れていません。</p>
<p>上げるときは右へ、下げるときは左へ数えます。B の次は C に戻ります。たとえば <b>G を +2</b> → G#、<b>A</b>。<b>C を −3</b> → B、Bb、<b>A</b> です。</p>
<p>12 半音動かすと 1 オクターブ上の同じコード名になるので、コード譜では +12 は 0 と同じで、+5 と −7 も同じコードになります。</p>

<h2 id="by-hand">コード譜を手で移調する</h2>
<ol>
  <li><b>動かす幅を決めます</b>（例：「2 半音上げる」）。</li>
  <li>すべてのコードの<b>ルート音</b>（アルファベットと # / b）を、その半音数だけ動かします。</li>
  <li><b>ルート以外はそのまま</b>です。m・7・maj7・sus4・add9 などは変わりません。Em7 を +2 すると F#m7 です。</li>
  <li>分数コード（オンコード）は<b>ベース音も動かします</b>。D/F# を +2 すると E/G# です。</li>
  <li>移調先のキーに合わせて<b>シャープかフラットかを選びます</b>（<a href="../sharps-and-flats/"># と ♭ の使い分け</a>を参照）。</li>
</ol>
<p>文部省唱歌「故郷（ふるさと）」（著作権の保護期間が終了した曲）の冒頭を、キー C から D（+2）に移調した例です。</p>
<div class="pair">
  <figure><pre><code>C            G7  C
うさぎ追いし かの山
F            C   G7
こぶな釣りし かの川
C        F     C
夢は今も めぐりて
F     C    G7    C
忘れがたき ふるさと</code></pre><figcaption>キー C</figcaption></figure>
  <figure><pre><code>D            A7  D
うさぎ追いし かの山
G            D   A7
こぶな釣りし かの川
D        G     D
夢は今も めぐりて
G     D    A7    D
忘れがたき ふるさと</code></pre><figcaption>キー D（+2）</figcaption></figure>
</div>
<p class="cap">コードは説明用に簡単に付けたものです。</p>
<p><a href="../key-chart/">キー別のコード表</a>を使うと、元のキーの行でコードを探し、新しいキーの行の同じ列を読むだけで移調できます。</p>

<h2 id="find-key">曲のキーを見つける</h2>
<p>どこから移調するかを知るには、元のキーが必要です。手がかりは次のとおりです。</p>
<ul>
  <li><b>最後のコード</b>は、たいていその曲のキーです。最初のコードもキーであることが多いです。</li>
  <li>「落ち着く」感じがして、いちばんよく出てくるコードがキーであることが多いです。</li>
  <li>使われているコードが<a href="../key-chart/">キー別のコード表</a>のどの行に収まるかを見ます。G・C・D・Em ならキー G です。</li>
  <li>落ち着くコードがマイナー（Am、Em など）なら、マイナーキーの曲です。移調のやり方は同じです。</li>
</ul>

<h2 id="singer">歌いやすいキーを選ぶ</h2>
<ol>
  <li>メロディーのいちばん高い音と低い音を確かめます。</li>
  <li>原曲のキーで歌ってみて、高いところが苦しいか、低いところが出ないかを確かめます。</li>
  <li>1〜2 半音ずつ動かして試します。小さな変更で十分なことがよくあります。</li>
</ol>
<p><b>カラオケのキー変更も半音単位です。</b>カラオケで「+2」が歌いやすかった曲は、アプリでも +2 にすれば同じキーになります。</p>

<h2 id="app">アプリでまとめて移調する</h2>
<p>Chord Transposer なら、ここまでの作業をコード譜全体に一度で行えます。</p>
<ol>
  <li>コード譜を貼り付けるか、テキスト・PDF・画像ファイルを開きます。</li>
  <li><b>移調</b>で半音数（−12〜+12）を選びます。</li>
  <li><b>#/♭</b> でシャープとフラットの書き方を選びます。</li>
  <li>結果をプレビュー・印刷・保存します。</li>
</ol>
<p>コードは歌詞の正しい位置の上に保たれ、歌詞は書き換えられません。詳しい使い方とコツは<a href="../guide/">使い方ガイド</a>をご覧ください。</p>
`,
  },
};
