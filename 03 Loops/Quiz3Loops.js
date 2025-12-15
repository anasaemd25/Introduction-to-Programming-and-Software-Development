function calendar(firstWeekDay, month, numberOfDays) {
    
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weekDay = firstWeekDay - 1;
        for (let day = 1; day <= numberOfDays; day++) {
            console.log(weekDays[weekDay] + " " + day + "." + month + ".");
            weekDay++; 
            
        if (weekDay == 7) weekDay = 0;
        }
}

/*
Create a function divisibility() that takes three input parameters: 
divider, min, and max 
and prints out all the numbers between min and max that are divisible (modulo 0) by given divider. 
Print each number on a new line.
*/

function divisibility(divider, min, max) {
    for (let i = min; i <= max; i++){
        if (i % divider == 0){
            console.log(i);
        }
    }
}


divisibility(3, 1, 10);