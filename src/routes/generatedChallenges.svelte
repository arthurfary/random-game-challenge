<script lang="ts">
  import { challenges, isLoading } from "../stores/geminiStore";
  import { randomGame } from "../stores/steamStore";
</script>

<div class="challenges-container">
  {#if $randomGame !== ""}
    <h1>
      Your random game is {$randomGame}!
    </h1>
  {/if}

  {#if $isLoading}
    <p>Generating challenges...</p>
  {:else if $challenges.length > 0}
    {#each $challenges as challenge}
      <div class="challenge">
        <h3>{challenge.challengeName}</h3>
        <p>{challenge.challengeBody}</p>
        <p><i>Difficulty: {challenge.challengeDifficulty}</i></p>
      </div>
    {/each}
  {:else}
    <p>Waiting for input.</p>
  {/if}
</div>

<style>
  .challenges-container {
    background-color: #2a475e;
    padding: 20px;
    border-radius: 8px;
  }

  .challenge {
    background-color: #1b2838;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .challenge h3 {
    color: #66c0f4;
    margin: 0;
  }
</style>
