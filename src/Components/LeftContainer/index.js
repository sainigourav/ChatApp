import React from 'react';
import LeftBody from '../LeftBody';
import LeftHeader from '../LeftHeader';
import "./index.css";

function LeftContainer(props) {
  return (
            <div id="container_one">
                <LeftHeader/>
                <LeftBody ActiveUser={props.ActiveUser} User={props.User} DivClick={props.DivClick} />
            </div>
  );
}

export default LeftContainer;
