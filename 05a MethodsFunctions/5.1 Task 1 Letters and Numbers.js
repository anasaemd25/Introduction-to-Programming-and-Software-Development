/*
Create a program with two methods:
1. printLetters(): prints letters from a-z
2. printNumbers(): prints numbers from 1-9
Call first printLetters() method, then printNumbers() and after that printLetters() again.
Hint! To print the letters you can use for example Number toString() (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
*/

// Función que imprime todas las letras del alfabeto de la 'a' a la 'z'
function printLetters(){
    // Bucle que va del 97 al 122 (códigos ASCII de las letras minúsculas)
    // 97 = 'a', 98 = 'b', ..., 122 = 'z'
    for(let i=97; i<=122; i++){
        // String.fromCharCode() convierte un número ASCII en su letra correspondiente
        // process.stdout.write() imprime sin salto de línea automático
        process.stdout.write(String.fromCharCode(i));
    }
    // console.log() sin texto crea un salto de línea para separar las salidas
    console.log(); 
}
    
    
// Función que imprime los números del 1 al 9
function printNumbers(){
    // Bucle que va del 1 al 9
    for(let i=1; i<=9; i++){
        // .toString() convierte el número en texto
        // process.stdout.write() imprime sin salto de línea automático
        process.stdout.write(i.toString());
    }
    // console.log() sin texto crea un salto de línea para separar las salidas
    console.log(); // New line for better output formatting
}

// Llamamos a las funciones en el orden pedido:
// 1. Primero las letras
printLetters();
// 2. Después los números
printNumbers();
// 3. Y por último las letras otra vez
printLetters();