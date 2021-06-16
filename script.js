const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let selection = moves[Math.floor(Math.random() * 3)];
  return selection;
}

function playRound(playerSelection, computerSelection) {
  let playerMove =
    playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
  if (moves.indexOf(playerMove) < 0)
    return "Please select rock, paper or scissors";
  if (playerMove === computerSelection) return "Tie";
  if (playerMove === moves[0] && computerSelection === moves[1])
    return "You Lose! Paper beats Rock";
  if (playerMove === moves[0] && computerSelection === moves[2])
    return "You Win! Rock beats Scissors";
  if (playerMove === moves[1] && computerSelection === moves[0])
    return "You Win! Paper beats Rock";
  if (playerMove === moves[1] && computerSelection === moves[2])
    return "You Lose! Scissors beats Paper";
  if (playerMove === moves[2] && computerSelection === moves[0])
    return "You Lose! Rock beats Scissors";
  if (playerMove === moves[2] && computerSelection === moves[1])
    return "You Win! Scissors beats Paper";
}

function game() {
  let player = prompt("Choose your weapon!");
  console.log(playRound(player, computerPlay()));
}

game();
