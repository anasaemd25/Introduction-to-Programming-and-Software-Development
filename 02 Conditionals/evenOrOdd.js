/*
Write a simple program to figure out whether a given number is even or odd.
Hint! You can use modulo (%) to achieve this.
*/

console.log("Write a number: ");

process.stdin.on("data", function(inputFromUser){

    let evenOrOdd = Number(inputFromUser);

    if(evenOrOdd % 2 == 0){
        console.log("The number is even");
    } else{
        console.log("The number is odd");
    }

    process.exit();
});

