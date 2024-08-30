const {
  randomChoice,
  winner,
} = require("./rock-paper-scissors-project-BONUS.js");

// Sets the value of Math.random() to a value that will output rock
beforeEach(() => {
  jest.spyOn(Math, "random").mockReturnValue(0.123456789);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

describe("randomChoice", () => {
  test("returns a string", () => {
    expect(typeof randomChoice()).toBe("string");
  });

  test("returns 'rock' when the random number is 0", () => {
    expect(randomChoice()).toBe("rock");
  });

  // Mock a value of 0.2
  test("returns 'paper' when the random number is 1'", () => {
    Math.random.mockReturnValueOnce(0.2);
    expect(randomChoice()).toBe("paper");
  });

  // Mock a value of 0.4
  test("returns 'scissors' when the random number is 2'", () => {
    Math.random.mockReturnValueOnce(0.4);
    expect(randomChoice()).toBe("scissors");
  });
});

describe("winner", () => {
  test("player1 is the winner for the correct combinations based on the rules", () => {
    expect(winner("paper", "rock")).toEqual("Player 1 Wins!");
    expect(winner("rock", "scissors")).toEqual("Player 1 Wins!");
    expect(winner("scissors", "paper")).toEqual("Player 1 Wins!");
  });

  test("When both arguments are the same value 'It's a tie' is returned", () => {
    expect(winner("paper", "paper")).toEqual("It's a tie!");
    expect(winner("scissors", "scissors")).toEqual("It's a tie!");
    expect(winner("rock", "rock")).toEqual("It's a tie!");
  });

  test("player2 is the winner for the correct combinations based on the rules", () => {
    expect(winner("scissors", "rock")).toEqual("Player 2 Wins!");
    expect(winner("paper", "scissors")).toEqual("Player 2 Wins!");
    expect(winner("rock", "paper")).toEqual("Player 2 Wins!");
  });
});
