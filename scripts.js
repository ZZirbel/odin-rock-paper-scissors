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

/* prompt player selection and change to first letter casing */
function getPlayerChoice() {
    let playerChoice = prompt('What do you choose - Rock, Paper, or Scissors?', '');
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}

/* single round of rock, paper, scissors*/
/* player and computer total points variables */
let playerTotal = 0;
let computerTotal = 0;

/* prompt player for selection, take player's selection (case-insensitive) and computer's selection as input
set conditions to decide who wins
gives winner a point
declare whether payer wins or loses and what item beat what */
function playRound(playerSelection, computerSelection) {
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

/* game plays for 5 rounds - keeps score and declares winner at the the end */
/* reset scores at start of game
loop through 5 rounds of rock, paper, scissors calling playRound function
output string declaring overall winner and total player won or lost by */

