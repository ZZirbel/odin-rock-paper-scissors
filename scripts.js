/* randomized computer choice */
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

let playerTotal = document.querySelector("#player-score");
let computerTotal = document.querySelector("#computer-score");
let playerFinalScore = document.querySelector("#player-final");
let computerFinalScore = document.querySelector("#computer-final");

/* 5 round gameplay using keyboard or buttons*/
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
      resetGame.style.display = "block";
    } else if (
      playerTotal.textContent.length < computerTotal.textContent.length
    ) {
      result.textContent = `You Lose!`;
      playerFinalScore.textContent = `${playerTotal.textContent.length}`;
      computerFinalScore.textContent = `${computerTotal.textContent.length}`;
      resetGame.style.display = "block";
    }
  }
}

/* gameplay with buttons */
const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const result = document.querySelector("#result");

/* gameplay using keyboard */
window.addEventListener("keypress", keyPlay);
window.addEventListener("keypress", newGame);

function keyPlay(e) {
  const key = document.querySelector(`.selection[data-key='${e.keyCode}']`);
  if (!key) return;
  this.textContent = key.textContent;
  playRound();
}

function newGame(e) {
  //reset all fields
  if (round !== 5) return;
  if (e.keyCode !== 110) return;
  playerTotal.textContent = "";
  computerTotal.textContent = "";
  playerFinalScore.textContent = "";
  computerFinalScore.textContent = "";
  result.textContent = "";
  round = 0;
  resetGame.style.display = "none";
}

/* start new game text to toggled */
const resetGame = document.querySelector("#new-game");
resetGame.style.display = "none";
