// Create a JS array that has the following items: "banana","apple", "kiwi", "orange".
let fruits = ["banana","apple", "kiwi", "orange"];

// Print out "First item in the array is [first item]".
console.log("First item in the array is " + fruits[0]);

//Loop through the array backwards and print out the items.
for(let i = fruits.length -1; i >=0; i-- ){
    process.stdout.write("\n" + fruits[i]);
}
console.log("\n");

// Add a new element grapefruit in the beginning of the array.
fruits.unshift("grapefruit");
for(let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
console.log("\n");

// Add a new element watermelon in the end of the array.
fruits.push("watermelon");
for(let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
console.log("\n");

//Sort the array in descending alphabetical order (z-a).
fruits.sort().reverse();
for(let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
console.log("\n");

console.table(fruits);

console.log("\n" + "2nd way: " + fruits.sort().toReversed())