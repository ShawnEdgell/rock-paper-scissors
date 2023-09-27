const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

    const result = (playerIndex - computerIndex + 3) % 3;

    if (result === 0) {
        resultsDiv.textContent = "It's a tie! " + playerSelection + " equals " + computerSelection;
    } else if (result === 1) {
        resultsDiv.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        resultsDiv.textContent = "Computer wins! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    }

    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
    location.reload(); // This reloads the page
});