import Channel, { MESSAGE_TYPES } from "../broadcast.js";
import { storageGetTabState } from "../tabs.js";
import { TODO_STATES, storageChangeTodoState } from "../todos.js";
import updateTodos from "./updateTodos.js";

export default function changeTodoState(ev) {
  const target = ev.target;
  const tabState = storageGetTabState();
  const todoName = target.nextElementSibling.innerHTML;

  storageChangeTodoState(target.id, target.checked);
  Channel.sendMessage({
    type: MESSAGE_TYPES.updateTodo,
    todoId: target.id,
    todoName,
    todoState: target.checked ? TODO_STATES.done : TODO_STATES.ongoing
  });

  if (!tabState || tabState !== 'ALL') {
    updateTodos();
  }
}
