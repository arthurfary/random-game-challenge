<script lang="ts">
  import { loading, error, fetchUserGames } from "../stores/steamStore";

  let steamId = "";

  function fetchChallenge(steamId: string) {
    fetchUserGames(steamId);
  }
</script>

<div class="input-container">
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
  .input-container {
    background-color: #2a475e;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .input-container input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .input-container button {
    background-color: #669900;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }

  .input-container button:hover {
    background-color: #4d7a00;
  }
</style>
