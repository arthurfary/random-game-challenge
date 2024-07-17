<script>
  import { challenges, isLoading } from "../stores/geminiStore";
  import { randomGame } from "../stores/steamStore";
</script>

<div class="main">
  {#if $randomGame !== ""}
    <h1>
      Your random game is {$randomGame}!
    </h1>
  {/if}

  {#if $isLoading}
    Generating challenges...
  {:else if $challenges !== ""}
    <p>
      {$challenges}
    </p>
  {/if}
</div>

<style>
  .main {
    max-width: 50%;
    color: #c7d5e0;
  }

  h1 {
    color: #66c0f4;
    margin-bottom: 4vh;
    font-size: 4em;
  }
</style>
