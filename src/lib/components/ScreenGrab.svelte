<script lang="ts">
  import { writable } from 'svelte/store';

  export let label: string;
  export let src: string;
  export let alt: string;
  export let seconds: number;
  let donePlaying = writable(false);
  let progress = writable(0);

  function imgLoaded() {
    setTimeout(() => {
      donePlaying.set(true);
    }, seconds * 1000);

    const start = new Date();
    const interval = setInterval(() => {
      progress.set(new Date().getTime() - start.getTime());
      if ($progress > seconds * 1000) {
        clearInterval(interval);
      }
    }, 30);

    return true;
  }
</script>

<div class:donePlaying={$donePlaying}>
  <h2>{label}</h2>
  <progress max={seconds * 1000} value={$progress} />
  <div><img {src} {alt} onload={imgLoaded()} /></div>
</div>

<style lang="scss">
  h2 {
    margin: 0;
    white-space: nowrap;
  }
  progress {
    width: 100%;
  }
  img {
    max-height: 600px;
    display: block;
  }
  // Narrow img for mobile
  @media (max-width: 600px) {
    img {
      max-height: 300px;
    }
  }
  .donePlaying div {
    position: relative;
  }
  .donePlaying div::after {
    content: 'Done!';
    position: absolute;
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
</style>
