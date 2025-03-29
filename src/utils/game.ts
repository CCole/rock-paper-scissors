import { Move } from "../types/Move";

export function getRandomMove(moves: readonly Move[]): Move {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}
