const addButton = document.getElementsByClassName('add-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
const modalAddButton = document.getElementsByClassName('modal-add-button')[0];
const todoList = document.getElementsByClassName('todo-list')[0];
const newTodoInput = document.getElementById('new-todo-name');
const deleteTodos = document.getElementsByClassName('delete-todo');

for (const deleteTodo of deleteTodos) {
  deleteTodo.addEventListener('click', removeTodo);
}
addButton.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);
modalContainer.addEventListener('click', function (ev) {
  ev.stopPropagation();
});
modalAddButton.addEventListener('click', addTodo);
createTodoFromStorage();

function generateRandomId() {
  return (Math.random() + 1).toString(36).substring(7);
}

function toggleModal() {
  const isHidden = modal.classList.contains('hidden');

  if (isHidden) {
    modal.classList.remove('behind');
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    setTimeout(() => modal.classList.add('behind'), 100);
  }
}

function removeTodo(ev) {
  const target = ev.target;
  const input = target.nextElementSibling?.firstChild;
  const todoId = input?.id;

  input.removeEventListener('change', changeTodoState);
  storageDeleteTodo(todoId);
  target.removeEventListener('click', removeTodo);
  target.parentElement.remove();
}

function changeTodoState(ev) {
  const target = ev.target;

  storageChangeTodoState(target.id, target.checked);
}

function createTodo(todoId, todoName, todoState) {
  const todo = document.createElement('div');
  todo.classList.add('todo');

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-todo');
  deleteButton.innerHTML = '+';
  deleteButton.addEventListener('click', removeTodo);

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

  todoList.appendChild(todo);
}

function createTodoFromStorage() {
  const todos = storageGetTodos();

  for (const todo of todos) {
    createTodo(todo.id, todo.name, todo.state);
  }
}

function addTodo() {
  const todoName = newTodoInput.value;
  const id = generateRandomId();

  storageAddTodo(id, todoName)
  createTodo(id, todoName)
  toggleModal();
  newTodoInput.value = '';
}
