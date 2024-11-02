
let gameStart = prompt("Welcome to rock, paper, scissors!");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Please input rock, paper, or scissors:").toLowerCase();
    return userInput;
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    alert(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        alert("It's a tie!");
        return "tie"; // Return "tie" to indicate a tie
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
        return "human"; // Return "human" to indicate a human win
    } else {
        alert("Computer wins!");
        return "computer"; // Return "computer" to indicate a computer win
    }
}

function playGame() {
    let humanScore = 0;  // Score variables are declared inside playGame
    let computerScore = 0;

    for (let i = 0; i < 5; i++) { // Loop to play 5 rounds
        const result = playRound(); // Call playRound and get the result

        // Update scores based on the result
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }

    // Declare the overall winner after 5 rounds
    if (humanScore > computerScore) {
        alert("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        alert("Computer is the overall winner!");
    } else {
        alert("It's an overall tie!");
    }
}

// Start the game
playGame();
