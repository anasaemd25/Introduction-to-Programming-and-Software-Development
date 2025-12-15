/*

Write a function everyNthNumber(number) that takes a number as an input parameter and then prints out every nth number from the range 0-100 in a loop. If parameter is zero or negative, print out "Invalid input".

*/
function everyNthNumber(number) {
    if (number <= 0) {
        console.log("Invalid input");
        return;
    }
    for (let i = 0; i <= 100; i += number) {
        console.log(i);
    }
}   
everyNthNumber(10);
    