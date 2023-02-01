export const TODO_STATES = {
  ongoing: 'ONGOING',
  done: 'DONE',
};

export function storageAddTodo(todoId, todoName) {
  const todos = storageGetTodos();
  const todo = { id: todoId, name: todoName, state: TODO_STATES.ongoing };

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));
}

export function storageDeleteTodo(todoId) {
  const todos = storageGetTodos();

  const index = todos.findIndex(todo => todo.id === todoId);

  if (index >= 0) {
    todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export function storageChangeTodoState(todoId, done) {
  const todos = storageGetTodos();

  const index = todos.findIndex(todo => todo.id === todoId);

  if (index >= 0) {
    todos[index].state = !!done ? TODO_STATES.done : TODO_STATES.ongoing;

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export function storageGetTodos() {
  const todos = localStorage.getItem('todos');

  if (!!todos) {
    return JSON.parse(todos);
  }

  return [];
}
