import { writable, get } from "svelte/store";
import { generateGameChallanges } from "./geminiStore";

export const games = writable([]);
export const loading = writable(false);
export const error = writable(null);
export const randomGame = writable("");

randomGame.subscribe((value) => {
  if (value) {
    generateGameChallanges(value);
  }
});

export async function fetchUserGames(steamID) {
  loading.set(true);
  error.set(null);

  try {
    const response = await fetch(`/api/steam?steamid=${steamID}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    data.sort((a, b) => b.playtime_forever - a.playtime_forever);

    games.set(data.slice(0, 30));
    pickRandomGame(data.slice(0, 30));
  } catch (err) {
    error.set(err);
  } finally {
    loading.set(false);
  }
}

function pickRandomGame(slicedGames) {
  if (slicedGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * slicedGames.length);
    randomGame.set(slicedGames[randomIndex].name);
  }
}
