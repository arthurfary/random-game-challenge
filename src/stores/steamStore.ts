import { writable } from "svelte/store";
import { generateGameChallanges } from "./geminiStore";
import type { SteamGame } from "../types";

export const games = writable<SteamGame[]>([]);
export const loading = writable(false);
export const error = writable<Error | undefined>(undefined);
export const randomGame = writable("");

randomGame.subscribe((value) => {
  if (value) {
    generateGameChallanges(value);
  }
});

export async function fetchUserGames(steamUrl: string) {
  loading.set(true);
  error.set(undefined);

  const steamID = await parseSteamUrl(steamUrl);

  try {
    const response = await fetch(`/api/steam?steamid=${steamID}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    data.sort((a: SteamGame, b: SteamGame) => b.playtime_forever - a.playtime_forever);

    games.set(data.slice(0, 30));
    pickRandomGame(data.slice(0, 30));
  } catch (err) {
    error.set(err as Error);
  } finally {
    loading.set(false);
  }
}

function pickRandomGame(slicedGames: SteamGame[]) {
  if (slicedGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * slicedGames.length);
    randomGame.set(slicedGames[randomIndex].name);
  }
}

async function parseSteamUrl(steamUrl: string) {
  const trimmedSteamUrl = steamUrl.replace(/\/$/, '')
  const identification = trimmedSteamUrl.split('/').pop()

  // if its not a number
  if (isNaN(+identification)) {
    const response = await fetch(`/api/steam/vanitytoid?vanityurl=${identification}`)
    const data = await response.json()
    return data.steamid
  }
  else {
    return +identification
  }
}

