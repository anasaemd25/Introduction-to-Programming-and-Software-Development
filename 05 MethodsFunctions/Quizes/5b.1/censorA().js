/*
Write function censorA() that replaces all occurrences of the letter a with an asterisk and then returns the censored string.
*/

function censorA(string) {
    return string.split('a').join('*').split('A').join('*');
}


//Test	
console.log(censorA("Meija"));
// Result Meij*