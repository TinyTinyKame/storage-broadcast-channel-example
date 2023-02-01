export function storageAddTodo(todoId, todoName) {
  const todos = storageGetTodos();
  const todo = { id: todoId, name: todoName, state: 'ongoing' };

  if (todos.length) {
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    localStorage.setItem('todos', JSON.stringify([todo]));
  }
}

export function storageDeleteTodo(todoId) {
  const todos = storageGetTodos();

  if (todos.length) {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index >= 0) {
      todos.splice(index, 1);

      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}

export function storageChangeTodoState(todoId, done) {
  const todos = storageGetTodos();

  if (todos.length) {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index >= 0) {
      todos[index].state = !!done ? 'done' : 'ongoing';

      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}

export function storageGetTodos() {
  const todos = localStorage.todos;

  if (!!todos) {
    return JSON.parse(todos);
  }

  return [];
}
