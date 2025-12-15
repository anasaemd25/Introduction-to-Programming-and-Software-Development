/*
Write code for a function that gets the highest and lowest of item values in a given array and prints them out.
"[highest] is highest and [lowest] is lowest."
/*/



function highestAndLowest(array) {
    let highest = array[0];
    let lowest = array[0];
    for (let i=1; i < array.length; i++){
        if(array[i] > highest){
            highest = array[i];
        }

        if(array[i] < lowest){
            lowest = array[i];
        }
    }
    console.log(highest + " is highest and " + lowest + " is lowest."); 
}


let numbers = [1,5,1, 5, 10, 12, 44];
highestAndLowest(numbers);



/*
Write code for a function that prints out items of an array from the last to the first, each followed by a space.
*/

function printReversedArray(array) {
    console.log(array.reverse().join());

}

array = [1,2,3,4,5,6,7,8,9,10];
printReversedArray(array);

array = ['a', 'b', 'c'];
printReversedArray(array);