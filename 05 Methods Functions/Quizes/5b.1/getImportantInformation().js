/*
Write function getImportantInformation() that takes a string, finds word **IMPORTANT in it, takes the substring starting with **IMPORTANT till it reaches *.
*/

function getImportantInformation(text) {
    let parts = text.split("**IMPORTANT");
    if (parts.length < 2) return ""; 
    let afterImportant = parts[1].split("*")[0];

    return afterImportant;
}

console.log(getImportantInformation("Lorem ipsum **IMPORTANT This is the important message* dolor sit amet"));
