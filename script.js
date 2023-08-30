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
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
  let result = false;
  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");
  if (playerSelection === computerSelection) {
    resultDiv.textContent = "It's a draw!";
    scoreDiv.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
    return;
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
    // continue;
  }

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
  result ? playerWins++ : computerWins++;

  resultDiv.textContent = result
    ? `You win, ${playerSelection} beats ${computerSelection}!`
    : `You lose, ${computerSelection} beats ${playerSelection}!`;
  scoreDiv.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
  
  if (playerWins === 5 || computerWins === 5) {
    const winnerDiv = document.querySelector("#winner");
    if (playerWins === 5){
      winnerDiv.textContent = "PLAYER WINS";
    } else if (computerWins === 5) {
      winnerDiv.textContent = "COMPUTER WINS";
    }
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result = playRound(e.target.id, getComputerChoice());
  });
});



function game() {
  let playerWins = 0;
  let computerWins = 0;
  // for (i = 1; true; i++) {
  // if (playerWins === 5 || computerWins === 5) break;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
    // continue;
  }
  playRound(playerSelection, computerSelection) ? playerWins++ : computerWins++;
  console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
  // }
}
