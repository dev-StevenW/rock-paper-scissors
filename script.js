const moves = ["Rock", "Paper", "Scissors"];
const playerScore = document.getElementById("playerScore");
const cpuScore = document.getElementById("cpuScore");
const results = document.getElementById("results");
const playRock = document.getElementById("rock");
const winOrLose = document.getElementById("game-over");
const gameBoard = document.getElementById("gameBoard");

let pScore = 0;
let cScore = 0;

resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.addEventListener("click", resetGame);
gameBoard.appendChild(resetButton);

playRock.addEventListener("click", () => game("Rock"));

const playPaper = document.getElementById("paper");
playPaper.addEventListener("click", () => game("Paper"));

const playScissors = document.getElementById("scissors");
playScissors.addEventListener("click", () => game("Scissors"));

function computerPlay() {
  let selection = moves[Math.floor(Math.random() * 3)];
  return selection;
}

function updateScore() {
  if (pScore == 5) gameOver("win");

  if (cScore == 5) gameOver("lose");
  playerScore.innerText = `${pScore}`;
  cpuScore.innerText = `${cScore}`;
}

function gameOver(condition) {
  if (condition == "win") winOrLose.innerText = "Congratulation, you are win!";
  if (condition == "lose") winOrLose.innerText = "Too bad, you lose!";
}

function resetGame() {
  pScore = 0;
  cScore = 0;
  updateScore();
  results.innerText = "";
  winOrLose.innerText = "";
}

function playRound(playerMove, computerSelection) {
  if (moves.indexOf(playerMove) < 0)
    results.innerText = "Please select Rock, Paper or Scissors";

  if (playerMove === computerSelection) return 0;

  if (playerMove === moves[0] && computerSelection === moves[1]) {
    return 2;
  }
  if (playerMove === moves[0] && computerSelection === moves[2]) {
    return 1;
  }
  if (playerMove === moves[1] && computerSelection === moves[0]) {
    return 1;
  }
  if (playerMove === moves[1] && computerSelection === moves[2]) {
    return 2;
  }
  if (playerMove === moves[2] && computerSelection === moves[0]) {
    return 2;
  }
  if (playerMove === moves[2] && computerSelection === moves[1]) {
    return 1;
  }
}

function game(playerSelection) {
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult == 0) {
    results.innerText = "Tie";
    updateScore();
  }

  if (roundResult == 1) {
    pScore += 1;
    results.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    updateScore();
  }

  if (roundResult == 2) {
    cScore += 1;
    results.innerText = `You Lose! ${playerSelection} gets beaten by ${computerSelection}`;
    updateScore();
  }
}
