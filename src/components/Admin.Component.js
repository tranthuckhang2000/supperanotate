import React from "react";
import Warning from "./Warning.Component";
import SideBar from "./SideBar.Component";
import ProjectHeader from "./projects/ProjectHeader.Component";
import Header from "./Header.Component";
export default function Admin() {
    document.title = "Admin";
  return (
    <div className="app">
      <Warning />
      <div className="main">
        <Header />
        <div className="content">
          <SideBar />
          <div className="content-revert">
            <ProjectHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
