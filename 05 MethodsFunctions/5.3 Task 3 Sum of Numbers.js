/*
5.3 Task 3 Sum of Numbers
Create a program that has a method sum(firstNumber,secondNumber) 
that returns the sum of the numbers passed to the method as input parameters. 
Call this method, save the return value in a variable and print it out. 
Do this three times with different variable values. 
*/

// Definimos la función sum que toma dos números y devuelve su suma
function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

// Llamamos a la función sum con los valores 9 y 7, y mostramos el resultado
let result1 = sum(9,7);
console.log("First sum is " + result1);
// Llamamos a la función sum con los valores 8 y 27, y mostramos el resultado
let result2 = sum(8, 27);
console.log("Second sum is " + result2);
// Llamamos a la función sum con los valores -172 y 7, y mostramos el resultado
let result3 = sum(-172,7);
console.log("Third sum is " + result3);