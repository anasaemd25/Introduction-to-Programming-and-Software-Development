/* 
Create a program with a simple menu and following
functionality:
1. Print hello
2. Print current date
3. End program
Remember to check invalid input, too.
Hint! Use switch for this.
*/

// Show the options menu to the user
console.log("Select what you want to do" + 
    "\n"
+ "1- Print out Hello" +
    "\n"
+ "2- Print current date & time" +
    "\n"
+ "3- Exit");

// Listen for user input from the terminal
process.stdin.on("data", function(inputFromUser){

    // Convert user input to string and trim whitespace
    let choice = inputFromUser.toString().trim();

    // Evaluate the user's choice using a switch statement
    switch(choice){
        case "1":
            // Case 1: Print "Hello"
            console.log("Hello");
                break;
        case "2":
            // Case 2: Print current date and time
            console.log(new Date().toString());
                break;
        case "3":
            // Case 3: End the program
            process.exit();
                break;
        default:
            // Default: Inform the user of an unknown option
            console.log("Unknown option, please select 1, 2 or 3.");
    }

    // End the program
    process.exit()
});
