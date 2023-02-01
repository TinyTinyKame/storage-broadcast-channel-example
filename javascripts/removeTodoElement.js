import { storageDeleteTodo } from "../todos.js";
import changeTodoState from "./changeTodoState.js";

export default function removeTodoElement(ev) {
  const target = ev.target;
  const input = target.nextElementSibling?.firstChild;
  const todoId = input?.id;

  input.removeEventListener('change', changeTodoState);
  storageDeleteTodo(todoId);
  target.removeEventListener('click', removeTodoElement);
  target.parentElement.remove();
}
