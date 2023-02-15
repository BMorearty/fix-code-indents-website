<script lang="ts">
  import ScreenGrab from '$lib/components/ScreenGrab.svelte';
  import beforeImg from '$lib/assets/fix-code-indents-before.gif';
  import afterImg from '$lib/assets/fix-code-indents-after.gif';
</script>

<h1>Fix Code Indents for Google Docs</h1>
<p>
  <u>Fix Code Indents</u> is a Google Docs utility add-on for developers. It fixes indentation in code
  you’ve pasted, after Docs screwed it up by converting every sequence of 4 spaces to a tab. It also
  preserves any syntax highlighting you may already have applied.
</p>
<p>
  <em>Works in any language</em>. This does not run Prettier. It does not reformat your code. It
  just reindents it by converting tabs back to spaces.
</p>
<div class="compare">
  <ScreenGrab src={beforeImg} label="Manual" alt="Before Fix Code Indents" seconds={39.2} />
  <ScreenGrab
    src={afterImg}
    label="With Fix Code Indents"
    alt="After Fix Code Indents"
    seconds={5.3}
  />
</div>
<h2>Why convert tabs to spaces?</h2>
<p>
  Because Google Docs nonsensically converts every sequence of 4 spaces to a tab when you paste,
  completely screwing up your indents. And there’s no way to turn it off. This add-on reverses that
  nonsense. Phooey.
</p>
<h2>But I format my code with tabs</h2>
<p>
  If you use tabs, Docs won’t screw up your pasted code as badly. But it’s still a little weird
  because the indents aren’t a fixed number of character widths. Google Docs tabs stops are every ½
  inch, regardless of your font size. If you run Fix Code Indents, your tabs will be converted to 4
  spaces so indentation will look regular.
</p>
<h2>Will it mess up the rest of my doc?</h2>
<p>
  No. In addition to maintaining your syntax highlighting, Fix Code Indents leaves your images,
  tables, etc. untouched. (It will replace tabs in tables.) You can select the whole doc and convert
  tabs to spaces safely.
</p>
<p>
  <img src="$lib/assets/fix-code-indents-screenshot.gif" alt="screenshot" width="684px" />
</p>
<h2>How do I install it?</h2>
<ol>
  <li>Open up Google Docs.</li>
  <li>Go to the Extensions > Add-ons > Get add-ons menu.</li>
  <li>Search for Fix Code Indents.</li>
  <li>Install.</li>
</ol>
<h2>How do I use it?</h2>
<ol>
  <li>Select some code you’ve pasted into your document.</li>
  <li>Choose Extensions > Fix Code Indents > Reindent.</li>
</ol>
<p>See screenshot above for an example.</p>

<style lang="scss">
  .compare {
    display: grid;
    grid-template-columns: minmax(112px, 242px) minmax(150px, 353px);
    grid-auto-flow: row;
    grid-gap: 12px;
  }
  img {
    box-sizing: border-box;
    max-width: 580px;
  }
  // Narrow img for mobile
  @media (max-width: 600px) {
    img {
      max-width: 98%;
    }
  }
</style>
