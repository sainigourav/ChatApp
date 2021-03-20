import React from 'react';
import Image from "../Images/user.jpg";
import "./index.css";

function LeftBodyItem(props) {
  return (
    <>
    {
      props.User.map(function(data,index){
        if(data === props.ActiveUser){
          return <div key={index} onClick={props.DivClick} className="user selected">
        <img src={Image} alt={data}/> {data}
        </div>
        }
        else{
          return <div key={index} onClick={props.DivClick} className="user">
        <img src={Image} alt={data}/> {data}
        </div>
        }        
      })
      }
    </>
  );
}

export default LeftBodyItem;

                