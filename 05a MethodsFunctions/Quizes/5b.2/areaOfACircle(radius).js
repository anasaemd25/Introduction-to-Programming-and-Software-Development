/*
Write function areaOfACircle(radius) that takes the radius of a circle 
and calculates the circle area and returns it with two decimals. 
If input is invalid, return "Invalid input".
*/

function areaOfACircle(radius){
    if (!Number.isFinite(radius) || radius < 0) {
        return "Invalid input";
    }
    let area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2); 
}


console.log(areaOfACircle(50));
//7853.98

console.log(areaOfACircle(-12));
// Invalid input

console.log(areaOfACircle("jkl"));
// Invalid input

