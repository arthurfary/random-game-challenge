
import axios from "axios";

export const GET = async ({ request }) => {
  const STEAM_API_KEY = import.meta.env.VITE_STEAM_API_KEY;
  const url = new URL(request.url);
  const vanityUrl = url.searchParams.get("vanityurl");

  try {
    const steamId = await axios.get("https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/", {
      params: {
        key: STEAM_API_KEY,
        format: 'json',
        vanityurl: vanityUrl
      }
    });
    return new Response(JSON.stringify({ steamid: steamId.data.response.steamid }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error, message: "Failed to fetch from steamapi" }), { status: 500 });
  }
}

