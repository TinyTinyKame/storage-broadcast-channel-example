import addTodoElement from "./javascripts/addTodoElement.js";
import removeTodoElement from "./javascripts/removeTodoElement.js";
import toggleModal from "./javascripts/toggleModal.js";

const addButton = document.getElementsByClassName('add-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
const modalAddButton = document.getElementsByClassName('modal-add-button')[0];
const deleteTodos = document.getElementsByClassName('delete-todo');

for (const deleteTodo of deleteTodos) {
  deleteTodo.addEventListener('click', removeTodoElement);
}
addButton.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);
modalContainer.addEventListener('click', function (ev) {
  ev.stopPropagation();
});
modalAddButton.addEventListener('click', addTodoElement);
