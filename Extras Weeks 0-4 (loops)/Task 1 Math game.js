/*
Task 1: Math game
Create a simple game that will produce math questions. Features can include the following:
• Create math tasks with random numbers (check Math.random())
• Check answer
• Score count
• When score of 10 is reached, program is terminated
• When maximum number of wrong answers is reached program is terminated
• Have the operator (+, -, *, /) to be randomized
• Ask for difficulty level (level 1 numbers 0-10, level2 numbers 0-100..)
Write basic code, no external modules, no advanced syntax.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let wrongAnswers = 0;
const maxWrongAnswers = 3;
const targetScore = 10;
const operators = ['+', '-', '*', '/'];

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   

// Function to generate a random math question based on difficulty level
function generateQuestion(level) {
    let num1, num2, operator;
    const maxNumber = level === 1 ? 10 : level === 2 ? 100 : 1000;
    num1 = getRandomInt(0, maxNumber);
    num2 = getRandomInt(1, maxNumber); // Avoid division by zero
    operator = operators[getRandomInt(0, operators.length - 1)];
    return { num1, num2, operator };
}       
// Function to calculate the correct answer
function calculateAnswer(num1, num2, operator) {    
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return parseFloat((num1 / num2).toFixed(2)); // Round to 2 decimal places
    }
}
// Main game loop
readline.question('Choose difficulty level (1: 0-10, 2: 0-100, 3: 0-1000): ', level => {
    level = parseInt(level);
    if (![1, 2, 3].includes(level)) {   
        console.log('Invalid level. Please restart the game and choose 1, 2, or 3.');
        readline.close();
        return;
    }   
    function askQuestion() {    
        const { num1, num2, operator } = generateQuestion(level);
        const correctAnswer = calculateAnswer(num1, num2, operator);    
        readline.question(`What is ${num1} ${operator} ${num2}? `, answer => {
            if (parseFloat(answer) === correctAnswer) {
                score++;
                console.log('Correct! Your score is now:', score);
            } else {
                wrongAnswers++;
                console.log(`Wrong! The correct answer was ${correctAnswer}. You have ${maxWrongAnswers - wrongAnswers} attempts left.`);
            }   
            if (score >= targetScore) {
                console.log('Congratulations! You reached the target score of', targetScore);
                readline.close();
            } else if (wrongAnswers >= maxWrongAnswers) {
                console.log('Game over! You reached the maximum number of wrong answers.');
                readline.close();
            }
            else {
                askQuestion();
            }   
        });
    }
    askQuestion();
});

