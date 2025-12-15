// Prompt the user to enter a number
process.stdout.write("Enter a number: ");

// Wait for the user to type something in the console
process.stdin.on("data", function(inputFromUser)
{
    // Convert user input (Buffer) to a number
    let userNumber = Number(inputFromUser);

    // Define a fixed secret number
    let secretNumber = 25;

    // Addition
    console.log(userNumber +  " + "  + secretNumber + " = "  + (userNumber + secretNumber) + "\n" );

    // Subtraction
    console.log(userNumber +  " - " + secretNumber + " = "  + (userNumber - secretNumber) + "\n" );

    // Multiplication
    console.log(userNumber +  " * " + secretNumber + " = "  + (userNumber * secretNumber) + "\n" );

    // Division
    console.log(userNumber +  " / " + secretNumber + " = "  + (userNumber / secretNumber) + "\n" );

    // Modulo (remainder)
    console.log(userNumber +  " % " + secretNumber + " = "  + (userNumber % secretNumber) + "\n" );

    // Increment by 1 and print result
    console.log(userNumber +  " ++ " + " = "  + (++userNumber) + "\n" );

    // Decrement by 1 and print result
    console.log(userNumber +  " -- " + " = "  + (--userNumber) + "\n" );

    // Terminate the program
    process.exit();
}
);
