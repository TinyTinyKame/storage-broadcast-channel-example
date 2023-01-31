import { storageGetTabState } from "./tabs.js";
import { TODO_STATES } from "./todos.js";
import createTodoElement from "./javascripts/createTodoElement.js";

export const MESSAGE_TYPES = {
  addTodo: "ADD_TODO",
  removeTodo: "REMOVE_TODO",
  updateTodo: "UPDATE_TODO",
};

class TabCommunication {
  constructor() {
    this.bc = new BroadcastChannel('storage-broadcast-channel-example');

    this.bc.onmessage = (event) => {
      const type = event?.data?.type;
      const todoId = event?.data?.todoId;
      const todoName = event?.data?.todoName;
      const todoState = event?.data?.todoState;
      const todoIdInput = document.getElementById(todoId);
      const tabState = storageGetTabState();

      switch (type) {
        case MESSAGE_TYPES.removeTodo:
          if (!!todoIdInput) {
            todoIdInput.parentElement.parentElement.remove();
          }

          break;
        case MESSAGE_TYPES.addTodo:
          if (tabState === 'ALL' || tabState === TODO_STATES.ongoing) {
            createTodoElement(todoId, todoName);
          }

          break;
        case MESSAGE_TYPES.updateTodo:
          switch (tabState) {
            case TODO_STATES.ongoing:
            case TODO_STATES.done:
              if (todoState === tabState) {
                createTodoElement(todoId, todoName);

                break;
              } else if (!!todoIdInput) {
                todoIdInput.parentElement.parentElement.remove();

                break;
              }
            default:
              if (!!todoIdInput) {
                if (todoState === TODO_STATES.ongoing) {
                  todoIdInput.checked = undefined;
                } else {
                  todoIdInput.checked = true;
                }
              }
              break;
          }

          break;
        default:
          console.log(event.data);
      }
    }
  }

  sendMessage(message) {
    this.bc.postMessage(message);
  }
}

export default new TabCommunication();
