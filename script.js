
// Variable to track human player's score
let humanScore = 0;

// Variable to track computer's score
let computerScore = 0;


// Create function to get the computer's choice
function getComputerChoice() {

    // Declare variable to eventually hold the value chosen by the computer
    let computerPick;

    // Get a random number between 0 and 3. Result will be either 0, 1, or 2.
    let randomNum = Math.floor(Math.random() * 3);

    // Return a string response of rock, paper, or scissors deprending on the populated random number
    if (randomNum === 0) {
        computerPick = 'rock'; // If random number is 0, the compChoice will be 'Rock'
    } else if (randomNum === 1) {
        computerPick = 'paper'; // If random number is 1, the compChoice will be 'Paper'
    } else {
        computerPick = 'scissors'; // If random number is 2, the compChoice will be 'Scissors'
    }

    // Return the computer's choice when the function is called
    return computerPick;
}

// Create function to get the human player's choice
function getHumanChoice() {

    // Initialize variable to hold the human player's choice
    let humanPick;

    // Prompt the user to enter their choice
    let humanPickInitial = prompt('Please enter rock, paper, or scissors.');
    humanPick = humanPickInitial.toLowerCase();

    return humanPick;
}

// Create function to initiate playing a round of the game
function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'rock') {
                console.log('It\'s a tie! Play another round.');
                break;
            } else if (computerChoice === 'paper') {
                console.log('You lose! Paper beats rock.');
                computerScore += 1;
                break;
            } else if (computerChoice === 'scissors') {
                console.log('You win! Rock beats scissors.');
                humanScore += 1;
                break;
            }
        case 'paper':
            if (computerChoice === 'paper') {
                console.log('It\'s a tie! Play another round.');
                break;
            } else if (computerChoice === 'rock') {
                console.log('You win! Paper beats rock.');
                humanScore += 1;
                break;
            } else if (computerChoice === 'scissors') {
                console.log('You lose! Scissors beat paper.');
                computerScore += 1;
                break;
            }
        case 'scissors':
            if (computerChoice === 'scissors') {
                console.log('It\'s a tie! Play another round.');
                break;
            } else if (computerChoice === 'rock') {
                console.log('You lose! Rock beats scissors.');
                computerScore += 1;
                break;
            } else if (computerChoice === 'paper') {
                console.log('You win! Scissors beat paper.');
                humanScore += 1;
                break;
            }
        default:
            console.log('Game error. Please try again.');
    }

    console.log('Human Choice:', `"${humanChoice}"`, 'Computer Choice:', `"${computerChoice}"`, 
        'Human Score:', `"${humanScore}"`, 'Computer Score:', `"${computerScore}"`
    );
}

// function playGame() {

// }


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);






