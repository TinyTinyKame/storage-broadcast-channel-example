import createTodoFromStorage from "./createTodoFromStorage.js";

export default function updateTodos() {
  const todos = document.getElementsByClassName('todo');

  for (const todo of todos) {
    setTimeout(() => todo.remove(), 0);
  }

  createTodoFromStorage();
}
