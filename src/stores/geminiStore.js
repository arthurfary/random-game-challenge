import { writable } from "svelte/store";

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const challenges = writable("")
export const isLoading = writable(false)

export async function generateGameChallanges(gameName) {
  isLoading.set(true)

  const prompt = `Create 3 challenges ranging in difficulty from Easy to Difficult for a \
    player in the game ${gameName}, the player will try to achieve those challenges by playing said \
    game to the best of their ability, make sure they are all achievable and fun.`

  const result = await model.generateContent(prompt)
  const response = await result.response;

  challenges.set(response.text())
  isLoading.set(false)
}
