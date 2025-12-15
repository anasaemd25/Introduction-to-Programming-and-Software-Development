/* 
4.2 Task 2: Reverse
Create a program that keeps asking the user to input numbers

These numbers are stored in an array. 

Keep asking till zero is entered. 

After that the numbers are printed out in a reverse order. 

Don’t use array methods for this but only simple loops.
*/

let array1=[];

process.stdout.write(array1.length + " Enter a number: ")

process.stdin.on("data", function(userInput){

    process.stdout.write("Input numbers" + "\n");

    let number = Number(userInput);

    array1.push(number);

    if(number == 0){
        
    console.log("\n" + "Reverse order: " );

        for(let i = array1.length -1; i >= 0; i--){
            console.log(array1[i]);
        }

    } else{
        process.stdout.write(array1.length  + " Enter a number: ")
    }

});


/*
console.log("Input number, if you input 0 the program will stop");

//2º Create an empty array so I can use it later to store values
let array1 = [];

process.stdout.write(array1.length + " Enter a number: ");

process.stdin.on("data", function(userInput){

    let usernumbers = Number(userInput);

    array1.push(usernumbers);

    if(usernumbers == 0){
        console.log("Reverse order: ");

        for (let i = array1.length -1; i>=0; i--){
        console.log(array1[i]);
    }
        process.exit();   
    } else{
        process.stdout.write(array1.length + " " +  " Enter a number: ");
    }


})

*/


/*
                USING .REVERSE()            
console.log("Enter a number, if you enter 0 I'll stop");

array1=[];

process.stdin.on("data", function(userInput){

    let numbers = Number(userInput);

    array1.push(numbers);

    if(numbers==0){
        console.log(array1.reverse());
        process.exit();
    } 

});
*/