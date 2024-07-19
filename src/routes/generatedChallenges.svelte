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
        <div class="title">
          <h3>{challenge.challengeName}</h3>
          <div class="difficulty">
            {#if challenge.challengeDifficulty === 0}
              <p class="easy">Easy</p>
            {:else if challenge.challengeDifficulty === 1}
              <p class="medium">Medium</p>
            {:else}
              <p class="hard">Hard</p>
            {/if}
          </div>
        </div>

        <p>{challenge.challengeBody}</p>
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
    align-self: center;
  }

  .title {
    display: flex;
  }

  .difficulty p {
    margin: 0;
    margin-left: 10px;
    padding-block: 2px;
    padding-inline: 10px;
    width: fit-content;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: white;
  }

  .easy {
    background: #669900;
  }

  .medium {
    background: #e6b11e;
  }

  .hard {
    background: #d94126;
  }
</style>
