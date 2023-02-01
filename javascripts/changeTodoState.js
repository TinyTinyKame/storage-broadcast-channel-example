import { storageChangeTodoState } from "../todos.js";
import updateTodos from "./updateTodos.js";

export default function changeTodoState(ev) {
  const target = ev.target;
  const tabState = storageGetTabState();

  storageChangeTodoState(target.id, target.checked);

  if (!tabState || tabState !== 'all') {
    updateTodos();
  }
}
