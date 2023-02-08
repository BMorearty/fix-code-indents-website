<script lang="ts">
  import ScreenGrab from '$lib/components/ScreenGrab.svelte';
  import beforeImg from '$lib/assets/tabs-to-spaces-before.gif';
  import afterImg from '$lib/assets/tabs-to-spaces-after.gif';
</script>

<h1>Tabs to Spaces for Google Docs</h1>
<p>
  <u>Tabs to Spaces</u> is a Google Docs utility extension for developers. It converts tabs in the selected
  text to 4 spaces. And preserves any syntax highlighting you may already have applied.
</p>
<div class="compare">
  <div>
    <ScreenGrab src={beforeImg} label="Manual" alt="Before Tabs to Spaces" seconds={42} />
  </div>
  <div>
    <ScreenGrab
      src={afterImg}
      label="With Tabs to Spaces"
      alt="After Tabs to Spaces"
      seconds={5.3}
    />
  </div>
</div>
<p>
  Why convert tabs to spaces? Because Google Docs nonsensically converts every sequence of 4 spaces
  to a tab when you paste. And there's no way to turn it off. This extension reverses that nonsense.
</p>
<p>
  Even if your code was originally formatted with tabs, Google Docs tabs stops are every ½ inch.
  Regardless of your font size. So most code looks weird after pasting.
</p>
<p>
  Leaves images and tables untouched. You can select the whole doc and convert tabs to spaces
  safely.
</p>
<p>
  <img src="$lib/assets/tabs-to-spaces-screenshot.gif" alt="screenshot" width="700px" />
</p>

<style lang="scss">
  .compare {
    display: grid;
    grid-template-columns: minmax(112px, 255px) minmax(150px, 341px);
    grid-auto-flow: row;
    grid-gap: 12px;
  }
</style>
