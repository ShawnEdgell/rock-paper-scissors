const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        resultsDiv.textContent = "It's a tie! " + playerSelection + " equals " + computerSelection;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultsDiv.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        resultsDiv.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    }

    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
        resultsDiv.textContent = "Congratulations! You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Sorry, you lose the game.";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.textContent = "Player: 0 - Computer: 0";
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});