import React from "react";
import RightBody from "../RightBody";
import RightHeader from "../RightHeader";
import "./index.css";

function RightContainer(props) {
  console.log(props);
  return (
    <div id="container_two">
      <RightHeader ActiveUser={props.ActiveUser} />
      <RightBody ActiveUser={props.ActiveUser} AllMsg={props.AllMsg} onKeyDown={props.onKeyDown} click={props.click} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default RightContainer;
