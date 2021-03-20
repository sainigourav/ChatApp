import React from "react";
import "./index.css";

function Input(props) {
  return (
    <input onKeyDown={props.onKeyDown} value={props.value} onChange={props.onChange} placeholder="Type a message" />
  );
}

export default Input;
