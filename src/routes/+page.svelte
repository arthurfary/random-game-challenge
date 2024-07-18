<script>
  import GeneratedChallanges from "./generatedChallanges.svelte";
  import SteamInput from "./steamInput.svelte";
</script>

<div class="main">
  <h1>Entendiado? Gere um desafio!</h1>
  <SteamInput />
  <GeneratedChallanges />
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #66c0f4;
    margin-bottom: 4vh;
    font-size: 4em;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    background-color: #171a21;

    min-height: 100vh;
  }
</style>
