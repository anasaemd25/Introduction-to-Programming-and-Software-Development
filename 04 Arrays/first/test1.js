// Task 4.1 — Creating and looping through arrays

let array1 = [5, 7, 32, 31, 8];
let array2 = [12.4, -13.55, 67.44];
let array3 = ["Helsinki", "Lissabon", "New York", "Shanghai"];

// “The value in the index number 3 is: “ and the value from the array3.
console.log("Value index 3: " + array3[2]);

// “The fourth item in the int array is: “ and the value from the array1.
console.log("fourth item array1: " + array1[3]);

// “In the array2 there are xx items”
console.log("In the array2 there are " + array2.length + " items");

// The whole content of the array1 with a loop.
for(let i = 0; i < array1.length; i++){
    process.stdout.write(array1[i] + ", ");
}

// The whole content of the array2 from the last item to the first.
process.stdout.write("\n" + array2.reverse().toString());

// In a loop go through the array3 and set all the values to be "empty" and print it out as a comma separated string.
for (let i=0; i < array3.length; i++){
    
}console.log("\n" + array3.fill("empty, "));
 