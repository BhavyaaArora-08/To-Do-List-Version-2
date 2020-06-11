import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/actions/todos";

const AddTodo = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const text = e.target.task.value;
    const val = {
      text,
      checked: false,
      date: moment().format("dddd, DD MMMM YYYY"),
      id: uuidv4(),
    };
    // console.log(val);
    // props.addTodoHandler(val);
    props.dispatch(addTodo(val));
    e.target.task.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit} id="form">
        <input
          type="text"
          name="task"
          id="addTask"
          placeholder="add task"
          autoComplete="off"
        />
        <br />
        <button id="add" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
