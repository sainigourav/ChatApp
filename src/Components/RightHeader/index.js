import React from "react";
import RightHeaderOne from "../RightHeaderOne";
import "./index.css";

function RightHeader(props) {
  return (
    <div id="header_two">
    <RightHeaderOne ActiveUser={props.ActiveUser} />
  </div>
  );
}

export default RightHeader;
