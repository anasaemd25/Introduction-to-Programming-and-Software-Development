/*
4.5 Task 5: Smallest and Largest with Random Numbers


3. Find the smallest value in the array using a loop and print it out. 
*/

let randomNumber=[];

// 1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
// • To create random numbers you can use Math.random () function.
for (let i = 0; i < 100; i++){
  randomNumber.push(Math.floor(Math.random() * 1001));

}

// 2. Find the largest value in the array using a loop and print it out.
randomNumber.sort((a, b) => a - b);

process.stdout.write(randomNumber.toString() );

process.stdout.write("\n" + "Smallest: " +  randomNumber[0]);
process.stdout.write("\n" + "Biggest: " +  randomNumber[randomNumber.length - 1]);

