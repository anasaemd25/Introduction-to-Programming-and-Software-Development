/*
4.1 Task 1: Creating and Looping Through an Array
Create a program with the following arrays:
1. an array1 with five items: 5, 7, 32, 31 and 8.
2. an array2 with three items: 12.4, -13.55 and 67.44,
3. an array3 with four items: “Helsinki”, “Lissabon”, “New
York” and “Shanghai”.
Then print out the following:
*/

array1 = [5, 7 ,32, 31, 8];

array2 = [12.4, -13.55, 67.44];

array3 = ["Helsinki", "Lissabon", "New York", "Shanghai"];

// - “The value in the index number 3 is: “ and the value from the array3.
process.stdout.write("The value in the index number 3 is: " + array3[3] + "\n");

// - “The fourth item in the int array is: “ and the value from the array1.
process.stdout.write("The fourth item in the int array is: " + array1[3] + "\n");

//- “In the array2 there are xx items” where xx is the size of the array2.
process.stdout.write("In the array2 there are " + array2.length + " items "  + "\n");


console.log("The whole content of the array1 with a loop.");
for(let i = 0; i < array1.length; i++){
    process.stdout.write(array1[i] + "\n");
}

console.log("\n");

console.log("The whole content of the array2 from the last item to the first.");
for(let i = array2.length -1; i >= 0; i--){
    process.stdout.write(array2[i] + "\n");
}

console.log("\n");

// - Lastly, in a loop go through the array3 and set all the values to be “empty” and print it out as a comma separated string.
for(let i=0; i < array3.length; i++){
    array3[i] = "empty"; // or array3.fill("empty");
}
process.stdout.write(array3.join("," + "\n" )); // or console.log(array3.join(", "));