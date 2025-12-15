// Prompt the user to enter a distance in miles
process.stdout.write("Enter distance in miles: ");

// Wait for user input and handle it
process.stdin.on("data", function(inputFromUser)
{
    // Convert input text to a number
    let userNumber = Number(inputFromUser);

    // Calculate the distance in kilometers (1 mile = 1.6 km) and print it
    process.stdout.write("The distance in kilometers is: " + (userNumber * 1.6) + " kilometers\n");

    // Terminate the program
    process.exit();
});
