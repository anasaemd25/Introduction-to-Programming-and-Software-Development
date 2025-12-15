/* Create a simple game in which the user has to guess the secret number. The game has the following
functionality:
1. The program asks the user to enter a number.
2. Set the secret number to be the entered number plus one.
3. Print whether the user won or not.
*/

process.stdout.write("Enter a number: ");

process.stdin.on("data", function (inputFromUser)
{
    let secretNumber = Number(inputFromUser) + 1;
    process.stdout.write("The secret number is: " + secretNumber + "\n");
    process.exit();
});


