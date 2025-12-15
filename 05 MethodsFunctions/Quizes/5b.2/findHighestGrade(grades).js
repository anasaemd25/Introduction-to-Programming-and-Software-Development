/*
Create a function findHighestGrade(grades) that takes an array as a parameter and returns the highest value in the array.
*/

function findHighestGrade(grades){
    return Math.max(...grades);
    
}



let array = [1, 6, 2, 90, 4];
console.log(findHighestGrade(array));
//Result 90