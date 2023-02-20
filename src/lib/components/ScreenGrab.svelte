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
  <!-- Firefox and Safari won't restart the GIF animation on reload so I'm randomizing the url. -->
  <span><img src={`${src}?${Math.random()}`} {alt} onload={imgLoaded()} /></span>
</div>

<style lang="scss">
  h2 {
    margin: 0;
    white-space: nowrap;
  }
  @media (max-width: 580px) {
    h2 {
      font-size: 1.2rem;
    }
  }
  progress {
    width: 300px;
  }
  img {
    max-width: 300px;
    display: block;
  }
  // Narrow img for mobile
  @media (max-width: 640px) {
    img,
    progress {
      width: 100%;
    }
  }
  .donePlaying span {
    position: relative;
    display: inline-block;
  }
  .donePlaying span::after {
    content: 'Done.';
    color: red;
    text-shadow: black 13px 13px 25px;
    -webkit-text-stroke: thin black;
    position: absolute;
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 50px;
    z-index: 1;
  }
</style>
