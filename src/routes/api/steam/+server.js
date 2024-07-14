
import axios from "axios";

export const GET = async ({ request }) => {
  const STEAM_API_KEY = import.meta.env.VITE_STEAM_API_KEY;
  const url = new URL(request.url);
  const steamid = url.searchParams.get("steamid");

  try {
    // Fetch all games
    const allGamesRequest = await axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/", {
      params: {
        key: STEAM_API_KEY,
        format: 'json'
      }
    });

    let allGames = allGamesRequest.data.applist.apps;

    // Create a map of appid to game name
    const steam_games = allGames.reduce((acc, game) => {
      acc[game.appid] = game.name;
      return acc;
    }, {});

    // Fetch owned games
    const userGamesRequest = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`, {
      params: {
        include_played_free_games: 1,
        key: STEAM_API_KEY,
        steamid: steamid,
        format: 'json'
      }
    });

    let ownedGames = userGamesRequest.data.response.games;

    // Append game names to owned games
    ownedGames = ownedGames
      .filter(game => steam_games[game.appid] !== undefined)
      .map(game => ({
        appid: game.appid,
        playtime_forever: game.playtime_forever,
        name: steam_games[game.appid],
        ...(["playtime_disconnected",
          "playtime_linux_forever",
          "playtime_mac_forever",
          "playtime_windows_forever",
          "rtime_last_played"].reduce((acc, key) => {
            if (key in game) {
              acc[key] = game[key];
            }
            return acc;
          }, {}))
      }));

    return new Response(JSON.stringify(ownedGames), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error, message: "Failed to fetch from steamapi" }), { status: 500 });
  }
}

