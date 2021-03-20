import React from "react";
import WhiteMsg from "../WhiteMsg";
import "./index.css";

function MessageLeft(props) {
  return (
    <div className="msg_left">
          <div className="msg_l_out">
            <WhiteMsg out={props.out} />
            <span>4:00 PM</span>
          </div>
        </div>
  );
}

export default MessageLeft;
