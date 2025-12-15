/* 1.1 Task 1: Number Guessing Game

Create a simple game in which the user has to guess the secret number. The game has the following
functionality:
1. The program asks the user to enter a number.
2. Set the secret number to be the entered number plus one.
3. Print whether the user won or not.
*/

// Secret number the user has to guess
const secretNumber = 7;

// Prompt the user to enter a number
process.stdout.write("Enter a number: ");

// Listen for input from the terminal
process.stdin.on("data", function (inputFromUser)
{
    // Convert the user input (Buffer) to a number
    let userNumber = Number(inputFromUser);

    // Compare the user's number with the secret number
    if (userNumber === secretNumber) {
        // Numbers match: user wins
        process.stdout.write("You won! The secret number was " + secretNumber + ".\n");
    } else {
        // Numbers do not match: user loses
        process.stdout.write("You lost! The secret number was " + secretNumber + ".\n");
    }

    // Terminate the program
    process.exit();
}
);