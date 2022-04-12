import React from "react";
import Warning from "./Warning.Component";
import SideBar from "./SideBar.Component";
import ProjectHeader from "./projects/ProjectHeader.Component";
import Header from "./Header.Component";
export default function Admin() {
    document.title = "Admin";
  return (
    // Admin page
    <div className="app">
      {/* Warning component */}
      <Warning />
      <div className="main">
       {/* main header at the top of page */}
        <Header />
        <div className="content">
          {/* side bar at the left of page */}
          <SideBar />
          <div className="content-revert">
            {/* Main content in Data component */}
            <ProjectHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
