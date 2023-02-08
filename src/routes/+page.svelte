<script lang="ts">
  import ScreenGrab from '$lib/components/ScreenGrab.svelte';
  import beforeImg from '$lib/assets/tabs-to-spaces-before.gif';
  import afterImg from '$lib/assets/tabs-to-spaces-after.gif';
</script>

<h1>Tabs to Spaces for Google Docs</h1>
<p>
  <u>Tabs to Spaces</u> is a Google Docs utility extension for developers. It fixes indentation in code
  you’ve pasted, after Docs screwed it up by converting every sequence of 4 spaces to a tab. It also
  preserves any syntax highlighting you may already have applied.
</p>
<div class="compare">
  <ScreenGrab src={beforeImg} label="Manual" alt="Before Tabs to Spaces" seconds={42} />
  <ScreenGrab src={afterImg} label="With Tabs to Spaces" alt="After Tabs to Spaces" seconds={5.3} />
</div>
<h2>Why convert tabs to spaces?</h2>
<p>
  Because Google Docs nonsensically converts every sequence of 4 spaces to a tab when you paste,
  completely screwing up your indents. And there’s no way to turn it off. This extension reverses
  that nonsense. Phooey.
</p>
<h2>But I format my code with tabs</h2>
<p>
  If you use tab formatting, Docs won’t screw up your pasted code as badly. But it’s still a little
  weird because the indents aren’t a fixed number of character widths. Google Docs tabs stops are
  every ½ inch, regardless of your font size.
</p>
<h2>Will it mess up the rest of my doc?</h2>
<p>
  No. In addition to maintaining your syntax highlighting, Tabs to Spaces leaves your images,
  tables, etc. untouched. (It will replace tabs in tables.) You can select the whole doc and convert
  tabs to spaces safely.
</p>
<p>
  <img src="$lib/assets/tabs-to-spaces-screenshot.gif" alt="screenshot" width="684px" />
</p>
<h2>How do I install it?</h2>
<ol>
  <li>Open up Google Docs.</li>
  <li>Go to the Extensions > Add-ons > Get add-ons menu.</li>
  <li>Search for Tabs to Spaces.</li>
  <li>Install.</li>
</ol>
<h2>How do I use it?</h2>
<ol>
  <li>Select some code you’ve pasted into your document.</li>
  <li>Go to the Extensions > Add-ons > Tabs to Spaces > Convert.</li>
</ol>
<p>See screenshot above for an example.</p>

<style lang="scss">
  .compare {
    display: grid;
    grid-template-columns: minmax(112px, 255px) minmax(150px, 341px);
    grid-auto-flow: row;
    grid-gap: 12px;
  }
  // Narrow img for mobile
  @media (max-width: 600px) {
    img {
      max-width: 350px;
    }
  }
</style>
