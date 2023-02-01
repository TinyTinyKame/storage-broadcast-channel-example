import { storageGetTodos } from "../todos.js";
import createTodoElement from "./createTodoElement.js";

export default function createTodoFromStorage() {
  const todos = storageGetTodos();

  for (const todo of todos) {
    createTodoElement(todo.id, todo.name, todo.state);
  }
}
