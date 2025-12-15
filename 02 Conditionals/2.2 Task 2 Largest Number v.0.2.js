/*
Extend the program from previous task to ask for three numbers.
*/

console.log("Enter three numbers separated by spaces: ");

process.stdin.on("data", function(inputFromUser) {

let userNumber=inputFromUser.toString().split(" ");

let firstNumber = Number(userNumber[0]);
let secondNumber = Number(userNumber[1]);
let thirdNumber = Number(userNumber[2]);

if(firstNumber < secondNumber && secondNumber > thirdNumber  ){
    console.log(secondNumber);
} 
else if (firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber);

} else if (thirdNumber > firstNumber && thirdNumber > secondNumber){
    console.log(thirdNumber);
}

    process.exit()

});