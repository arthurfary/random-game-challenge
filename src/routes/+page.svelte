<script>
  import SteamInput from "./steamInput.svelte";
</script>

<div class="main">
  <h1>Entendiado? Gere um desafio!</h1>
  <SteamInput />
</div>

<style>
  :root {
    margin: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
</style>
