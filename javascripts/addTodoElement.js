import { storageAddTodo } from '../todos.js';
import createTodoElement from './createTodoElement.js';
import generateRandomId from './generateRandomId.js';
import toggleModal from './toggleModal.js';

export default function addTodoElement() {
  const newTodoInput = document.getElementById('new-todo-name');
  const todoName = newTodoInput.value;
  const id = generateRandomId();

  storageAddTodo(id, todoName)
  createTodoElement(id, todoName)
  toggleModal();
  newTodoInput.value = '';
}
