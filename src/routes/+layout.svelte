<script lang="ts">
  // import '$lib/assets/global.css';
</script>

<slot />

<style>
  :root {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-family: Calibri, Arial, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: #448;
    color: #faf;
    line-height: 1.6;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :root {
      scroll-behavior: auto;
    }
  }

  /* https://stackoverflow.com/a/2711132/468618 */
  html {
    /* Prevent font scaling in landscape while allowing user zoom */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
</style>
