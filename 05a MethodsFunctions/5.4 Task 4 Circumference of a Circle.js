/*
5.4 Task 4 Circumference of a Circle
Create a program that calculates the circumference of a circle 
when radius is given (circumference = 2 * π *radius). 
Call this method three times with different parameters and print out the results.
*/

// Definimos la función circumference que toma el radio y devuelve la circunferencia
function circumference(radius){
    return 2 * Math.PI * radius;
}

// Llamamos a la función circumference con el valor 5 y mostramos el resultado
console.log("Circumference with radius 5 is " + circumference(5));
// Llamamos a la función circumference con el valor 15 y mostramos el resultado
console.log("Circumference with radius 15 is " + circumference(15));
// Llamamos a la función circumference con el valor 50 y mostramos el resultado
console.log("Circumference with radius 50 is " + circumference(50));


