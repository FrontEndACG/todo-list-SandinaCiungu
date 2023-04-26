const todoInput = document.querySelector("#todo-input");
todoInput.addEventListener("input", valideazaInput);

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", adaugaTodo);

const deleteAllTodos = document.querySelector("#delete-all-todos");
deleteAllTodos.addEventListener("click", stergeToateTodo);

const noOfTodos = document.querySelector("#no-of-todos");

function valideazaInput(event) {
  if (event.target.value.length > 0) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
}

function adaugaTodo(event) {
  if (todoInput.value.length > 0 && todoInput.value.trim().length > 0) {
    const lista = document.getElementsByTagName("ul");
    const newTaskLi = document.createElement("li");
    newTaskLi.innerHTML =
      "<span>" +
      todoInput.value +
      '</span><button id="stergere">Sterge</button>';
    lista[0].appendChild(newTaskLi);
    todoInput.value = "";
    addBtn.disabled = true;
    const btnRem = document.querySelectorAll("#stergere");
    for (let i = 0; i <= btnRem.length - 1; i++) {
      btnRem[i].addEventListener("click", stergeTodo);
    }
    const todos = document.querySelectorAll("li");
    noOfTodos.innerHTML = todos.length + " todos";
  } else if (todoInput.value.trim().length == 0) {
    alert("Task gol!");
    todoInput.value = "";
    addBtn.disabled = true;
  }
}

function stergeTodo(event) {
  event.target.parentElement.remove();
  const todos = document.querySelectorAll("li");
  noOfTodos.innerHTML = todos.length + " todos";
}

function stergeToateTodo() {
  const todos = document.querySelectorAll("li");
  for (let i = 0; i <= todos.length - 1; i++) {
    todos[i].remove();
  }
  noOfTodos.innerHTML = "0 todos";
}

/*
--CODUL DE LA CURS
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const deleteAllTodosBtn = document.getElementById("delete-all-todos");

todoInput.addEventListener("input", onInputTodo);
addTodoBtn.addEventListener("click", onAddTodo);
deleteAllTodosBtn.addEventListener("click", onDeleteAll);

function onInputTodo(event) {
  if (event.target.value.length > 0) {
    addTodoBtn.removeAttribute("disabled");
  } else {
    addTodoBtn.setAttribute("disabled", true);
  }
}

function onAddTodo() {
  const todoLi = createTodoLi(todoInput.value);

  if (todoLi) {
    todoList.appendChild(todoLi);
  }
  todoInput.value = "";
  addTodoBtn.setAttribute("disabled", true);

  updateNoOfTodos();
}

function createTodoLi(text) {
  if (text.trim().length === 0) {
    alert("Introduceti un task valid!");
    return;
  }

  const todoLi = document.createElement("li");
  const todoTextSpan = document.createElement("span");
  const deleteTodoBtn = document.createElement("button");

  todoTextSpan.innerHTML = text;
  deleteTodoBtn.innerHTML = "X";

  deleteTodoBtn.addEventListener("click", function (e) {
    e.target.parentNode.remove();
    updateNoOfTodos();
  });

  todoLi.appendChild(todoTextSpan);
  todoLi.appendChild(deleteTodoBtn);

  return todoLi;
}

function onDeleteAll() {
  console.log("test");
  const allTodos = todoList.querySelectorAll("li");
  console.log(allTodos);
  allTodos.forEach((todoLi) => todoLi.remove());
  updateNoOfTodos();
}

function updateNoOfTodos() {
  const noOfTodoContainer = document.getElementById("no-of-todos");
  const noOfTodos = todoList.querySelectorAll("li").length;
  noOfTodoContainer.innerHTML =
    noOfTodos + " " + (noOfTodos == 1 ? "todo" : " todos");
}
*/
