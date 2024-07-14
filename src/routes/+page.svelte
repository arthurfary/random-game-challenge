<script>
  import {
    games,
    loading,
    error,
    fetchUserGames,
  } from "../stores/steamStore.js";

  let steamId = "";

  function fetchChallenge(steamId) {
    fetchUserGames(steamId);
  }
</script>

<h1>DESAFIO ALEATORIO NOS SEUS JOGOS DA STEAM</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

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

  {#each $games as game}
    <p>{game.name}</p>
  {/each}
{/if}
