function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices.at(Math.floor(Math.random() * choices.length));
}

function getPlayerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let playerSelection = "";
  do {
    playerSelection = prompt("RPS?");
  } while (!(choices.includes(playerSelection) && playerSelection));

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let result = false;

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    result = computerSelection === "paper" ? (result = false) : (result = true);
  }

  if (playerSelection === "paper") {
    result =
      computerSelection === "scissors" ? (result = false) : (result = true);
  }

  if (playerSelection === "scissors") {
    result = computerSelection === "rock" ? (result = false) : (result = true);
  }

  if (result) {
    console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
  } else {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
  }

  return result;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (i = 1; true; i++) {
    if (playerWins === 5 || computerWins === 5) break;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      console.log("It's a draw!");
      console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
      continue;
    }
    playRound(playerSelection, computerSelection)
      ? playerWins++
      : computerWins++;
    console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
  }
}
