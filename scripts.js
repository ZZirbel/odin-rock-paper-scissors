
/* randomizes computers choice */ 
function getComputerChoice() {
    const choices = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors'
    };
    return choices[Math.ceil(Math.random() * 3)];
}

let playerTotal = 0;
let computerTotal = 0;

/* function called for each round of game - PlayerSelection variable worked best for prompting
player to input choice when called inside function */
function playRound(computerSelection) {
    let playerSelection = prompt('What do you choose - Rock, Paper, or Scissors?', 'Choose one');
 playerSelection = playerSelection.toLowerCase();
 playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors'){
        if(playerSelection === computerSelection) {
            console.log(`It's a tie! You both chose ${computerSelection}.`);
        } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerTotal += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerTotal += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerTotal += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else {
            computerTotal += 1;
            console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
        }
    } else {
        console.log(`Your choice was invalid. Try Again.`);
    }
    
}

/* full game - first to 5 points wins */
function game() {
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
}
