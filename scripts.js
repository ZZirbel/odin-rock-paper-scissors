/* randomized computer choice */
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

let playerTotal = document.querySelector("#player-score.progress");
let computerTotal = document.querySelector("#computer-score.progress");
let playerFinalScore = document.querySelector("#player-final-score");
let computerFinalScore = document.querySelector("#computer-final-score");

/* gameplay using keyboard or buttons - first to 5 */
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  playerSelection = this.id;
  computerSelection = getComputerChoice();
  playerTotal.style.display = "block";
  computerTotal.style.display = "block";
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      result.textContent = `It's a tie! You both chose ${computerSelection}.`;
      playerImage.src = `images/${playerSelection}.png`;
      computerImage.src = `images/${computerSelection}.png`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
      playerImage.src = `images/${playerSelection}.png`;
      computerImage.src = `images/${computerSelection}.png`;
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
      playerImage.src = `images/${playerSelection}.png`;
      computerImage.src = `images/${computerSelection}.png`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      playerTotal.style.width = playerTotal.offsetWidth + 30 + "px";
      result.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
      playerImage.src = `images/${playerSelection}.png`;
      computerImage.src = `images/${computerSelection}.png`;
    } else {
      computerTotal.style.width = computerTotal.offsetWidth + 30 + "px";
      result.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
      computerScore++;
      playerImage.src = `images/${playerSelection}.png`;
      computerImage.src = `images/${computerSelection}.png`;
    }
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      result.textContent = `Congratulations, you've won!`;
      playerImage.src = "";
      computerImage.src = "";
      playerFinalScore.textContent = `${playerScore}`;
      computerFinalScore.textContent = `${computerScore}`;
      resetGame.style.display = "block";
    } else if (playerScore < computerScore) {
      result.textContent = `Sorry, better luck next time!`;
      playerImage.src = "";
      computerImage.src = "";
      playerFinalScore.textContent = `${playerScore}`;
      computerFinalScore.textContent = `${computerScore}`;
      resetGame.style.display = "block";
    }
  }
}

/* gameplay with buttons */
const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const result = document.querySelector("#result");

/* gameplay using keyboard */
window.addEventListener("keypress", keyPlay);
window.addEventListener("keypress", newGame);

function keyPlay(e) {
  const key = document.querySelector(`.choice-button[data-key='${e.keyCode}']`);
  if (!key) return;
  this.id = key.id;
  key.classList.add("button-active");
  playRound();
}

/* gameplay icons*/
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");

/* remove button animation once complete */
function removeKeyTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("button-active");
}

const keys = document.querySelectorAll(".choice-button");
keys.forEach((key) =>
  key.addEventListener("transitionend", removeKeyTransition)
);

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
