import { storageChangeTabState } from "../tabs.js";
import setSelectedTab from "./setSelectedTab.js";
import updateTodos from "./updateTodos.js";

export default function changeTabState(ev) {
  const target = ev.target;
  const id = target.id;

  storageChangeTabState(id);
  setSelectedTab()
  updateTodos();
}
