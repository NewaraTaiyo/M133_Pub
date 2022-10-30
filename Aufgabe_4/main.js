import {ToDo} from "./todo.js";

let toDos = [
  new ToDo("Zugticket kaufen", false),
  new ToDo("Wäsche waschen", true),
  new ToDo("Hausaufgaben machen", true),
];

function updateToDoListOnScreen() {
  const todoListElement = document.getElementById("todolist");

  // Liste leeren
  todoListElement.innerHTML = "";

  // ToDo's einfügen
  for (const toDo of toDos) {
    const toDoListEntry = toDo.element();
    todoListElement.appendChild(toDoListEntry);
  }

  // offene ToDo's
  const openToDos = toDos.filter((offen) => !offen.done);
  const elementAmount = document.getElementById('anzahl');
  elementAmount.textContent = `${openToDos.length} ToDo's offen`;
}

document.addEventListener("DOMContentLoaded", (event) => {
  updateToDoListOnScreen();

  const newToDo = document.getElementById("neuesToDo");
  newToDo.addEventListener('keydown', (event) => {
    if(event.code == 'Enter' && newToDo.value.length > 0){
      const toDo = new ToDo(newToDo.value, false);
      toDos.push(toDo);

      newToDo.value = '';

      toDo.addEventListener('loeschen', () => {
        const index = toDos.indexOf(toDo);
        toDos.splice(index, 1);
        updateToDoListOnScreen();
      });

      updateToDoListOnScreen();
    }

  })
});

document.getElementById('aufraeumen').addEventListener('click', () => {
  Array.from(toDos).forEach((toDo) => {
    if (toDo.getDone){
      const index = toDos.indexOf(toDo);
      console.log("Loesche: " + toDo.getTitle);
      toDos.splice(index, 1);
    }
  });

  updateToDoListOnScreen();
});
