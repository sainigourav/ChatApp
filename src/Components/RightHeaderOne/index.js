import React from "react";
import RightHeaderOneLeft from "../RightHeaderOneLeft";
import RightHeaderOneRight from "../RightHeaderOneRight";
import "./index.css";

function RightHeaderOne(props) {
  return (
    <div id="inner_header">
     <RightHeaderOneLeft ActiveUser={props.ActiveUser} />
     <RightHeaderOneRight/>
    </div>
  );
}

export default RightHeaderOne;
