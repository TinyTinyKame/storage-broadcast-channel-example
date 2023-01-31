import { storageGetTabState } from "../tabs.js";
import { storageGetTodos } from "../todos.js";
import createTodoElement from "./createTodoElement.js";

export default function createTodoFromStorage() {
  const todos = storageGetTodos();
  const state = storageGetTabState();

  for (const todo of todos) {
    if (todo.state === state || state === 'ALL' || !state) {
      setTimeout(() => createTodoElement(todo.id, todo.name, todo.state), 0);
    }
  }
}
