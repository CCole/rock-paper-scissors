import { declareWinner } from "./game";

describe("declareWinner", () => {
  it("calls a Tie when moves are the same", () => {
    expect(declareWinner({ playerMove: "rock", computerMove: "rock" })).toBe(
      "Tie"
    );
    expect(declareWinner({ playerMove: "paper", computerMove: "paper" })).toBe(
      "Tie"
    );
    expect(
      declareWinner({ playerMove: "scissors", computerMove: "scissors" })
    ).toBe("Tie");
  });

  it("determines rock beats scissor", () => {
    expect(
      declareWinner({ playerMove: "rock", computerMove: "scissors" })
    ).toBe("PlayerWins");
    expect(
      declareWinner({ playerMove: "scissors", computerMove: "rock" })
    ).toBe("ComputerWins");
  });

  it("determines scissor beats paper", () => {
    expect(
      declareWinner({ playerMove: "scissors", computerMove: "paper" })
    ).toBe("PlayerWins");
    expect(
      declareWinner({ playerMove: "paper", computerMove: "scissors" })
    ).toBe("ComputerWins");
  });

  it("determines paper beats rock", () => {
    expect(declareWinner({ playerMove: "paper", computerMove: "rock" })).toBe(
      "PlayerWins"
    );
    expect(declareWinner({ playerMove: "rock", computerMove: "paper" })).toBe(
      "ComputerWins"
    );
  });
});
