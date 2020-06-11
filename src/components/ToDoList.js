import React from "react";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";
import selectTodos from "../redux/selectors/selectTodos";

const ToDoList = (props) => {
  return (
    <div className="todolist">
      {(props.todos.length !== 0 &&
        props.todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)) || (
        <p
          style={{
            height: "100%",
            textAlign: "center",
            padding: "10px",
            fontStyle: "italic",
            color: "white",
            backgroundColor: "rgba(253, 29, 173, 0.9)",
          }}
        >
          Add todos to get started!
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: selectTodos(state.todos, state.filter),
  };
};

export default connect(mapStateToProps)(ToDoList);
