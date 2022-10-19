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

/* single round of rock, paper, scissors*/
/* prompt player for selection, take player's selection (case-insensitive) and computer's selection as input
set conditions to decide who wins
declare whether payer wins or loses and what item beat what */
function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt('What do you choose - Rock, Paper, or Scissors?', '');
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors'){
        if(playerSelection === computerSelection) {
            return `It's a tie! You both chose ${computerSelection}.`;
        } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return `You won! ${playerSelection} beats ${computerSelection}.`;
        } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return `You won! ${playerSelection} beats ${computerSelection}.`;
        } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
            return `You won! ${playerSelection} beats ${computerSelection}.`;
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}.`
        }

    } else {
        return `Your choice was invalid. Try Again.`
    }
}

/* game plays for 5 rounds - keeps score and declares winner at the the end */
/* add one point to winners overall score per round
if player enters invalid choice restart round
declare winner after 5 successful rounds */


