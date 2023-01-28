const addButton = document.getElementsByClassName('add-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
const modalAddButton = document.getElementsByClassName('modal-add-button')[0];
const todoList = document.getElementsByClassName('todo-list')[0];
const newTodoInput = document.getElementById('new-todo-name');
const deleteTodos = document.getElementsByClassName('delete-todo');
const tabButtons = document.getElementsByClassName('tab-button');

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
setSelectedTab();
for (const tabButton of tabButtons) {
  tabButton.addEventListener('click', changeTabState);
}

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
  const tabState = storageGetTabState();

  storageChangeTodoState(target.id, target.checked);

  if (!tabState || tabState !== 'all') {
    updateTodos();
  }
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
  const state = storageGetTabState();

  for (const todo of todos) {
    if (todo.state === state || state === 'all' || !state) {
      setTimeout(() => createTodo(todo.id, todo.name, todo.state), 0);
    }
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

function updateTodos() {
  const todos = document.getElementsByClassName('todo');

  for (const todo of todos) {
    setTimeout(() => todo.remove(), 0);
  }

  createTodoFromStorage();
}

function changeTabState(ev) {
  const target = ev.target;
  const id = target.id;

  storageChangeTabState(id);
  setSelectedTab()
  updateTodos();
}

function setSelectedTab() {
  const tabState = storageGetTabState();

  for (const tabButton of tabButtons) {
    if (tabButton.id === tabState || (!tabState && tabButton.id === 'all')) {
      tabButton.classList.add('selected');
    } else {
      tabButton.classList.remove('selected');
    }
  }
}
