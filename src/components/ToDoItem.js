import React from "react";
import { connect } from "react-redux";
import { removeTodo, editTodo } from "../redux/actions/todos";

const ToDoItem = (props) => {
  const handleRemoveTodo = (e) => {
    e.preventDefault();
    // props.handleRemoveTodo(props.todo.id);
    props.dispatch(removeTodo(props.todo.id));
  };

  const onClick = () => {
    // props.handleCheck(props.todo.id);
    const updates = { checked: !props.todo.checked };
    console.log(updates);
    props.dispatch(editTodo(props.todo.id, updates));
  };

  const styles =
    props.todo.checked == true ? { textDecoration: "line-through" } : {};
  return (
    <div>
      <form onSubmit={handleRemoveTodo} className="todo">
        <span
          onClick={onClick}
          style={{ ...styles, cursor: "pointer" }}
          className="task"
        >
          {props.todo.text}
        </span>
        <span className="farspan">
          <button style={{ background: "transparent", border: "none" }}>
            <i style={{ cursor: "pointer" }} className="far fa-trash-alt"></i>
          </button>
        </span>
      </form>
      <p
        id="doneAt"
        style={{
          fontSize: "10px",
          color: "gray",
          textAlign: "left",
          margin: "0px 20px",
          opacity: "0.8",
          fontStyle: "Italic",
        }}
      >
        {props.todo.date}
      </p>
      <hr
        style={{
          opacity: "0.8",
          width: "80%",
          borderTop: "1px dashed #8c8b8b",
        }}
      ></hr>
    </div>
  );
};

export default connect()(ToDoItem);
