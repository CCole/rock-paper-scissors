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
    <div className="App">
      <div>Computer Move: {computerMove}</div>
      <div>Player Move: {playerMove ?? "awaiting player move"} </div>
      <button onClick={() => setPlayerMove("rock")}>Rock</button>
      <button onClick={() => setPlayerMove("paper")}>Paper</button>
      <button onClick={() => setPlayerMove("scissors")}>Rock</button>
    </div>
  );
}

export default App;
