/*
Write function getLastFiveLetters() that takes one input parameter and returns last five letters of that string.
*/


function getLastFiveLetters(string){
    return string.slice(-5);
}


console.log(getLastFiveLetters("Foobar")); // Result oobar
