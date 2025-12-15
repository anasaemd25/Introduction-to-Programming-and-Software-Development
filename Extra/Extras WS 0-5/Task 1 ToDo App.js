/*
Task 1: ToDo App
Create a simple ToDo app. You can define the features and UI.
Examples of features:
• Print menu
• Add task
• Print tasks
• Remove task
• Print today’s tasks
• Tasks can have name, priority, due date etc.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function printMenu() {
  console.log('\n--- ToDo App ---');
  console.log('1. Agregar tarea');
  console.log('2. Ver tareas');
  console.log('3. Eliminar tarea');
  console.log('4. Salir');
}

function addTask() {
  rl.question('Nombre de la tarea: ', (name) => {
    tasks.push({ name });
    console.log('Tarea agregada.');
    main();
  });
}

function printTasks() {
  if (tasks.length === 0) {
    console.log('No hay tareas.');
  } else {
    tasks.forEach((task, i) => {
      console.log(`${i + 1}. ${task.name}`);
    });
  }
  main();
}

function removeTask() {
  printTasks();
  rl.question('Número de tarea a eliminar: ', (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Número inválido.');
    }
    main();
  });
}

function main() {
  printMenu();
  rl.question('Elige una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        printTasks();
        break;
      case '3':
        removeTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        main();
    }
  });
}

main();

