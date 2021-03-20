import React from "react";
import MessageLeft from "../MessageLeft";
import MessageRight from "../MessageRight";
import "./index.css";

function MessageBody(props) {
  return (
    <>
    {      
        <div id="hidden_body">
          { 
            props.AllMsg.map(function(value,index){
              if(value.user === props.ActiveUser)
              {
                return <MessageRight key={index} out={value.msg} />
              }
              else{
                return <MessageLeft key={index} out={value.msg} />
              }
          })
          }
    </div>
    }
    </>
  )
}

export default MessageBody;
