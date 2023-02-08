<slot />

<style lang="scss">
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

  :global(h1) {
    font-size: 5rem;
    margin-bottom: 0;
    line-height: 1.2;
    text-shadow: white -1px -1px 1px, black 13px 13px 35px;
  }

  @media (max-width: 600px) {
    :global(h1) {
      font-size: 3rem;
    }
  }
</style>
