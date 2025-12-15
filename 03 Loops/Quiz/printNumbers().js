/*
Write code for a function that gets two parameters, start and end. 
The function then prints out numbers from start to end, all of them on the same line.

In this task you can assume input to be of correct data type (numeric) 
and error handling is not necessary.

*/

function printNumbers(start, end) {
    let output = "";
    for (let i = start; i <= end; i++) {
        output += i + "";
    }
    console.log(output);

    return;


}

printNumbers(1, 10);