
<script>
  import SteamInput from './steamInput.svelte';
  import GeneratedChallenges from './generatedChallenges.svelte';
</script>

<div class="container">
  <header>
    <h1>Steam Challenge Generator</h1>
  </header>
  <div class="content">
    <SteamInput />
    <GeneratedChallenges />
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #171a21;
    color: #c7d5e0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  header {
    background-color: #1b2838;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #66c0f4;
  }

  header h1 {
    color: #66c0f4;
  }

  .content {
    margin-top: 20px;
  }
</style>
