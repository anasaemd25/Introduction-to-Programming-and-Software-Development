/* Extend the functionality from the previous task to:
1. Ask for the distance in meters.
2. Also convert the distance to following units:
o kilometers
o miles
o yards
o feet
o inches
o light years
3. Show numbers with three decimals.
Hint! If you want to align the results, you can use padStart() function to add empty spaces to make the
string equal length. (OPTIONAL) */

process.stdout.write("Enter a distance in meters: ");

process.stdin.on("data", function (inputFromUser){

    let meters = Number(inputFromUser);

    process.stdout.write("The distance in kilometers is: " + (meters / 1000).toFixed(3) + "\n" );
    process.stdout.write("The distance in miles is: " + (meters / 1609.344).toFixed(3) + "\n" );
    process.stdout.write("The distance in yards is: " + (meters / 0.9144).toFixed(3) + "\n" );
    process.stdout.write("The distance in feet is: " + (meters / 0.3048).toFixed(3) + "\n" );

process.exit();
}

);