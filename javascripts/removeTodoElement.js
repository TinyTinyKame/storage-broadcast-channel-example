import Channel, { MESSAGE_TYPES } from "../broadcast.js";
import changeTodoState from "./changeTodoState.js";
import { storageDeleteTodo } from "../todos.js";

export default function removeTodoElement(ev) {
  const target = ev.target;
  const input = target.nextElementSibling?.firstChild;
  const todoId = input?.id;

  Channel.sendMessage({
    type: MESSAGE_TYPES.removeTodo,
    todoId,
  });
  input.removeEventListener('change', changeTodoState);
  storageDeleteTodo(todoId);
  target.removeEventListener('click', removeTodoElement);
  target.parentElement.remove();
}
