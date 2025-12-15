console.log("Enter your name");

process.stdin.on("data", function(inputfromUser){
    // Initialize a counter variable to keep track of how many times we've printed the input
    let counter = 1;

    // Start a while loop that will continue as long as counter is less than or equal to 5
    while(counter <= 5){ 
        // Print the user's input to the console without adding a new line
        process.stdout.write(inputfromUser);
        // Increment the counter by 1 after each print
        counter++;
    }
    // After printing the input 5 times, exit the program
    process.exit();
    
})

console.log("\n");

function printName(name) {
    // Using a for loop (preferred for known iteration count)

    for (let i = 0; i < 3; i++) {
        console.log(name + i);
    }

console.log("\n");

    let i = 0;
            while (i < 3) {
            console.log(name + i);
        i++;
}
console.log("\n");
};

printName("Luk");
