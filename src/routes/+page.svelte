<script>
  import SteamInput from "./steamInput.svelte";
  import GeneratedChallenges from "./generatedChallenges.svelte";
</script>

<div class="container">
  <header>
    <h1>Up for a challenge?</h1>
  </header>
  <div class="content">
    <SteamInput />
    <GeneratedChallenges />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");
  :global(*) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Space Grotesk", "Arial", sans-serif;
    background-color: #171a21;
    color: #c7d5e0;
    min-height: 100vh;
  }

  :global(h1) {
    font-size: 2.986rem;
  }
  :global(h2) {
    font-size: 2.488rem;
  }
  :global(h3) {
    font-size: 2.074rem;
  }
  :global(p) {
    font-size: 1rem;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    margin-block: 10vh;
  }

  header {
    padding: 20px;
    text-align: center;
  }

  header h1 {
    color: #c7d5e0;
  }

  .content {
    margin-top: 20px;
  }
</style>
