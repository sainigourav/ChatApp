import React from "react";
import InputBox from "../InputBox";
import MessageBody from "../MessageBody";
import "./index.css";

function RightBody(props) {
  return (
    <div id="body_two">
      <MessageBody ActiveUser={props.ActiveUser} AllMsg={props.AllMsg} />
      <InputBox onKeyDown={props.onKeyDown} click={props.click} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default RightBody;
