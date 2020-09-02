import React from "react";
import "./style.css";

function UpdateBtn(props) {
  return (
    <button
      className="update-btn btn btn-success"
      {...props}
      role="button"
      tabIndex="0"
    >
      Update
    </button>
  );
}

export default UpdateBtn;
