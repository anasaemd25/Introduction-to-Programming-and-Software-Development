/*
3.8 Task 8: Triangle
Create a program that prints a triangle. Program asks the
user for the height of the triangle and then prints out a
triangle.
*/

console.log("Enter a height to make a triangle");

process.stdin.on("data", function(userInput){

    let triangle = Number(userInput);

    for (let i = 1; i<=triangle; i++){
        console.log("*".repeat(i));
    }
process.exit(); // Terminate the program after printing
})