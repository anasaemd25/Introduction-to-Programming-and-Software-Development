/*
5.5 Task 5 Smileys
Create a program that has the following functionality:
1. Ask the user for a string and store it in a variable.
2. replaceSmileys(text): Finds smileys in text and replaces them with corresponding text as shown in the table below.
3. replaceSmileysWithReplacer(text, replacer): Finds smileys in text and replaces them with replacer. 
You can use regular expression (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for this.

Print out the text.
smiling emoji = *smiling*
sad emoji = *sad*
wink emoji= *winkwink*
<3 = *love*
*/

// Ask for user input
let userInput = prompt("Please enter a string with smileys:");

// Function to replace smileys with specific texts (one replace per smiley)
function replaceSmileys(text) {
    // Replace each smiley one by one
    text = text.replace(":)", "*smiling*");
    text = text.replace(":(", "*sad*");
    text = text.replace(";)", "*winkwink*");
    text = text.replace("<3", "*love*");
    return text;
}

// Function to replace all smileys with a custom replacer
function replaceSmileysWithReplacer(text, replacer) {
    // Replace each smiley with the replacer
    text = text.replace(":)", replacer);
    text = text.replace(":(", replacer);
    text = text.replace(";)", replacer);
    text = text.replace("<3", replacer);
    return text;
}

// Print the replaced text with specific replacements
console.log("Replaced with specific texts:", replaceSmileys(userInput));

// Ask for a custom replacer
let replacer = prompt("Enter a replacer text for all smileys:");

// Print the replaced text with custom replacer
console.log("Replaced with custom replacer:", replaceSmileysWithReplacer(userInput, replacer));