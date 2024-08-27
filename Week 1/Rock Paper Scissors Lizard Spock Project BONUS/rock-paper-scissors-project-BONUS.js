//Rock, Paper, Scissors Bonus Challenges
// Stretch: Rock, Paper, Scissors, Lizard, Spock
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Imports the built-in readline module provided by Node.js.
var readline = require("readline/promises");
var randomChoice = function () {
    var choice = Math.floor(Math.random() * 5);
    if (choice === 0)
        return "rock";
    if (choice === 1)
        return "paper";
    if (choice === 2)
        return "scissors";
    if (choice === 3)
        return "spock";
    return "lizard";
};
var winner = function (player1Choice, player2Choice) {
    if ((player1Choice !== "rock" &&
        player1Choice !== "paper" &&
        player1Choice !== "scissors" &&
        player1Choice !== "lizard" &&
        player1Choice !== "spock") ||
        (player2Choice !== "rock" &&
            player2Choice !== "paper" &&
            player2Choice !== "scissors" &&
            player2Choice !== "lizard" &&
            player2Choice !== "spock")) {
        return "Invalid input. Please try again.";
    }
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    }
    if ((player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "rock" && player2Choice === "lizard") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "paper" && player2Choice === "spock") ||
        (player1Choice === "scissors" && player2Choice === "paper") ||
        (player1Choice === "scissors" && player2Choice === "lizard") ||
        (player1Choice === "spock" && player2Choice === "rock") ||
        (player1Choice === "spock" && player2Choice === "scissors") ||
        (player1Choice === "lizard" && player2Choice === "paper") ||
        (player1Choice === "lizard" && player2Choice === "spock")) {
        return "Player 1 Wins!";
    }
    if ((player2Choice === "rock" && player1Choice === "scissors") ||
        (player2Choice === "rock" && player1Choice === "lizard") ||
        (player2Choice === "paper" && player1Choice === "rock") ||
        (player2Choice === "paper" && player1Choice === "spock") ||
        (player2Choice === "scissors" && player1Choice === "paper") ||
        (player2Choice === "scissors" && player1Choice === "lizard") ||
        (player2Choice === "spock" && player1Choice === "rock") ||
        (player2Choice === "spock" && player1Choice === "scissors") ||
        (player2Choice === "lizard" && player1Choice === "paper") ||
        (player2Choice === "lizard" && player1Choice === "spock")) {
        return "Player 2 Wins!";
    }
    return "ERROR: Should never happen!";
};
// class GameState {
//     player1choice: string;
//     player2choice: string;
//     result: string;
//     round: number;
//     player1score: number;
//     player2score: number;
//     constructor(player1choice: string,
//       player2choice: string,
//       result: string,
//       round: number,
//       player1score: number,
//       player2score: number) {
//         this.player1choice = player1choice;
//         this.player2choice = player2choice;
//         this.result = result;
//         this.round = round;
//         this.player1score = player1score;
//         this.player2score = player2score;
//       }
// }
var score = function (gameObject) {
    if (gameObject.result.includes("1")) {
        gameObject.player1score += 1;
    }
    if (gameObject.result.includes("2")) {
        gameObject.player2score += 1;
    }
    if (gameObject.result.includes("tie")) {
        return;
    }
};
// Creates a readline interface that we can use in our code.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function handleUserInput(userInput, gameState) {
    var player2 = randomChoice();
    gameState.result = winner(userInput, player2);
    console.log("Player 1 chose: ", userInput);
    console.log("Player 2 chose: ", player2);
    console.log(gameState.result);
    score(gameState);
    console.log("Round: ".concat(gameState.round, " \n Player 1 (You): ").concat(gameState.player1score, "\n Player 2: ").concat(gameState.player2score));
}
function askQuestions() {
    return __awaiter(this, void 0, void 0, function () {
        var gameState, i, userAnswer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameState = {
                        player1choice: '',
                        player2choice: '',
                        result: '',
                        round: 0,
                        player1score: 0,
                        player2score: 0,
                    };
                    i = 10;
                    _a.label = 1;
                case 1:
                    if (!(i > 0)) return [3 /*break*/, 6];
                    userAnswer = void 0;
                    if (!(gameState.result === "Invalid input. Please try again.")) return [3 /*break*/, 3];
                    return [4 /*yield*/, rl.question("Please make a choice - rock/paper/scissors/lizard/spock? - ")];
                case 2:
                    userAnswer = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    i -= 1;
                    return [4 /*yield*/, rl.question("Please make a choice - rock/paper/scissors/lizard/spock? - ")];
                case 4:
                    userAnswer = _a.sent();
                    gameState.round += 1;
                    _a.label = 5;
                case 5:
                    handleUserInput(userAnswer, gameState);
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
askQuestions();
module.exports = { randomChoice: randomChoice, winner: winner };
