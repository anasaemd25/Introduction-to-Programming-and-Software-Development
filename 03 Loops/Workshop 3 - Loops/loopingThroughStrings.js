/*3.3 Task 3: Looping through Strings

Create a program with the following functionality:
1. Ask the user to enter a string.

2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”

Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.*/

/* Removed Spanish explanatory block for brevity and consistency. */

/*

3.3 Task 3: Looping through Strings

Create a program with the following functionality:
1. Ask the user to enter a string.

2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”

Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.

*/

console.log("Enter a string");

process.stdin.on("data", function(userWord){

        let string = userWord.toString().trim();
        let number = 1;

        for(let i=0; i<string.length; i++){
                console.log(number + ". character is " + string.charAt(i))
                number++;
        }

process.exit();

});



