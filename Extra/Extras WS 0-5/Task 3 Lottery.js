/*
Task 3: Lottery
Create code to get random lottery numbers. Rules:
• Seven numbers are picked randomly.
• Range of numbers is 1-40.
• Each number can only be picked once.
*/

function getLotteryNumbers() {
  let numbers = [];
  while (numbers.length < 7) {
    let n = Math.floor(Math.random() * 40) + 1;
    if (!numbers.includes(n)) {
      numbers.push(n);
    }
  }
  return numbers.sort((a, b) => a - b);
}

let lotteryNumbers = getLotteryNumbers();
console.log("Lottery numbers:", lotteryNumbers.join(", "));