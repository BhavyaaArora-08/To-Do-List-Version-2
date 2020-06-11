import React from "react";

const ToDoItem = (props) => {
  const handleRemoveTodo = (e) => {
    e.preventDefault();
    console.log(e.target);
    props.handleRemoveTodo(props.todo.id);
  };

  const onClick = (e) => {
    console.log(e.target);
    props.handleCheck(props.todo.id);
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

export default ToDoItem;
