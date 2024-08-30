const {
  randomNumber,
  pickWinner,
} = require("./rock-paper-scissors-project.js");

// Sets the value of Math.random() to a value that will output rock
beforeEach(() => {
  jest.spyOn(Math, "random").mockReturnValue(0.123456789);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

describe("randomChoice", () => {
  test("returns a string", () => {
    expect(typeof randomNumber()).toBe("string");
  });

  test("returns 'rock' when the random number is 0", () => {
    expect(randomNumber()).toBe("rock");
  });

  // Mock a value of 0.5
  test("returns 'paper' when the random number is 1'", () => {
    Math.random.mockReturnValueOnce(0.5);
    expect(randomNumber()).toBe("paper");
  });

  // Mock a value of 0.9
  test("returns 'scissors' when the random number is 2'", () => {
    Math.random.mockReturnValueOnce(0.9);
    expect(randomNumber()).toBe("scissors");
  });
});

describe("winner", () => {
  test("player1 is the winner for the correct combinations based on the rules", () => {
    expect(pickWinner("paper", "rock")).toEqual("Player 1 Wins!");
    expect(pickWinner("rock", "scissors")).toEqual("Player 1 Wins!");
    expect(pickWinner("scissors", "paper")).toEqual("Player 1 Wins!");
  });

  test("When both arguments are the same value 'It's a tie' is returned", () => {
    expect(pickWinner("paper", "paper")).toEqual("It's a tie!");
    expect(pickWinner("scissors", "scissors")).toEqual("It's a tie!");
    expect(pickWinner("rock", "rock")).toEqual("It's a tie!");
  });

  test("player2 is the winner for the correct combinations based on the rules", () => {
    expect(pickWinner("scissors", "rock")).toEqual("Player 2 Wins!");
    expect(pickWinner("paper", "scissors")).toEqual("Player 2 Wins!");
    expect(pickWinner("rock", "paper")).toEqual("Player 2 Wins!");
  });
});
