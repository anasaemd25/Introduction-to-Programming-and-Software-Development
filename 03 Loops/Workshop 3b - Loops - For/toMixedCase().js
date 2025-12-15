/*
3.10 Task 10: toMixedCase()
Create a program that asks the user for a string and then
prints it out so that all odd characters are in uppercase
and all even characters are in lower case. Use a for loop.
*/


console.log("Enter a string");

process.stdin.on("data", function(userString){
    let str = userString.toString().trim();

    let mixedCase = "";

    for(let i=0; i < str.length; i++){
        if (i % 2 == 0){
            mixedCase += str[i].toLowerCase();
        } else{
            mixedCase += str[i].toUpperCase();
        }
    }
    console.log(mixedCase);

});

