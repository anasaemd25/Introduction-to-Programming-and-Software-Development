/*
Write function getLongerString(string1, string2) 
that takes two strings as input parameters 
and return the longer one. 
If they are equally long, return the first one.
*/

function getLongerString(string1, string2){
    if(string1.length >= string2.length){
        return string1;
    }else{
        return string2;
    }
        
}