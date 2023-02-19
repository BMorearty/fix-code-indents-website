<script lang="ts">
  import ScreenGrab from '$lib/components/ScreenGrab.svelte';
  import beforeImg from '$lib/assets/fix-code-indents-before.gif';
  import afterImg from '$lib/assets/fix-code-indents-after.gif';
</script>

<h1>Fix Code Indents for Google Docs&trade;</h1>
<p>
  <u>Fix Code Indents</u> is a Google Docs&trade; utility add-on for developers. It fixes indentation
  in code you’ve pasted, after Docs&trade; screwed it up. It also preserves any syntax highlighting you
  may already have applied.
</p>
<p>
  <em>Works in any language</em>. This does not run Prettier. It does not reformat your code. It
  just reindents it.
</p>
<p>Works no matter what indent size the original code had.</p>
<div class="compare">
  <ScreenGrab src={beforeImg} label="Manual" alt="Before Fix Code Indents" seconds={39.2} />
  <ScreenGrab
    src={afterImg}
    label="With Fix Code Indents"
    alt="After Fix Code Indents"
    seconds={5.3}
  />
</div>
<h2>How does Docs™ screw up my indents?</h2>
<p>
  Google Docs&trade; nonsensically converts <em>the last 4 spaces</em> of every space sequence to a tab
  when you paste, completely screwing up your indents. And there’s no way to turn it off. This add-on
  reverses that nonsense. Phooey.
</p>
<h2>How does this tool fix the indentation?</h2>
<p>In the text you select, it converts each tab back to 4 spaces.</p>
<h2>But I indent with 1/2/3/8 etc. tabs, not 4</h2>
<p>
  Me too. I indent with 2 spaces. Google Docs™ is so good that it messes up your indents no matter <em
    >what</em
  > indent size you use because it converts your pasted code to use a mix of tabs and spaces.
</p>
<h2>But I indent with tabs</h2>
<p>
  If you use tabs, Docs&trade; won’t screw up your pasted code as badly. But it’s still a little
  weird because the indents aren’t a fixed number of character widths. Google Docs&trade; tabs stops
  are every ½ inch, regardless of your font size. If you run Fix Code Indents, your tabs will be
  converted to 4 spaces so indentation will look regular.
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
  <li>Open up Google Docs&trade;.</li>
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
