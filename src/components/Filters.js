import React from "react";
import { connect } from "react-redux";
import setFilter from "../redux/actions/filters";

const Filters = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    // props.handleSetFilter(filter);
    props.dispatch(setFilter(filter));
  };

  const styles1 =
    props.filter == "done" ? { fontWeight: "700", color: "purple" } : {};
  const styles2 =
    props.filter == "all" ? { fontWeight: "700", color: "purple" } : {};
  const styles3 =
    props.filter == "todo" ? { fontWeight: "700", color: "purple" } : {};
  return (
    <div>
      <button
        style={styles1}
        onClick={handleClick}
        value="done"
        className="filters"
      >
        Completed
      </button>
      <button
        style={styles2}
        onClick={handleClick}
        value="all"
        className="filters"
      >
        All
      </button>
      <button
        style={styles3}
        onClick={handleClick}
        value="todo"
        className="filters last"
      >
        Pending
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(Filters);
