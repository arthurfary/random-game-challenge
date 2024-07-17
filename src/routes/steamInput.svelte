<script>
  import { loading, error, fetchUserGames } from "../stores/steamStore.js";

  let steamId = "";

  function fetchChallenge(steamId) {
    fetchUserGames(steamId);
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
  {/if}
</div>

<style>
  .steamInput {
    display: flex;
    background-color: #1b2838;
    color: #c7d5e0;
    border-radius: 25px;
    align-items: center;
    flex-direction: column;
    padding: min(100px, 3%);
    max-width: 50%;
    gap: 1em;
  }

  .input-container {
    flex-direction: column;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  input {
    padding: 10px;
    border-radius: 25px;
    border: 1px solid #ddd;
    text-align: center;
  }

  button {
    background-color: #2a475e;
    font-size: 1em;
    border-radius: 99px;
    border: 1px solid #c7d5e0;
    color: #c7d5e0;

    padding-block: 2%;
    padding-inline: 5%;
  }

  button:hover {
    cursor: pointer;
  }
</style>
