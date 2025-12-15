/*
1. Create a new js file in VS Code.
2. Ask the user to input a number.
3. Check if number is 0
1. If yes -> print out "You entered a
zero".
2. If no -> print out "You entered
something else".
4. Run your code and see if it
works.
*/

process.stdout.write("Enter a number: ");
process.stdin.on("data", function(inputFromUser){
    let number = Number(inputFromUser);

    if (number === 0){
        process.stdout.write("You entered zero");
    } else {
        process.stdout.write("You entered something else");
    }

    process.exit();
});

