<script lang="ts">
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
  {:else if $challenges.length > 0}
    {#each $challenges as challenge}
      <div class="challengeContainer">
        <h2>{challenge.challengeName}</h2>
        <p>{challenge.challengeBody}</p>
        <p><i>Difficulty: {challenge.challengeDifficulty}</i></p>
      </div>
    {/each}
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
    text-align: center;
  }
</style>
