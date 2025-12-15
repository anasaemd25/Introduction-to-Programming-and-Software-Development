/*
Create a function removeFromArray(index, array) 
that removes an item in a given index from an array. 
Function returns false if the index doesn't exist.
*/
   

function removeFromArray(index, array){
    if (array[index] === undefined) return false;
    array.splice(index,1);
    return true;
}

// Second way to do it
function removeFromArray(index, array){
if (index < 0 || index >= array.length) return false;
array.splice(index,1);
return true;
}


let array = new Array(1, 2);
if(removeFromArray(3, array)) {
console.log(array.toString());
} //Result should be empty