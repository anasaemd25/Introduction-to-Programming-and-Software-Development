/* Create a simple program that converts a distance given in miles to
kilometers. Print the output with basic write() and also with
util.format(). */

process.stdout.write("Enter a distance in miles: ");

process.stdin.on("data", function (inputFromUser){
    let miles = Number(inputFromUser);
    let kilometers = miles * 1.6;
    process.stdout.write("The distance in kilometers is: " + kilometers + "\n");

process.exit();
}

);