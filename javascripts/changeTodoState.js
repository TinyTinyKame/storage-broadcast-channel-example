import { storageChangeTodoState } from "../todos.js";

export default function changeTodoState(ev) {
  const target = ev.target;

  storageChangeTodoState(target.id, target.checked);
}
