// Prompt the user to enter a distance in meters
process.stdout.write("Enter distance in meters: ");

// Wait for user input
process.stdin.on("data", function(inputFromUser)
{
    // Convert input to a number
    let userNumber = Number(inputFromUser);

    // Show the distance in kilometers
    process.stdout.write("The distance in kilometers is: " + (userNumber / 1000).toFixed(3) + "\n"); // .toFixed(3) limits to 3 decimals

    // Show the distance in miles
    process.stdout.write("The distance in miles is: " + (userNumber / 1609.344).toFixed(3) + "\n");

    // Show the distance in yards
    process.stdout.write("The distance in yards is: " + (userNumber / 0.9144).toFixed(3) + "\n" );

    // Show the distance in feet
    process.stdout.write("The distance in feet is: " + (userNumber / 0.3048).toFixed(3) + "\n" );

    // Show the distance in inches
    process.stdout.write("The distance in inches is: " + (userNumber / 0.0254).toFixed(3) + "\n" );

    // Show the distance in light years
    process.stdout.write("The distance in light years is: " + (userNumber / 9460730472580800).toFixed(3) + "\n" );

    // Terminate the program
    process.exit();
});
