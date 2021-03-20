import React from "react";
import RhtHdOnLeName from "../RhtHdOnLeName";
import Image from "../Images/user.jpg";
import "./index.css";

function RightHeaderOneLeft(props) {
  return (
    <div id="content_left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#fff"
          className="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <img src={Image} alt="user" />
        <div>
          <RhtHdOnLeName ActiveUser={props.ActiveUser} />
          <br />
          <span style={{fontSize:"12px",fontWeight:50,fontFamily: "'PT Sans Caption', sans-serif",position: "relative",top: "15px"}}>
            online
          </span>
        </div>
      </div>
  );
}

export default RightHeaderOneLeft;
