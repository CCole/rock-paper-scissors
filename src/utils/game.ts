import { Move, MOVES } from "../types/Move";
import { MessageKeys } from "../types/Message";

export function getRandomMove(moves: readonly Move[]): Move {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

export function declareWinner({
  computerMove,
  playerMove,
}: {
  computerMove: Move;
  playerMove: Move;
}): MessageKeys {
  const playerIndex = MOVES.indexOf(playerMove);
  const computerIndex = MOVES.indexOf(computerMove);

  if (playerIndex === computerIndex) {
    return "Tie";
  }

  const diff = (playerIndex - computerIndex + MOVES.length) % MOVES.length;

  return diff === 1 ? "PlayerWins" : "ComputerWins";
}
