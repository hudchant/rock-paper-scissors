
// Variable to track user's score
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
        computerPick = 'rock'; // If random number is 0, the computerPick will be 'Rock'
    } else if (randomNum === 1) {
        computerPick = 'paper'; // If random number is 1, the computerPick will be 'Paper'
    } else {
        computerPick = 'scissors'; // If random number is 2, the computerPick will be 'Scissors'
    }

    // Return the computer's choice when the function is called
    return computerPick;
}

// Create function to get the user's choice
function getHumanChoice() {

    // Initialize variable to hold the user's choice
    let humanPick;

    // Prompt the user to enter their choice
    let humanPickInitial = prompt('Please enter rock, paper, or scissors.');

    // Make the user's prompt entry case insensitive
    humanPick = humanPickInitial.toLowerCase();

    // Return the user's choice when the function is called
    return humanPick;
}

// Create function to initiate playing a round of the game
function playRound(humanChoice, computerChoice) {

    // Use a switch to handle all user & computer cases and outcomes
    switch (humanChoice) {
        // If user and computer both choose 'rock', a tie is declared and no points are given
        case 'rock':
            if (computerChoice === 'rock') {
                console.log('Tie - no points awarded.');
                break;
                // If user chooses 'rock' and computer chooses 'paper', computer wins and gets a point
            } else if (computerChoice === 'paper') {
                console.log('You lose - paper beats rock.');
                computerScore += 1;
                break;
                // If user chooses 'rock' and computer chooses 'scissors', user wins and gets a point
            } else if (computerChoice === 'scissors') {
                console.log('You win - rock beats scissors.');
                humanScore += 1;
                break;
            }
        case 'paper':
            // If user and computer both choose 'paper', a tie is declared and no points are given
            if (computerChoice === 'paper') {
                console.log('Tie - no points awarded.');
                break;
                // If user chooses 'paper' and computer chooses 'rock', user wins and gets a point
            } else if (computerChoice === 'rock') {
                console.log('You win - paper beats rock.');
                humanScore += 1;
                break;
                // If user chooses 'paper' and computer chooses 'scissors', computer wins and gets a point
            } else if (computerChoice === 'scissors') {
                console.log('You lose - scissors beats paper.');
                computerScore += 1;
                break;
            }
        case 'scissors':
            // If user and computer both choose 'scissors', a tie is declared and no points are given
            if (computerChoice === 'scissors') {
                console.log('Tie - no points awarded.');
                break;
                // If user chooses 'scissors' and computer chooses 'rock', computer wins and gets a point
            } else if (computerChoice === 'rock') {
                console.log('You lose - rock beats scissors.');
                computerScore += 1;
                break;
                // If user chooses 'scissors' and computer chooses 'paper', user wins and gets a point
            } else if (computerChoice === 'paper') {
                console.log('You win - scissors beats paper.');
                humanScore += 1;
                break;
            }
        default:
            console.log('Game error. Please try again.');
    }
}

// Create function to initiate playing five rounds of the game and declare a winner at the end
function playGame() {

    // Loop until all five rounds are played
    for (let i = 1; i <= 5; i++) {

        // Call the getHumanChoice function in all five rounds to get the user's choices
        const humanSelection = getHumanChoice();
        // Call the getComputerChoice function in all five rounds to get the computer's choices
        const computerSelection = getComputerChoice();
        // Call the playRound function to initiate one whole round of gameplay
        playRound(humanSelection, computerSelection);

        // Log user's choice, computer's choice, and both scores to the console at the end of each round
        console.log('Your Choice:', `"${humanSelection}"`, 'Computer Choice:', `"${computerSelection}"`,
            'Human Score:', `"${humanScore}"`, 'Computer Score:', `"${computerScore}"`
        );

    }

    // Declare a winner at the end of all five rounds
    humanScore > computerScore ? console.log('You win the game!') : console.log('Computer wins the game.');
}

// Call the playGame function to initiate gameplay
playGame();




