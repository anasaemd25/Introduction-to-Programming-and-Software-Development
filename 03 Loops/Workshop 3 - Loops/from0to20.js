/*
3.1 Task 1: Numbers from 0 to 20
Create a code that prints out numbers from 0 to 20. Use
while loop.
*/

console.log("Number from 0 to 20, using while");

let number=0;

while(number<=20){
    process.stdout.write(number.toString().trim() + " ");
        number++;
}

console.log("\n\nUsing do-while:");
number = 0; // Reset number to 0

do  {
    process.stdout.write(number.toString().trim() + " ");
    number++; // Increment number inside the loop
} while(number <= 20);




