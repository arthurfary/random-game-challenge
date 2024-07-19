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
          {#if challenge.challengeDifficulty === 0}
            <span class="easy ball"></span>
          {:else if challenge.challengeDifficulty === 1}
            <span class="medium ball"></span>
          {:else}
            <span class="hard ball"></span>
          {/if}

          <h3>{challenge.challengeName}</h3>
        </div>

        <p data-body>{challenge.challengeBody}</p>
      </div>
    {/each}
  {/if}
</div>

<style>
  .challenges-container h1 {
    padding: 10px;
  }
  .challenge {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .challenge h3 {
    color: #c7d5e0;
    margin: 0;
    align-self: center;
  }

  .challenge [data-body] {
    color: #c7d5e088;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .ball {
    margin-right: 1em;
    border-radius: 999px;
    height: 10px;
    aspect-ratio: 1;
    display: inline-block;
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
