/* player vs computer in rock, paper, scissors */

/* computer randomly chooses rock, paper, or scissors */ 
function getComputerChoice() {
    const choices = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors'
    };
    return choices[Math.ceil(Math.random() * 3)];
}

/* player and computer total points variables */
let playerTotal = 0;
let computerTotal = 0;

/* single round of rock, paper, scissors 
    - take computer's selection as input
    - prompt player for selection
    - decide who wins
    - add a point to winners total points
    - declare whether player wins or loses and what item beat what */
function playRound(computerSelection) {
    let playerSelection = prompt('What do you choose - Rock, Paper, or Scissors?', 'Choose one');
 playerSelection = playerSelection.toLowerCase();
 playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors'){
        if(playerSelection === computerSelection) {
            return console.log(`It's a tie! You both chose ${computerSelection}.`);
        } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerTotal += 1;
            return console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerTotal += 1;
            return console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerTotal += 1;
            return console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        } else {
            computerTotal += 1;
            return console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
        }
    } else {
        return console.log(`Your choice was invalid. Try Again.`);
    }
    
}

/* game plays until player or computer reach 5 points and declares winner at the the end
    - reset scores at start of game
    - loop through playRound function
    - output string declaring overall winner and total that player won or lost by */
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
