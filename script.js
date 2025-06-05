
// Variable to track human player's score
let humanScore = 0;

// Variable to track computer's score
let computerScore = 0;


// Create function to get the computer's choice
function getComputerChoice() {

    // Declare variable to eventually hold the value chosen by the computer
    let compChoice;

    // Get a random number between 0 and 3. Result will be either 0, 1, or 2.
    let randomNum = Math.floor(Math.random() * 3);

    // Return a string response of rock, paper, or scissors deprending on the populated random number
    if (randomNum === 0) {
        compChoice = 'Rock'; // If random number is 0, the compChoice will be 'Rock'
    } else if (randomNum === 1) {
        compChoice = 'Paper'; // If random number is 1, the compChoice will be 'Paper'
    } else {
        compChoice = 'Scissors'; // If random number is 2, the compChoice will be 'Scissors'
    }

    // Return the computer's choice when the function is called
    return compChoice
}

// Create function to get the human player's choice
function getHumanChoice() {

    // Initiate variable to hold the human player's choice
    let humanChoice = prompt("Please enter Rock, Paper, or Scissors.");
}





