import { useState } from "react";
import { Move, MOVES } from "./types/Move";
import { getRandomMove } from "./utils/game";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [computerMove, setComputerMove] = useState<Move>(() =>
    getRandomMove(MOVES)
  );
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div>Computer Move: {computerMove}</div>
      <div>Player Move: {playerMove ?? "awaiting player move"} </div>

      {playerMove ?? (
        <div className="flex space-x-2">
          <Button
            className="px-4 py-2 border rounded"
            onClick={() => setPlayerMove("rock")}
          >
            Rock
          </Button>
          <Button
            className="px-4 py-2 border rounded"
            onClick={() => setPlayerMove("paper")}
          >
            Paper
          </Button>
          <Button
            className="px-4 py-2 border rounded"
            onClick={() => setPlayerMove("scissors")}
          >
            Scissors
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
