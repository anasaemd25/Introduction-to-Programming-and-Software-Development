/*
Write code for a function that gets an average of item values in a given array and prints it out.
*/


let numbers = [1,5,1, 5, 10, 12, 44];

    function average(array) {
        
        let sum = numbers.reduce((a, b) => a + b, 0)
        let average = sum / numbers.length;

        console.log(average);


    }

average(numbers);