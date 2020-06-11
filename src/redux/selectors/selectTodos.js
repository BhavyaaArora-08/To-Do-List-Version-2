export default (todos, filter) => {
  if (filter === "all") {
    return todos;
  } else if (filter === "done") {
    return todos.filter((todo) => todo.checked === true);
  } else {
    return todos.filter((todo) => todo.checked === false);
  }
};
