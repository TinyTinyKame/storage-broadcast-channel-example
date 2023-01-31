import { storageAddTodo } from "../todos.js";
import Channel, { MESSAGE_TYPES } from "../broadcast.js";
import createTodoElement from "./createTodoElement.js";
import generateRandomId from "./generateRandomId.js";
import toggleModal from "./toggleModal.js";

export default function addTodoElement() {
  const newTodoInput = document.getElementById('new-todo-name');
  const todoName = newTodoInput.value;
  const id = generateRandomId();

  storageAddTodo(id, todoName);
  createTodoElement(id, todoName);
  Channel.sendMessage({
    type: MESSAGE_TYPES.addTodo,
    todoId: id,
    todoName,
  });
  toggleModal();
  newTodoInput.value = '';
}
