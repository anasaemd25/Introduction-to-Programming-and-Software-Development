/*
4.3 Task 3: Average
Create a program that asks user for number and calculates the average for them. 
Numbers will be asked till the user enters a letter.
Hint! You can check whether a value is numeric with isNaN().
*/

console.log("Enter number, stop program by entering a letter");

array1=[];

process.stdin.on("data", function(userInput){

    let numeros = Number(userInput.toString().trim());

    if(isNaN(numeros)) {
        let sum = array1.reduce((acc, cur) => acc + cur, 0);
        let average = sum / array1.length;
        console.table("Average is: " + average);
        process.exit();
    }else{
        array1.push(numeros);
    }
    
});





