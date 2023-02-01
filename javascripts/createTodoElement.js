import changeTodoState from "./changeTodoState.js";
import removeTodoElement from "./removeTodoElement.js";

export default function createTodoElement(todoId, todoName, todoState) {
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
  input.id = todoId;
  input.name = todoId;
  input.checked = todoState === 'done';
  input.addEventListener('change', changeTodoState);

  const label = document.createElement('label');
  label.htmlFor = todoId;
  label.innerHTML = todoName;

  todo.appendChild(deleteButton);
  container.appendChild(input);
  container.appendChild(label);
  todo.appendChild(container);

  const todoList = document.getElementsByClassName('todo-list')[0];

  todoList.appendChild(todo);
}
