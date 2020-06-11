import React from "react";

const Filters = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    console.log(filter);
    props.handleSetFilter(filter);
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

export default Filters;
