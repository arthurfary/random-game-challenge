

import { writable } from "svelte/store";

export const games = writable([]);
export const loading = writable(false);
export const error = writable(null);

export async function fetchUserGames(steamID) {
  loading.set(true);
  error.set(null);

  try {
    const response = await fetch(`/api/steam?steamid=${steamID}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    data.sort((a, b) => b.playtime_forever - a.playtime_forever)

    games.set(data.slice(0, 30))


  } catch (err) {
    error.set(err);
  } finally {
    loading.set(false);
  }
}
