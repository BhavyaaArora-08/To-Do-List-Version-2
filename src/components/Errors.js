import React from "react";

const Errors = (props) => {
  return (
    <div>
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Errors;
