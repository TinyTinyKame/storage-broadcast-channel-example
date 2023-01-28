import createTodoElement from "./createTodoElement.js";
import toggleModal from "./toggleModal.js";

export default function addTodoElement() {
  const newTodoInput = document.getElementById('new-todo-name');
  const todoName = newTodoInput.value;

  createTodoElement(todoName)
  toggleModal();
  newTodoInput.value = '';
}
