import { v4 as uuidv4 } from "uuid";

// ADD_TODO
export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
  };
};

// REMOVE_TODO
export const removeTodo = (todo_id) => {
  return {
    type: "REMOVE_TODO",
    id: todo_id,
  };
};

// EDIT_TODO
export const editTodo = (id, updates) => {
  return {
    type: "EDIT_TODO",
    id,
    updates,
  };
};
