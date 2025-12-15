/*
3.4 Task 4: Multiplication Table
Ask the user to enter a number and then print out corresponding multiplication table using a loop.
Optional: Try to make printing according to screenshot on the right. You might use
util.format, padStart() and padEnd() to achieve this.
*/
/*

console.log("Enter a number");

process.stdin.on("data", function(userNumber){

    let multiNumber=Number(userNumber);

    console.log("Multiplication table for " + multiNumber);

    console.log("********************");


    for(let i=1; i<=10; i++){

        process.stdout.write(
            "*".padEnd(10)  + i.toString().padEnd(4) + "*".padEnd(4) + multiNumber.toString().padEnd(4) + "=".toString().padEnd(4) + i*multiNumber + "*".padStart(10)
        + "\n"

        );
    }



    console.log("\n" + "********************");

});
*/


/*
3.4 Task 4: Multiplication Table
Ask the user to enter a number and then print out corresponding multiplication table using a loop.
Optional: Try to make printing according to screenshot on the right. You might use
util.format, padStart() and padEnd() to achieve this.
*/

/*
console.log("Enter a number");

process.stdin.on("data", function(userNumber){

    let mutliNumber=Number(userNumber);
    console.log("\n");
    console.log("*******************************");
    


    for (let i=1; i  <=10 ; i++){
        console.log("*".padEnd(5) + i.toString().padStart(2) + " * " + mutliNumber.toString().padStart(2) + " = ".padEnd(2) + (i*mutliNumber).toString().padStart(2) + "*".padStart(5));

    }
    
    

    console.log("*******************************");
    
process.exit();
})

*/

/*
3.4 Task 4: Multiplication Table
Ask the user to enter a number and then print out corresponding multiplication table using a loop.
Optional: Try to make printing according to screenshot on the right. You might use
util.format, padStart() and padEnd() to achieve this.
*/

console.log("Enter a number");

process.stdin.on("data", function(userNumber){

    let inputNumber = Number(userNumber);

console.log("****************")
    for (let i = 1; i<=10; i++){
        
            console.log(
                i.toString().padEnd(3) + 
                " * ".padStart(3) + 
                inputNumber.toString().padStart(3) + 
                " = ".padStart(3) + 
                (i * inputNumber).toString().padStart(3)
            );
        
    }

console.log("****************")
});