export function storageAddTodo(todoId, todoName) {
  const todos = storageGetTodos();
  const todo = { id: todoId, name: todoName, state: 'ongoing' };

  if (todos.length) {
    todos.push(todo);

    localStorage.todos = JSON.stringify(todos);
  } else {
    localStorage.todos = JSON.stringify([todo]);
  }
}

export function storageDeleteTodo(todoId) {
  const todos = storageGetTodos();

  if (todos.length) {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index >= 0) {
      const newTodos = todos.slice(index, 1);

      localStorage.todos = JSON.stringify(newTodos);
    }
  }
}

export function storageChangeTodoState(todoId, done) {
  const todos = storageGetTodos();

  if (todos.length) {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index >= 0) {
      todos[index].state = !!done ? 'done' : 'ongoing';

      localStorage.todos = JSON.stringify(todos);
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
