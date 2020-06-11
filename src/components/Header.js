import React from "react";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <header id="date">{moment().format("dddd, DD MMMM YYYY")}</header>
      <hr />
      <h1 id="heading">To Do List</h1>
      <br />
      <br />
    </div>
  );
};

export default Header;
