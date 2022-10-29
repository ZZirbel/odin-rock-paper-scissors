/* randomizes computers choice */
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

let playerTotal = document.querySelector("#player-score");
let computerTotal = document.querySelector("#computer-score");

/* function called for each round of game - PlayerSelection variable worked best for prompting
player to input choice when called inside function */
let round = 1;

function playRound(playerSelection) {
  playerSelection = this.textContent;
  computerSelection = getComputerChoice();
  if (round <= 5) {
    //create function to check round count at end of each play and immediately return final result if 5 (this does not do that now)
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
  } else {
    if (playerTotal.textContent.length > computerTotal.textContent.length) {
      result.textContent = `You Win!`;
    } else if (
      playerTotal.textContent.length < computerTotal.textContent.length
    ) {
      result.textContent = `You Lose!`;
    } else {
      result.textContent = `You Tied!`;
    }
  }
}

/* full game - first to 5 points wins */
/* function game() {
    playerTotal = 0;
    computerTotal = 0;
    while(playerTotal < 5 && computerTotal < 5) {
    playRound(getComputerChoice());
    console.log(`Your Total: ${playerTotal}`);
    console.log(`Computers Total: ${computerTotal}`);
    };
    if(playerTotal > computerTotal) {
        console.log(`Congratulations! You beat the computer by ${playerTotal - computerTotal}.`);
    }else if(playerTotal < computerTotal) {
        console.log(`Better luck next time! You lost to the computer by ${computerTotal - playerTotal}.`);
    }
} */

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

const result = document.querySelector("#result");
