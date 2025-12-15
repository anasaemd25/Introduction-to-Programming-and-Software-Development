/*
Ask the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. Use loops to
solve this.
Note: What happens if madam was spelt with a capital letter?
*/

console.log("Enter a string to check if it is a Palindrome");

process.stdin.on("data",function(userWord){

    let word=userWord.toString().trim().toLowerCase();

    let reverseWord=word.split("").reverse().join("");

    if(word === reverseWord){
        console.log("It is");

    }else{
        console.log("It is not");
    }

    
console.log("\n" + "Now this with loops");
process.exit();
})


// Second way with loops

console.log("Enter a string to check if it is a Palindrome");   
process.stdin.on("data",function(userWord){

    let word=userWord.toString().trim().toLowerCase();
    let reverseWord="";

    for(let i=word.length-1; i>=0; i--){
        reverseWord+=word[i];
    }
    if(word === reverseWord){
        console.log("It is");

    }else{
        console.log("It is not");
    }       
process.exit();
})     







