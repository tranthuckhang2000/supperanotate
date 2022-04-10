import React from "react";
import logo from "../assets/images/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="information">
        <div className="information-left">
          <div className="web-icon">
            <img src={logo} alt="icon web"></img>
          </div>
          <div className="des">
            <span className="text-des">
              <span>My Team</span>
              <span className="team-owner">Team Owner</span>
            </span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="information-right">
          <img
            className="my"
            src="https://lh3.googleusercontent.com/ogw/ADea4I4US_8oTLAFipzbqDxaCPLqipm0A4j2GzbiINRV=s32-c-mo"
            alt="icon web"
          ></img>
        </div>
      </div>
    </div>
  );
}
