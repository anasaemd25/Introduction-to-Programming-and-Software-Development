/*

Write a simple program that asks user for three numbers and create the following logic:
▪ If all three numbers are equal print out “You entered three matching numbers”.
▪ If all three numbers are different print out “You entered three different numbers”.
▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.

▪ If any of the numbers is 2, enter “You entered the magic number 2!”.
*/

console.log("Enter 3 number separated by a space");

process.stdin.on("data",function(inputFromUser){

    let userNumber = inputFromUser.toString().split(" ");

    let firstNumber = Number(userNumber[0]);
    let secondNumber = Number(userNumber[1]);
    let thirdNumber = Number(userNumber[2]);

    if(firstNumber == secondNumber && firstNumber == thirdNumber){
        console.log("You entered three matching numbers");
    }
    else if(firstNumber != secondNumber && firstNumber != thirdNumber && secondNumber != thirdNumber){
        console.log("You entered three different numbers");
    }
    else if(firstNumber == secondNumber && firstNumber != thirdNumber){
        console.log("Third one doesn’t fit");

    } 
    if (firstNumber == 2 || secondNumber == 2 || thirdNumber == 2) 
        console.log("You entered the magic number 2!");

    process.exit();
    }
    
);