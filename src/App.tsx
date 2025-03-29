import { useState } from "react";
import { Move } from "./types/Move";
import { getRandomMove } from "./utils/game";
import "./App.css";

function App() {
  const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

  const [computerMove, setComputerMove] = useState<Move>(() =>
    getRandomMove(MOVES)
  );

  return <div className="App">Computer Move: {computerMove}</div>;
}

export default App;
