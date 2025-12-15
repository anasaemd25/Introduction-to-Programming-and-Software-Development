/*
Create a simple program in which the user is asked to give two numbers 
and then your program prints out which one of them is largest.
*/

// Prompt the user to enter two numbers
console.log("Enter two numbers separated by a space: ");

// Set up an event listener for user input
process.stdin.on("data", function(inputFromUser) {

// Convert the input to a string and split it by spaces to get individual numbers
let userNumber=inputFromUser.toString().split(" ");

// Convert the first and second elements of the array to numbers
let firstNumber = Number(userNumber[0]);
let secondNumber = Number(userNumber[1]);

// Compare the two numbers to find which is larger
if(firstNumber < secondNumber){
    // If the second number is larger, print it
    console.log(secondNumber);
} 
else if (firstNumber > secondNumber){
    // If the first number is larger, print it
    console.log(firstNumber);

} else{
    // If both numbers are equal, print a message
    console.log("Both numbers are equal");
}

    // Exit the program after processing the input
    process.exit()

});