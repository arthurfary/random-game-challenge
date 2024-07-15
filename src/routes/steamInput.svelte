<script>
  import {
    games,
    loading,
    error,
    fetchUserGames,
  } from "../stores/steamStore.js";

  let steamId = "";
  $: gameNames = "";
  function fetchChallenge(steamId) {
    fetchUserGames(steamId);

    gameNames = $games.map((game) => game.name).join(", ");
  }
</script>

<div class="steamInput">
  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p>Error: {$error.message}</p>
  {:else}
    <h1>Steam Random Challenge</h1>
    <div class="input-container">
      <input type="text" bind:value={steamId} placeholder="Enter a steam id" />
      <button on:click={() => fetchChallenge(steamId)}>Get Challenge</button>
    </div>
    <p>
      {#each $games as game, i}
        {game.name}{$games.length === i + 1 ? "." : ", "}
      {/each}
    </p>
  {/if}
</div>

<style>
  .steamInput {
    display: flex;
    background-color: #eee;
    border-radius: 25px;
    align-items: center;
    flex-direction: column;
    padding: min(100px, 3%);
    max-width: 50%;
  }

  .input-container {
    gap: 10%;
    flex-direction: column;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 10px;
    border-radius: 25px;
    border: 1px solid #ddd;
    text-align: center;
  }
</style>
