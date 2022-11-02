/* randomized computer choice */
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

let playerTotal = document.querySelector("#player-score.progress");
let computerTotal = document.querySelector("#computer-score.progress");
let playerFinalScore = document.querySelector("#player-choice");
let computerFinalScore = document.querySelector("#computer-choice");

/* gameplay using keyboard or buttons - first to 5 */
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  playerSelection = this.textContent;
  computerSelection = getComputerChoice();
  playerTotal.style.display = "block";
  computerTotal.style.display = "block";
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      result.textContent = `It's a tie! You both chose ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
    } else {
      computerTotal.style.width = computerTotal.offsetWidth + 30 + "px";
      result.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
      computerScore++;
    }
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      result.textContent = `You Win!`;
      playerFinalScore.textContent = `${playerScore}`;
      computerFinalScore.textContent = `${computerScore}`;
      resetGame.style.display = "block";
    } else if (playerScore < computerScore) {
      result.textContent = `You Lose!`;
      playerFinalScore.textContent = `${playerScore}`;
      computerFinalScore.textContent = `${computerScore}`;
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

/* reset game */
function newGame(e) {
  if (playerScore !== 5 && computerScore !== 5) return;
  if (e.keyCode !== 110) return;
  playerTotal.style.display = "none";
  computerTotal.style.display = "none";
  playerTotal.style.width = "0px";
  computerTotal.style.width = "0px";
  playerFinalScore.textContent = "";
  computerFinalScore.textContent = "";
  playerScore = 0;
  computerScore = 0;
  result.textContent = "";
  resetGame.style.display = "none";
}

/* start new game text to toggle */
const resetGame = document.querySelector("#new-game");
resetGame.style.display = "none";
