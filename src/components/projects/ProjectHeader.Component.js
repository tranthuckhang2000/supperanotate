import React from "react";
import Data from "./Data.Component";

export default function ProjectHeader() {
  const navArray = [
    //   {name: "Data", link:""},
    { name: "Classes", link: "" },
    { name: "Analytic", link: "" },
    { name: "Contributors", link: "" },
    { name: "Settings", link: "" },
    { name: "Download", link: "" },
    { name: "Workflow", link: "" },
  ];
  return (
    <div className="project-header">
      <div className="project-header-top-bar">
        <div className="content-header-top-bar">
          <div className="item-nav">
            <a className="available" href="#" alt="project">
              Project
            </a>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="item-nav">
            <a className="available" href="#" alt="project">
              Tennis Racket
            </a>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="item-nav">
            <a href="#" alt="project">
              Data
            </a>
            {/* <i className="fa-solid fa-chevron-right"></i> */}
          </div>
        </div>
        <div className="add-new-btn">
          <i className="fa-solid fa-plus"></i>
          <label>Add</label>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="project-header-navbar">
        <div className="nav-item active">
          <a href="" alt="">
            Data
          </a>
        </div>
        {navArray.map((item) => (
          <div className="nav-item">
            <a href={item.linl} alt="">
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="project-content">
        <Data/>

      </div>
    </div>
  );
}
