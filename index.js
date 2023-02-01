import addTodoElement from "./javascripts/addTodoElement.js";
import createTodoFromStorage from "./javascripts/createTodoFromStorage.js";
import removeTodoElement from "./javascripts/removeTodoElement.js";
import toggleModal from "./javascripts/toggleModal.js";

const addButton = document.getElementsByClassName('add-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
const modalAddButton = document.getElementsByClassName('modal-add-button')[0];
const deleteTodos = document.getElementsByClassName('delete-todo');
const tabButtons = document.getElementsByClassName('tab-button');

for (const deleteTodo of deleteTodos) {
  deleteTodo.addEventListener('click', removeTodoElement);
}
addButton.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);
modalContainer.addEventListener('click', function (ev) {
  ev.stopPropagation();
});
modalAddButton.addEventListener('click', addTodoElement);

for (const tabButton of tabButtons) {
  tabButton.addEventListener('click', changeTabState);
}

createTodoFromStorage();
setSelectedTab();
