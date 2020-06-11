import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div className="todolist">
      {(props.todos &&
        props.todos
          .filter(
            (todo) =>
              props.filter === "all" ||
              (props.filter === "todo" && !todo.checked) ||
              (props.filter === "done" && todo.checked)
          )
          .map((filteredTodo) => (
            <ToDoItem
              handleRemoveTodo={props.handleRemoveTodo}
              key={filteredTodo.id}
              todo={filteredTodo}
              handleCheck={props.handleCheck}
            />
          ))) || <h1>No Todos</h1>}
    </div>
  );
};

export default ToDoList;
