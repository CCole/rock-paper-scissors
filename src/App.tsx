import { useState } from "react";
import { Move } from "./types/Move";
import { getRandomMove } from "./utils/game";
import "./App.css";

function App() {
  const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

  const [computerMove, setComputerMove] = useState<Move>(() =>
    getRandomMove(MOVES)
  );
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div>Computer Move: {computerMove}</div>
      <div>Player Move: {playerMove ?? "awaiting player move"} </div>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 border rounded"
          onClick={() => setPlayerMove("rock")}
        >
          Rock
        </button>
        <button
          className="px-4 py-2 border rounded"
          onClick={() => setPlayerMove("paper")}
        >
          Paper
        </button>
        <button
          className="px-4 py-2 border rounded"
          onClick={() => setPlayerMove("scissors")}
        >
          Scissors
        </button>
      </div>
    </div>
  );
}

export default App;
