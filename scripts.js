/* randomizes computers choice */
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

let playerTotal = document.querySelector("#player-score");
let computerTotal = document.querySelector("#computer-score");
let playerFinalScore = document.querySelector("#player-final");
let computerFinalScore = document.querySelector("#computer-final");

/* function called for each round of game - PlayerSelection variable worked best for prompting
player to input choice when called inside function */
let round = 0;

function playRound(playerSelection) {
  playerSelection = this.textContent;
  computerSelection = getComputerChoice();
  if (round < 5) {
    if (playerSelection === computerSelection) {
      result.textContent = `It's a tie! You both chose ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      playerTotal.textContent += "X";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      round++;
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      playerTotal.textContent += "X";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      round++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      playerTotal.textContent += "X";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      round++;
    } else {
      computerTotal.textContent += "X";
      result.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
      round++;
    }
  }
  if (round === 5) {
    if (playerTotal.textContent.length > computerTotal.textContent.length) {
      result.textContent = `You Win!`;
      playerFinalScore.textContent = `${playerTotal.textContent.length}`;
      computerFinalScore.textContent = `${computerTotal.textContent.length}`;
    } else if (
      playerTotal.textContent.length < computerTotal.textContent.length
    ) {
      result.textContent = `You Lose!`;
      playerFinalScore.textContent = `${playerTotal.textContent.length}`;
      computerFinalScore.textContent = `${computerTotal.textContent.length}`;
    }
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function keyPlay(e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  if (!key) return;
  this.textContent = key.textContent;
  playRound();
}

window.addEventListener("keypress", keyPlay);
window.addEventListener("keypress", newGame);

function newGame(e) {
  if (round !== 5) return;
  if (e.keyCode !== 110) return;
  playerTotal.textContent = "";
  computerTotal.textContent = "";
  playerFinalScore.textContent = "";
  computerFinalScore.textContent = "";
  result.textContent = "";
  round = 0;
}

const result = document.querySelector("#result");
