import React from 'react';
import LeftBodyItem from '../LeftBodyItem';
import "./index.css";

function LeftBody(props) {
  return (
    <>
        <div id="body_one">
            <LeftBodyItem ActiveUser={props.ActiveUser} User={props.User} DivClick={props.DivClick}/>
        </div>
    </>
  );
}

export default LeftBody;
