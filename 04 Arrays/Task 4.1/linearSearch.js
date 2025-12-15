/*
4.4 Task 4: Linear Search
Create a program that finds specific items in an array.
*/

// 1. Create an array with the following items: 55, 23, 6456, 324, 21, 234, 72, 21
// Un array es como una lista de elementos numerados desde 0
// Este array tiene 8 elementos: posición 0=55, posición 1=23, etc.
let items = [55, 23, 6456, 324, 21, 234, 72, 21];

// 2. Ask the user what they want to search for in the integer array.
// process.stdout.write() muestra texto en la consola sin saltar de línea
process.stdout.write("What number you want to find?");

// 3. Loop through the array and compare the values with the input given by the user.
// process.stdin.on("data") escucha cuando el usuario escribe algo y presiona Enter
process.stdin.on("data", function(userInput){

    // 4. If the item is found, print out in which index the value was found.
    // Convertimos el texto del usuario a número para poder comparar
    let number = Number(userInput);
    // Variable bandera para recordar si encontramos el número o no
    let isFound = false;
    // Recorremos cada elemento del array desde la posición 0 hasta la última
    for(let i= 0; i < items.length; i++){
        // Comparamos el elemento actual del array con el número que busca el usuario
        if(items[i] == number){
            // Si lo encontramos, mostramos el número y su posición en el array
            process.stdout.write(items[i] + " was found in index " + i);
            // Marcamos que sí lo encontramos
            isFound = true;
            // Salimos del bucle porque ya encontramos lo que buscábamos
            break;
        }
    }

    // 5. If the item is not found, print out a message saying item was not found.
    // Solo ejecutamos esto si la variable isFound sigue siendo false
    // El signo ! significa "no" o "contrario de"
    if(!isFound){
            // Si nunca encontramos el número, mostramos este mensaje
            process.stdout.write(number + " was not found");
        };
    
} );