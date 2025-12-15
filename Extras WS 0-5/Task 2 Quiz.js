/*
Task 2: Quiz
Create a quiz with the following functionality:
• Questions are hard coded into an array.
• Keep score
• Randomize questions
• Create multiple choice questions
• Randomize options as well
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hardcoded questions array
const questions = [
  {
    question: "Who's the president of OAMK?",
    options: [
      "Random person",
      "Random person",
      "Heidi Fagerholm",
      "Random person"
    ],
    answer: "Heidi Fagerholm"
  },
  {
    question: "What is the capital of Finland?",
    options: [
      "Helsinki",
      "Oulu",
      "Tampere",
      "Turku"
    ],
    answer: "Helsinki"
  }
];

// Shuffle array helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions
shuffle(questions);

let score = 0;
let current = 0;

function askQuestion() {
  if (current >= questions.length) {
    console.log(`Quiz finished! Your score: ${score}/${questions.length}`);
    rl.close();
    return;
  }
  const q = questions[current];
  // Shuffle options
  const options = [...q.options];
  shuffle(options);

  console.log(`\n${q.question}`);
  options.forEach((opt, idx) => {
    console.log(`${String.fromCharCode(97 + idx)}) ${opt}`);
  });

  rl.question('Your answer (a, b, c, d): ', (answer) => {
    const idx = answer.toLowerCase().charCodeAt(0) - 97;
    if (options[idx] === q.answer) {
      console.log("You're correct!");
      score++;
    } else {
      console.log(`You are wrong! The correct answer is ${q.answer}`);
    }
    current++;
    askQuestion();
  });
}

askQuestion();
