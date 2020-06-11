const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          const newTodo = {
            ...todo,
            ...action.updates,
          };
          return newTodo;
        } else {
          return todo;
        }
      });
    }
    default:
      return state;
  }
};
