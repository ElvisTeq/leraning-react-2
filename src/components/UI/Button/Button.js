import React from "react";

import "./Button.css";

// {props.onClick} => "textContent" in <Button></Button>
const Button = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
