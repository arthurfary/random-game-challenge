import { writable } from "svelte/store";

import { GoogleGenerativeAI } from "@google/generative-ai"
import type { Challenge } from "../types";

export const challenges = writable<Challenge[]>([])
export const isLoading = writable(false)

export async function generateGameChallanges(gameName: string) {
  isLoading.set(true)

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });

  const prompt = `You are an expert in designing engaging and fun challenges for players in video games. 
    Your task is to create 3 random challenges for a player in the game ${gameName}. The challenges should range in difficulty from easy to hard, ensuring that they are achievable and provide a sense of progression. 

    Guidelines for creating the challenges:
    1. Each challenge should be unique and cater to different play styles and skill levels.
    2. Make sure the challenges are feasible and can be completed within the game's mechanics and constraints.
    3. Use a variety of objectives, such as completing specific achievements, using particular items or abilities, or achieving certain in-game milestones.
    4. Ensure that the challenges are engaging and provide a sense of accomplishment upon completion.
    5. Avoid repetitive tasks and strive to make each challenge distinct and interesting.
    6. Do not use double quotes inside challenge bodies.

    Please use the following JSON schema:
    challenge = {'challengeName': 'str', 'challengeBody': 'str', 'challengeDifficulty': int 0,1,2}

    Return a list of challenges in the following format:
    list[challenge]

    Example challenges for reference:
    1. {"challengeName": "Beginner's Luck", "challengeBody": 'Complete the first mission without taking any damage.', "challengeDifficulty": 0}
    2. {"challengeName": "Resourceful Warrior", "challengeBody": 'Defeat 10 enemies using only melee weapons.', "challengeDifficulty": 1}
    3. {"challengeName": "Ultimate Survivor", "challengeBody": 'Survive for 20 minutes in the hardest difficulty mode.', "challengeDifficulty": 2}
    `;

  const result = await model.generateContent(prompt)
  const response = await result.response;

  const unsortedChallenges = <Challenge[]>JSON.parse(response.text());

  challenges.set(unsortedChallenges.sort((a: Challenge, b: Challenge) => a.challengeDifficulty - b.challengeDifficulty));
  isLoading.set(false)
}
