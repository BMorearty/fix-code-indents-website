<header>
  <nav>
    <a href="/">Home</a>
    |
    <a href="/payment">Payment</a>
  </nav>
</header>

<slot />

<footer>
  <nav>
    <a href="/terms">Terms of service</a>
    |
    <a href="/privacy">Privacy policy</a>
    |
    <a href="/support">Support</a>
  </nav>
</footer>

<style lang="scss">
  :root {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-family: Calibri, Arial, sans-serif;
    font-size: 16px;
    background-color: #448;
    color: #faf;
    line-height: 1.6;
  }

  :global(a) {
    color: #faf;
  }

  :global(header) {
    text-align: right;
    font-size: 20px;
  }

  :global(footer) {
    margin: 3rem 0;
  }

  :global(h1) {
    font-size: 5rem;
    margin-bottom: 0;
    line-height: 1.2;
    text-shadow: white -1px -1px 1px, black 13px 13px 35px;
  }

  :global(h2) {
    font-size: 2rem;
    text-shadow: black 1px 1px 2px;
  }

  @media (max-width: 600px) {
    :global(h1) {
      font-size: 3rem;
    }
  }
</style>
