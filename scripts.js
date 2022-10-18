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

/* single round of rock, paper, scissors - player selects (case-insensitive), computer selects, declare winner */
/* game plays for 5 rounds - keeps score and declares winner at the the end */
