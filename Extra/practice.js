// Function that finds the student with the highest average
function highestAverageStudent() {
    // Instructions for the user on how to enter the data
    console.log("Enter 3 names with averages (example: Ana 8, Juan 7, Luis 9):");

    // Variable to store all user input as a string
    let inputData = "";

    // Listen for user input chunks and accumulate them
    process.stdin.on("data", function(input) {
        // Convert the input to string, trim whitespace, and append it
        inputData += input.toString().trim();

        // Split the input by commas to separate each student entry
        let parts = inputData.split(",");
        
        // Ensure exactly 3 students have been entered
        if (parts.length < 3) {
            console.log("Please enter 3 students separated by commas.");
            return; // Not enough data yet
        }

        // Map each part into an object with name and average
        let students = parts.map(part => {
            // Split name and average by space delimiter
            let [name, average] = part.trim().split(" ");
            // Return an object with name and numeric average
            return { name, average: Number(average) };
        });

        // Find the student with the highest average using reduce
        let top = students.reduce((a, b) => a.average > b.average ? a : b);

        // Print the result with the winner's name and average
        console.log(`The student with the highest average is: ${top.name} (${top.average})`);
        
        // Stop reading from stdin and finish the program
        process.stdin.pause();
    });
}

// Call the main function to run the program
highestAverageStudent();