import React from "react";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="nav-main">
        {/* <div className="top-nav">
          <div className="nav-main-item">
            <i class="fa-solid fa-layer-group active"></i>
            <span>Project</span>
          </div>
          <div className="nav-main-item">
            <i className="fa-solid fa-brain"></i>
            <span>Neural Networks</span>
          </div>
          <div className="nav-main-item">
            <i className="fa-solid fa-globe"></i>
            <span>Templates</span>
          </div>
          <div className="nav-main-item">
            <i className="fa-solid fa-gear"></i>
            <span>Team Settings</span>
          </div>
        </div>
        <div className="bot-nav">
          <div className="nav-main-item">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div> */}

        {/* SideBar */}
        <div className="nav-main-hover collapse-slide-bar">
          {/* page name item in slide bar */}
          <div className="top-nav">
            <div className="nav-main-item active">
              <i className="fa-solid fa-layer-group"></i>
              <span>Project</span>
            </div>
            <div className="nav-main-item">
              <i className="fa-solid fa-brain"></i>
              <span>Neural Networks</span>
            </div>
            <div className="nav-main-item">
              <i className="fa-solid fa-globe"></i>
              <span>Templates</span>
            </div>
            <div className="nav-main-item">
              <i className="fa-solid fa-gear"></i>
              <span>Team Settings</span>
            </div>
          </div>
          {/* width extension */}
          <div className="bot-nav">
            <div className="nav-main-item" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-arrows-left-right-to-line"></i>{" "}
              <span>Expand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
