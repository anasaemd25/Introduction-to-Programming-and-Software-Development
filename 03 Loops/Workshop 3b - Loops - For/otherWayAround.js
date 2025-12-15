/* 3.9 Task 9: Other way around
Create a program that asks the user for a string and then
prints it out from the last letter to the first. Use a for loop. */

console.log("Enter a String");

process.stdin.on("data", function(UserString){

    let reverseString = UserString.toString().split("").reverse().join("");

    console.log("The word backwards is "+ reverseString);


process.exit();
})



// Prompt the user to enter a string
console.log("Enter a String");

// Wait for the user to type and press Enter
process.stdin.on("data", function(UserString){

    // Convert input to string and trim leading/trailing spaces
    let str = UserString.toString().trim();

    // Initialize a variable to hold the reversed string
    let reverseString = "";

    // Loop from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
        // Append each character to the reversed result
        reverseString += str[i];
    }

    // Print the reversed string
    console.log("The word backwards is "+ reverseString);

    // Terminate the program
    process.exit();
})