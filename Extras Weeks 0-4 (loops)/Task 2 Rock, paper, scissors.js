/*
Task 2: Rock, paper, scissors
Create a simple rock, paper, scissors game where the user can play against the computer.
Write basic code, no external modules, no advanced syntax.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let userScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const rounds = 5;
let currentRound = 1;

function playRound() {
    if (currentRound > rounds) {
        console.log("Final Score:");
        console.log(`You: ${userScore}, Computer: ${computerScore}`);
        if (userScore > computerScore) {
            console.log("You are the overall winner!");
        } else if (computerScore > userScore) {
            console.log("Computer is the overall winner!");
        } else {
            console.log("The game is a tie overall!");
        }
        readline.close();
        return;
    }

    readline.question(`Round ${currentRound} - Enter rock, paper, or scissors: `, userInput => {
        const userChoice = userInput.toLowerCase();
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Computer chose: ${computerChoice}`);

        if (userChoice === computerChoice) {
            console.log("It's a tie!");
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                    (userChoice === 'paper' && computerChoice === 'rock') ||
                    (userChoice === 'scissors' && computerChoice === 'paper')) {
            console.log("You win this round!");
            userScore++;
        } else if (choices.includes(userChoice)) {
            console.log("Computer wins this round!");
            computerScore++;
        } else {
            console.log("Invalid choice, round forfeited.");
        }
        console.log(`Score - You: ${userScore}, Computer: ${computerScore}\n`);
        currentRound++;
        playRound();
    });
}

playRound();
