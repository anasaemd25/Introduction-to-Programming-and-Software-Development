/*
3.7 Task 7: Multiplication Tables 2
Print out multiplication tables for numbers 1-10 using a loop. 
Use nested for loops
Print only two tables, for example: the table of 1 and the table of 2
*/

console.log("********************");
for(let table = 1; table <= 2; table++){
    console.log("Table of " + table);
    console.log("********************");
    for(let i=1; i <=10; i++){
        console.log(
            "*".padEnd(3).padStart(3) + 
            table.toString().padEnd(3).padStart(3) + 
            " * ".padEnd(3).padStart(3) + i.toString().padEnd(3).padStart(3) + 
            " = ".padEnd(3).padStart(3) + 
            (table * i).toString().padEnd(3).padStart(3) + 
            "*".padStart(3).padEnd(3)
        )
    }

    console.log("********************");
};
