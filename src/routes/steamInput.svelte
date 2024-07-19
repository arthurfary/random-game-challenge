<script lang="ts">
  import { loading, error, fetchUserGames } from "../stores/steamStore";

  let steamId = "";

  function fetchChallenge(steamId: string) {
    fetchUserGames(steamId);
  }
</script>

<div class="input-container">
  {#if $error}
    <p>Error: {$error.message}</p>
  {/if}
  <div class="input-box">
    <input type="text" bind:value={steamId} placeholder="Enter a steam id." />
    <button
      on:click={() => fetchChallenge(steamId)}
      class={$loading ? "loading" : ""}
      >{$loading ? "Loading..." : "Get Challenges"}</button
    >
  </div>
</div>

<style>
  .input-container {
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-box {
    display: flex;
    align-items: center;
    background-color: #1b2838;
    border-radius: 8px;
    border: 1px solid #66c0f488;
    width: min(100%, 550px);
  }

  .input-container input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    width: 70%;
    background-color: transparent;
    color: white;
  }

  .input-container button {
    background-color: #669900;
    background-color: #1981e6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    width: 30%;
    margin: 5px;
  }

  .loading {
    background-color: #1981e688 !important;
  }

  .input-container button:hover {
    background-color: #1981e6dd;
  }
</style>
