/*
4.6 Task 6: Battleship
Create a 5x5 Battleship game using a multidimensional array. 
Use asterisks to mark the ships. 
Ask the user for coordinates to shoot 
and give feedback to the user whether they hit a ship or not. 
Keep asking for as long as there are ships left. 
Keep count of how many shots the player needed.
*/

let arrayBattleship = [ 
    
    [ "[-]", "[-]", "[-]", "[-]", "[-]", ],
    [ "[-]", "[-]", "[-]", "[-]", "[-]", ],
    [ "[-]", "[-]", "[-]", "[-]", "[-]", ],
    [ "[-]", "[-]", "[-]", "[-]", "[-]", ],
    [ "[-]", "[-]", "[-]", "[-]", "[-]", ],

]
arrayBattleship[0][0] = "[*]";
arrayBattleship[1][1] = "[*]";
arrayBattleship[4][3] = "[*]";

let shipsLeft = 3;
let shotCount = 0;

console.log("Enter row and colum to sink ships, for example '2 3' ");
console.table(arrayBattleship);

process.stdin.on("data", function(userInput){

    let coordinates = userInput.toString().split(" ");
    let row = Number(coordinates[0]) -1;
    let col = Number(coordinates[1]) -1;
    
    shotCount = shotCount + 1;

    if(arrayBattleship[row][col] === "[*]"){
        console.log("Ship Hit!");
        arrayBattleship[row][col] = "[X]";
        shipsLeft = shipsLeft - 1;
        
        if(shipsLeft === 0){
            console.log("All ships destroyed! You won!");
            console.log("You needed " + shotCount + " shots.");
            process.exit();
        }
        
    }else{
        console.log("Waterrr!");
        arrayBattleship[row][col] = "[~]";
    }

    console.log("Ships left: " + shipsLeft);
    console.log("Shots: " + shotCount);
    console.table(arrayBattleship);
})