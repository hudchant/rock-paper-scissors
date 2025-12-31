
// User score
let playerScore = 0;

// Computer score
let computerScore = 0;

// Set to false by default
let gameOver = false;

// Get computer's choice
function getComputerChoice() {

    // Exit function when the game is over
    if (gameOver) return;

    let computerPick;

    // Get a random whole number - (either 0, 1, or 2)
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        computerPick = 'rock'; // 0 returns 'rock'
    } else if (randomNum === 1) {
        computerPick = 'paper'; // 1 returns 'paper'
    } else {
        computerPick = 'scissors'; // 2 returns 'scissors'
    }
    return computerPick;
}

// Initiate a round of gameplay
function playRound(choice) {

    // Exit function when the game is over
    if (gameOver) return;

    const computerChoice = getComputerChoice(); // Get the computer's choice

    const container = document.querySelector('.container'); // Reference to container div

    const result = document.querySelector('.result'); // Reference to result div

    let runningScore = document.querySelector('.runningScore');
    if (!runningScore) {
        runningScore = document.createElement('div'); // Create score div if it doesn't already exist
        runningScore.classList.add('runningScore'); // Give score div a class name for reference
        container.appendChild(runningScore); // Append running score to parent div
    }

    const finalScore = document.createElement('div'); // Display final score when game ends

    const gameError = document.createElement('div'); // Display error, if one occurs during gameplay


    // Determine round winner and distribute points accordingly
    switch (choice) {
        case 'rock':
            if (computerChoice === 'rock') {
                // It's a tie. Score remains the same. 
            } else if (computerChoice === 'paper') {
                computerScore += 1; // Computer wins, increment score by 1
            } else if (computerChoice === 'scissors') {
                playerScore += 1; // Player wins, increment score by 1
            }
            break;
        case 'paper':
            if (computerChoice === 'paper') {
                // It's a tie. Score remains the same. 
            } else if (computerChoice === 'rock') {
                playerScore += 1; // Player wins, increment score by 1
            } else if (computerChoice === 'scissors') {
                computerScore += 1; // Computer wins, increment score by 1
            }
            break;
        case 'scissors':
            if (computerChoice === 'scissors') {
                // It's a tie. Score remains the same. 
            } else if (computerChoice === 'rock') {
                computerScore += 1; // Computer wins, increment score by 1
            } else if (computerChoice === 'paper') {
                playerScore += 1; // Player wins, increment score by 1
            }
            break;
        default:
            gameError.textContent = 'Game error. Please try again.';
            container.appendChild(gameError); // Display error message
            return; // Exit the game
    }

    // Running score message
    runningScore.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

    // Round results message
    result.textContent = `You selected "${choice}." The computer selected "${computerChoice}."`;

    if (playerScore === 5) {
        finalScore.textContent = 'Congratulations, you win the game!';
        container.appendChild(finalScore); // Display final score message when player reaches 5 points first
        gameOver = true; // Set gameOver variable to 'true' to exit function and end game

    } else if (computerScore === 5) {
        finalScore.textContent = 'Computer wins the game.';
        container.appendChild(finalScore); // Display final score message when computer reaches 5 points first
        gameOver = true; // Set gameOver variable to 'true' to exit function and end game
    }
}

// Listen for button clicks
document.addEventListener('DOMContentLoaded', function () {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set choice variable to button's string id to record user's choice
            const choice = button.id;
            // Call playRound function to start game upon user click 
            playRound(choice);
        });
    });
});




