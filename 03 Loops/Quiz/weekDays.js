/* Write code for a function that gets three parameters: 
firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), 
month and numberOfDays and will then print out each date accompanied by the weekday name

In this task you can assume input to be of correct data type (numeric) 
and error handling is not necessary.*/

function calendar(firstWeekDay, month, numberOfDays) {
    // Create an array with weekday names
        let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let weekDay = firstWeekDay - 1;
        for (let day = 1; day <= numberOfDays; day++) {
            console.log(weekDays[weekDay] + " " + day + "." + month + ".");
            weekDay++;
            if (weekDay == 7) weekDay = 0;
        }
}