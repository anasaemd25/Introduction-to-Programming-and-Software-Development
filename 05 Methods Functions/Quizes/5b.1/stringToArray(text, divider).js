/*
Write function stringToArray(text, divider) 
that converts a given string into an array. String is split based on the given divider.
*/

function stringToArray(text, divider){
    return text.split(divider);
} 



console.log(stringToArray("banana, apple, grapefruit", ",")); //Result [ 'banana', ' apple', ' grapefruit' ]
