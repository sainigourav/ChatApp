import React from "react";
import MsgRhtOut from "../MsgRhtOut";
import "./index.css";

function MessageRight(props) {
  return (
    <div className="msg_right">
          <MsgRhtOut out={props.out} />
        </div>
  );
}

export default MessageRight;
