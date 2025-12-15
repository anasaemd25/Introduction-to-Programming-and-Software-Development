/*
Write a simple program that asks user a simple yes or no question and prints out a
corresponding message. Remember to also handle invalid input.
*/

console.log("Do you want to continue? (yes/no)");

process.stdin.on("data", function(inputFromUser){

    let input1 = inputFromUser.toString().trim();

    switch(input1){
        case "no": 
            console.log("Okay, exiting.");
            break;
        case "yes":
            console.log("Great, continuing.");
            break;
        default: 
            console.log("Invalid input. Please type 'yes' or 'no'.");
            break;
    }   
    process.exit();
} );
