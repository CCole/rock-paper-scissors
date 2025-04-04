import { useState } from "react";
import { Move, MOVES } from "./types/Move";
import { getRandomElement, declareWinner } from "./utils/game";
import Button from "./components/Button";
import { Messages } from "./types/Message";
import "./App.css";

function App() {
  const [computerMove, setComputerMove] = useState<Move>(() =>
    getRandomElement(MOVES)
  );
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  const resetGame = () => {
    setPlayerMove(null);
    setComputerMove(getRandomElement(MOVES));
  };

  return (
    <div
      id="game-container"
      role="main"
      className="min-h-screen flex flex-col items-center justify-center space-y-4"
    >
      {playerMove && <div>Computer Move: {computerMove}</div>}
      <div>Player Move: {playerMove ?? "awaiting player move"} </div>

      {playerMove ? (
        <div>
          {
            Messages[
              declareWinner({
                playerMove,
                computerMove,
              })
            ]
          }
          <Button className="px-4 py-2 border rounded" onClick={resetGame}>
            New Game
          </Button>
        </div>
      ) : (
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
