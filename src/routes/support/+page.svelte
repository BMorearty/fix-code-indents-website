<script lang="ts">
  export let data;
  export let form;
</script>

<h1>Get support</h1>

<h2>Found a bug or have feedback? Lemme know.</h2>

<form action="?/send" method="post">
  {#if form?.error}
    <div class="error">{form?.error}</div>
  {/if}
  {#if form?.success}
    <div class="success">{form?.success}</div>
  {/if}
  <label>
    <span>Your name</span>
    <input
      type="text"
      name="name"
      value={form?.name ?? ''}
      required
      maxlength={data.maxLength.name}
    />
  </label>
  <label>
    <span>Your email address</span>
    <input
      type="email"
      name="email"
      value={form?.email ?? ''}
      required
      maxlength={data.maxLength.email}
    />
  </label>
  <label>
    <span>Subject</span>
    <input
      type="text"
      name="subject"
      value={form?.subject ?? ''}
      required
      maxlength={data.maxLength.subject}
    />
  </label>
  <label>
    <span>Question or feedback</span>
    <textarea name="body" rows="20" required maxlength={data.maxLength.body}
      >{form?.body ?? ''}</textarea
    >
  </label>
  <label>
    <span>What is the second word of “fix code indents?”</span>
    <input type="text" name="captcha" value={form?.captcha ?? ''} required maxlength="4" />
  </label>
  <input type="submit" value="Send it" />
</form>

<style>
  label {
    margin: 1em 0;
  }
  label,
  input[type='text'],
  input[type='email'],
  textarea {
    display: block;
    width: 100%;
  }
  input[type='submit'] {
    padding: 0.5em;
    margin-top: 1em;
  }
  .error {
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    background-color: red;
  }
  .success {
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    background-color: green;
  }
</style>
