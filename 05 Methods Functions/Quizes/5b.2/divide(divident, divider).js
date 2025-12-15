/*
Write function divide(divident, divider) 
that takes two numbers as input parameters, 
the divident and divider, performs the division and returns the result with two decimals. 
If inputs are invalid, return text "Invalid input".
*/

function divide(divident, divider){
    if (typeof divident !== 'number' || typeof divider !== 'number' || divider === 0) {
        return "Invalid input";
    }   
    let result = divident / divider;
    return result.toFixed(2);   
}

console.log(divide(8, 5));
//Result 1.60