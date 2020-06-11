import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import Errors from "./components/Errors";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "Adding a todo ",
          checked: true,
          date: moment().format("dddd, DD MMMM YYYY"),
        },
        {
          id: 2,
          text: "Removing a todo",
          checked: true,
          date: moment().format("dddd, DD MMMM YYYY"),
        },
        {
          id: 3,
          text: "applying filters",
          checked: false,
          date: moment().format("dddd, DD MMMM YYYY"),
        },
        {
          id: 4,
          text: "Strike through a todo",
          checked: false,
          date: moment().format("dddd, DD MMMM YYYY"),
        },
        {
          id: 5,
          text: "Store in localStorage",
          checked: false,
          date: moment().format("dddd, DD MMMM YYYY"),
        },
      ],
      error: "",
      filter: "all",
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);
      console.log(todos);
      if (todos) {
        this.setState({
          todos,
        });
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json);
      console.log(json);
    }
  }

  addTodoHandler = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] }, () => {
      console.log(this.state.todos);
    });
  };

  handleRemoveTodo = (id) => {
    console.log(id);
    const array = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: array });
    console.log(array);
  };

  handleCheck = (id) => {
    const array = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });
    this.setState({ todos: array });
    this.setState({ filter: this.state.filter });
  };

  handleSetFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Filters
          filter={this.state.filter}
          handleSetFilter={this.handleSetFilter}
        />
        <ToDoList
          handleCheck={this.handleCheck}
          handleRemoveTodo={this.handleRemoveTodo}
          todos={this.state.todos}
          filter={this.state.filter}
        />
        <Errors />
        <AddTodo addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
