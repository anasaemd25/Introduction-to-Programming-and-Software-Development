
// This for-loop prints numbers from 0 to 10 on one line
// - Initialize i to 0
// - Continue while i is less than or equal to 10
// - Increment i by 1 after each iteration
for(let i = 0; i <= 10; i++){
    // Convert the number to text and print it followed by a space
    // process.stdout.write does not add a newline automatically
    process.stdout.write(i.toString() + " ");
}

// Print a newline to separate the two sequences
// "\n" represents a newline character
console.log("\n");

// This for-loop prints numbers from 10 down to 1
// - Initialize i to 10
// - Continue while i is greater than 0
// - Decrement i by 1 after each iteration
for(let i = 10; i > 0; i--){
    // Print the current value of i, console.log adds a newline automatically
    console.log(i);
}
