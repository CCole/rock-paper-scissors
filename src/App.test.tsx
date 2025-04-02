import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main game container", () => {
  render(<App />);
  const gameContainer = screen.getByRole("main");
  expect(gameContainer).toBeInTheDocument();
});
