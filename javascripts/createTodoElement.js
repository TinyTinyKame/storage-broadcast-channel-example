import generateRandomId from "./generateRandomId.js";
import removeTodoElement from "./removeTodoElement.js";

export default function createTodoElement(todoName) {
  const id = generateRandomId();

  const todo = document.createElement('div');
  todo.classList.add('todo');

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-todo');
  deleteButton.innerHTML = '+';
  deleteButton.addEventListener('click', removeTodoElement);

  const container = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = id;
  input.name = id;

  const label = document.createElement('label');
  label.htmlFor = id;
  label.innerHTML = todoName;

  todo.appendChild(deleteButton);
  container.appendChild(input);
  container.appendChild(label);
  todo.appendChild(container);

  const todoList = document.getElementsByClassName('todo-list')[0];

  todoList.appendChild(todo);
}
