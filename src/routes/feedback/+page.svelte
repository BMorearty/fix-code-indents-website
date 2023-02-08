<script lang="ts">
  export let form;
</script>

<h1>Send feedback</h1>

<h2>Found a bug or have feedback? Lemme know.</h2>

<form action="?/report" method="post">
  <label>
    <span>Name</span>
    <input type="text" name="name" required />
  </label>
  <label>
    <span>Email</span>
    <input type="text" name="email" required />
  </label>
  <label>
    <span>Summary</span>
    <input type="text" name="summary" required />
  </label>
  <label>
    <span>Detailed description</span>
    <textarea name="issue" rows="20" required />
  </label>
  <input type="submit" value="Send it" />
</form>

<style>
  label {
    margin: 1em 0;
  }
  label,
  input[type='text'],
  textarea {
    display: block;
    width: 100%;
  }
  input[type='submit'] {
    padding: 0.5em;
    margin-top: 1em;
  }
</style>
