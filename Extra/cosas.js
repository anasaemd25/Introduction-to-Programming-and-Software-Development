/*
Tutorial: How to Use Each File in the 'JavaScript Code Exercices' Folder

This tutorial explains the purpose and usage of each file and folder in the 'Codigo' directory. Each file is a JavaScript program or exercise related to programming basics. To run a file, open a terminal, navigate to the folder, and use: node <filename.js>

Root Files:
-----------
- cosas.js: This tutorial file.
- package.json: Project metadata (not needed for running exercises).
- practice.js: General practice file for experimenting with JavaScript code.

1 - Workshop 1 Variables, operators/
------------------------------------
- 1.1 Task 1 Number Guessing Game.js: Play a number guessing game. Run and follow prompts.
- 1.2 Task 2 Distance Converter version 0.1.js: Convert distances between units (basic version).
- 1.3 Task 3 Distance Converter version 0.2.js: Improved distance converter with more features.
- 1.4 Task 4 Basic Calculations.js: Perform basic arithmetic operations.
- Distance Converter version 0.2.js: Another version of the distance converter.
- distanceConverterversion.js: Yet another distance converter variant.
- Number guessin 2.js: Another number guessing game with different logic.

02 Conditionals/
----------------
- 2.1 Largest Number v.0.1.js: Find the largest of two numbers.
- 2.2 Task 2 Largest Number v.0.2.js: Find the largest of three numbers.
- evenOrOdd.js: Check if a number is even or odd.
- first.js: Simple conditional example.
- logicalOperator.js: Demonstrates logical operators (AND, OR, NOT).
- switchMenu.js: Menu selection using switch-case.
- yesOrNo.js: Yes/No input handling.

03 Loops/
---------
- Quiz3Loops.js: Looping quiz exercises.

First/
  - first.js: Basic loop example.
  - from0to10.js: Print numbers from 0 to 10.
  - nestedLoops.js: Example of nested loops.

Quiz/
  - countDigits.js: Count digits in a number.
  - every5thNumber().js: Print every 5th number in a range.
  - everyNthNumber(number).js: Print every Nth number.
  - printNumbers().js: Print numbers in a range.
  - weekDays.js: Print days of the week.

Workshop 3 - Loops/
  - countdown.js: Countdown from a number.
  - from0to20.js: Print numbers from 0 to 20.
  - loopingThroughStrings.js: Loop through characters in a string.
  - multiplicationTable.js: Print a multiplication table.
  - Palindrome.js: Check if a word is a palindrome.

Workshop 3b - Loops - For/
  - multiplicationTables2.js: Print multiplication tables.
  - otherWayAround.js: Loop in reverse order.
  - toMixedCase().js: Convert string to mixed case.
  - triangle.js: Print a triangle pattern.

04 Arrays/
----------
- quiz.js: Array quiz exercises.
- quiz2.js: More array quizzes.

first/
  - first.js: Basic array example.
  - test1.js: Array test.

Task 4.1/
  - average.js: Calculate average of array elements.
  - CreatingandLoopingThroughanArray.js: Create and loop through an array.
  - linearSearch.js: Search for an element in an array.
  - reverse.js: Reverse an array.
  - smallest&Largest.js: Find smallest and largest in an array.

Task 4.2/
  - battleship.js: Simple battleship game using arrays.

05a MethodsFunctions/
---------------------
- 5.1 Task 1 Letters and Numbers.js: Work with letters and numbers using functions.
- 5.2 Task 2 Lorem Ipsum.js: Generate or manipulate Lorem Ipsum text.
- 5.3 Task 3 Sum of Numbers.js: Sum numbers using a function.
- 5.4 Task 4 Circumference of a Circle.js: Calculate circumference.
- 5.5 Task 5 Smileys.js: Print smileys using functions.

Quizes/
  - Quiz 5.js: Functions quiz.

5b.1/
  - censorA().js: Censor letter 'A' in a string.
  - getImportantInformation().js: Extract important info from text.
  - getLastFiveLetters().js: Get last five letters of a string.
  - getLongerString.js: Compare string lengths.
  - getStringLength().js: Get length of a string.
  - stringToArray(text, divider).js: Split string into array.

5b.2/
  - areaOfACircle(radius).js: Calculate area of a circle.
  - areaOfSquare(side).js: Calculate area of a square.
  - circumferenceOfCircle.js: Calculate circumference.
  - divide(divident, divider).js: Divide two numbers.
  - findHighestGrade(grades).js: Find highest grade in an array.
  - positiveToNegative(number).js: Convert positive to negative.

Extras Weeks 0-4 (loops)/
-------------------------
- Task 1 Math game.js: Play a math game.
- Task 2 Rock, paper, scissors.js: Play rock-paper-scissors.

Extras WS 0-5/
--------------
- Task 1 ToDo App.js: Simple to-do list app.
- Task 2 Quiz.js: Quiz application.
- Task 3 Lottery.js: Lottery number generator.

How to Use:
-----------
1. Open a terminal and navigate to the 'Codigo' folder.
2. Run any file with: node <filename.js>
3. Follow the on-screen instructions for interactive programs.

Happy coding!

Quick Guide: How to Use Main Concepts

1. Variables and Operators
--------------------------
- Declare variables:
    let number = 5;
    const PI = 3.14;
- Basic operators:
    + addition, - subtraction, * multiplication, / division, % modulo

2. Conditionals (if, else, switch)
----------------------------------
- if/else:
    if (number > 10) {
        console.log("Greater than 10");
    } else {
        console.log("10 or less");
    }
- switch:
    switch (option) {
        case 1:
            // code
            break;
        default:
            // code
    }

3. Loops (for, while)
---------------------
- for:
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
- while:
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

4. Arrays
---------
- Create an array:
    let numbers = [1, 2, 3];
- Access/modify:
    numbers[0] = 10;
- Iterate:
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

5. Functions
------------
- Declare:
    function sum(a, b) {
        return a + b;
    }
- Use:
    let result = sum(2, 3);

6. Useful String and Array Methods
----------------------------------
- String:
    let text = "Hello";
    text.length; // length
    text.toUpperCase(); // uppercase
- Array:
    numbers.push(4); // add to end
    numbers.pop(); // remove last

7. Input/Output
---------------
- Print to console:
    console.log("Hello world");
- Read input (in Node.js, consider prompt-sync or readline-sync if needed)

8. Typical Exercises
--------------------
- Random number:
    let random = Math.floor(Math.random() * 10) + 1;
- Palindrome:
    let word = "level";
    let isPalindrome = word === word.split('').reverse().join('');

TIP: If you get stuck, look up examples for each topic and try changing values to see what happens.
*/