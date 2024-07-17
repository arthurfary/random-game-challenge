<script>
  import { challenges, isLoading } from "../stores/geminiStore";
  import { randomGame } from "../stores/steamStore";
</script>

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
