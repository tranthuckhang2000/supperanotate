import React, { useState, useEffect } from "react";
import picker from "../assets/images/picker.svg";
import img1 from "../assets/images/imageEditor.png";
import img3 from "../assets/images/products/1.jpg";
import img2 from "../assets/images/products/2.jpg";
export default function Editor() {
  const [brightNess, setBrightNess] = useState(20);
  const [fill, setFill] = useState(50);
  const [contract, setContract] = useState(50);

  // image is being edited
  const [imageEditor, setImageEditor] = useState(img1);

  // const onChangeBrightNess = (value) => {
  //   return value + "px";
  // };
  // useEffect(() => {}, [brightNess]);

  //   const handleOnChangeBrightNess = (value) => {
  //     this.setBrightNess(value);
  //   };
  //   const handleOnChangeFill = (value) => {
  //     this.setFill(value);
  //   };

  // name title page
  document.title = "Vector";

  return (
    // Image editor page
    <div className="app">
      <div className="editor">
        {/* Top navigation */}
        <div className="header-editor">
          <a className="tool-item home" href="/">
            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
          </a>
          <div className="tool-item rotate">
            <i
              style={{ color: "#a9a9a9" }}
              className="fa-solid fa-rotate-left"
            ></i>
            <i
              style={{ color: "#a9a9a9" }}
              className="fa-solid fa-rotate-right"
            ></i>
            <i className="fa-solid fa-arrows-spin"></i>
          </div>
          <div className="tool-item sessions-tool">
            <i className="fa-solid fa-eye"></i>
            <div className="tags">
              <i className="fa-solid fa-tags"></i>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <i className="fa-solid fa-message"></i>
          </div>
          <div className="tool-item link">
            <i className="fa-solid fa-link"></i>
            <i className="fa-solid fa-paperclip"></i>
          </div>
          <div className="tool-item slider-toolbar">
            <div id="brightness" className="slider-item">
              <label>Brightness: {brightNess}%</label>
              <input
                className="slider"
                type="range"
                min={0}
                max={100}
                value={brightNess}
                onChange={(e) => {
                  setBrightNess(e.target.value);
                }}
              />
              <div
                id="progressBrightNess"
                style={{ width: brightNess + "px" }}
              ></div>
            </div>
            <div id="fill" className="slider-item" style={{ margin: "0 10px" }}>
              <label>Fill: {fill}%</label>
              <input
                className="slider"
                type="range"
                min={0}
                max={100}
                value={fill}
                onChange={(e) => {
                  setFill(e.target.value);
                }}
              />
              <div id="progressFill" style={{ width: fill + "px" }}></div>
            </div>
            <div id="contract" className="slider-item">
              <label>Contract: {contract}%</label>
              <input
                className="slider"
                type="range"
                min={0}
                max={100}
                value={contract}
                onChange={(e) => {
                  setContract(e.target.value);
                }}
              />
              <div
                id="progressContract"
                style={{ width: contract + "px" }}
              ></div>
            </div>
            {/* <input type="range" min="1" max="200" value="50" /> */}
          </div>
          <div className="tool-item time-clock" style={{ borderRight: 0 }}>
            <span>02:</span>
            <span>02:</span>
            <span>02</span>
          </div>
          <div className="tool-extra schedule">
            <div className="content">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="content complete">
              <i className="fa-solid fa-circle-check"></i>
              <p>Complete</p>
            </div>
          </div>
        </div>
        {/* Main image editor page */}
        <div className="main-editor">
          {/* Left navigation in main page */}
          <div className="left-content">
            <ul>
              <li>
                <i className="fa-solid fa-arrow-pointer"></i>
              </li>
              <li>
                <i className="fa-solid fa-maximize"></i>{" "}
              </li>
              <li>
                <i className="fa-regular fa-building"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-vector-square"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-bezier-curve"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-circle-notch"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-crosshairs"></i>{" "}
              </li>
              <li>
                <i className="fa-regular fa-building"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-bezier-curve"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-ruler"></i>{" "}
              </li>
              <div className="separate"></div>
              <li>
                <i className="fa-solid fa-pen"></i>{" "}
              </li>
              <li>
                <i className="fa-solid fa-fill"></i>{" "}
              </li>
              <li>
                <i className="fa-regular fa-comment-dots"></i>{" "}
              </li>
              <li>
                <i className="fa-regular fa-closed-captioning"></i>{" "}
              </li>
              <div className="separate"></div>
              <div className="imgClass" style={{ marginBottom: 8 }}>
                <img src={picker} alt="picker" />
              </div>
              <div className="separate" style={{ height: 0.5 }}></div>
              <li>
                <i className="fa-regular fa-square-plus"></i>{" "}
              </li>
              <li>
                <i className="fa-regular fa-square-plus"></i>{" "}
              </li>
              <div className="separate"></div>
              <div className="qa">
                <p>QA</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
              </div>
            </ul>
            <div className="bot-left-content">
              <i className="fa-solid fa-keyboard"></i>
              <i className="fa-solid fa-file"></i>
            </div>
          </div>
          {/* image is being edited */}
          <div className="mid-content">
            <div
              className="main-image"
              style={{ backgroundImage: `url(${imageEditor})` }}
            ></div>
            {/* change image is being edited slider*/}
            <div className="other-image">
              <div className="top-other">
                <div className="left">
                  <div className="item-top-other">
                    <i className="fa-solid fa-angles-down"></i>
                  </div>
                  <div className="item-top-other mat-input-element">
                    <i className="fa-solid fa-film"></i>
                    <label>1</label>
                  </div>
                  <div className="item-top-other div-icon">
                    <label>/2</label>
                    <i className="fa-solid fa-info"></i>
                  </div>
                  <div className="item-top-other pre-next">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                  <div className="item-top-other pre-next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="right">
                  <div className="item-top-other">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                  <div className="item-top-other">
                    <i className="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
              {/* image item in slider */}
              <div className="slider-image">
                <div className="image-item active">
                  <img src={img3} alt="img1" style={{ width: "220px" }} />
                </div>
                <div className="image-item">
                  <img src={img2} alt="img2" />
                </div>
              </div>
            </div>
          </div>
          {/* toggle component to toggle right component */}
          <div className="toggle-right-content">
            <div className="icon-toggle">
              <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
          {/* right component */}
          <div className="right-content">
            {/* top function in right component */}
            <div className="top-action">
              <i className="fa-solid fa-trash-can"></i>
              <i className="fa-solid fa-minimize"></i>
              <i className="fa-solid fa-bars"></i>
            </div>
            {/* ChooseClass component */}
            <div className="choose-class">
              {/* ChooseClass item component */}
              <div className="item-class">
                {/* top item */}
                <div className="top">
                  <div className="item-detail eye">
                    <div className="icon-eye">
                      <i class="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  <div className="item-detail main-action">
                    <div className="choose-class">
                      <div className="input-with-toggle">
                        <input
                          type="text"
                          placeholder="Choose a class..."
                        ></input>
                        <div className="toggle-show">
                          <p>1</p>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="action">
                        <i className="fa-solid fa-check"></i>
                        <i className="fa-solid fa-tag"></i>
                        <i className="fa-solid fa-lock"></i>
                        <i className="fa-solid fa-x"></i>
                      </div>
                    </div>
                  </div>
                  <div className="item-detail toggle">
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                </div>
                {/* bottom item */}
                <div className="bot">
                  <div className="instance">
                    <div className="bk-instance"></div>
                  </div>
                  <div className="instance-header">
                    <div className="instance-bk"></div>
                  </div>
                  <div className="main-instance">
                    <div className="instance-eye">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="instance-main-icon">
                      <p>Polygon</p>
                      <i className="fa-solid fa-check"></i>
                      <i className="fa-solid fa-tag"></i>
                      <i className="fa-solid fa-lock"></i>
                      <i className="fa-solid fa-x"></i>
                      <i className="fa-solid fa-thumbs-down greyText"></i>
                      <i className="fa-solid fa-thumbs-up greyText"></i>
                      <label>⋮</label>
                    </div>
                  </div>
                  <div className="instance-toggler">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              {/* ChooseClass item component */}
              <div className="item-class">
                <div className="top">
                  <div className="item-detail eye">
                    <div className="icon-eye">
                      <i class="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  <div className="item-detail main-action">
                    <div className="choose-class">
                      <div className="input-with-toggle">
                        <input
                          type="text"
                          placeholder="Choose a class..."
                        ></input>
                        <div className="toggle-show">
                          <p>1</p>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="action">
                        <i className="fa-solid fa-check"></i>
                        <i className="fa-solid fa-tag"></i>
                        <i className="fa-solid fa-lock"></i>
                        <i className="fa-solid fa-x"></i>
                      </div>
                    </div>
                  </div>
                  <div className="item-detail toggle">
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                </div>
                <div className="bot">
                  <div className="instance">
                    <div className="bk-instance"></div>
                  </div>
                  <div className="instance-header">
                    <div className="instance-bk"></div>
                  </div>
                  <div className="main-instance">
                    <div className="instance-eye">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="instance-main-icon">
                      <p>Polygon</p>
                      <i className="fa-solid fa-check"></i>
                      <i className="fa-solid fa-tag"></i>
                      <i className="fa-solid fa-lock"></i>
                      <i className="fa-solid fa-x"></i>
                      <i className="fa-solid fa-thumbs-down greyText"></i>
                      <i className="fa-solid fa-thumbs-up greyText"></i>
                      <label>⋮</label>
                    </div>
                  </div>
                  <div className="instance-toggler">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              {/* ChooseClass item component */}
              <div className="item-class">
                <div className="top">
                  <div className="item-detail eye">
                    <div className="icon-eye">
                      <i class="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  <div className="item-detail main-action">
                    <div className="choose-class">
                      <div className="input-with-toggle">
                        <input
                          type="text"
                          placeholder="Choose a class..."
                        ></input>
                        <div className="toggle-show">
                          <p>1</p>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="action">
                        <i className="fa-solid fa-check"></i>
                        <i className="fa-solid fa-tag"></i>
                        <i className="fa-solid fa-lock"></i>
                        <i className="fa-solid fa-x"></i>
                      </div>
                    </div>
                  </div>
                  <div className="item-detail toggle">
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                </div>
                <div className="bot">
                  <div className="instance">
                    <div className="bk-instance"></div>
                  </div>
                  <div className="instance-header">
                    <div className="instance-bk"></div>
                  </div>
                  <div className="main-instance">
                    <div className="instance-eye">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="instance-main-icon">
                      <p>Polygon</p>
                      <i className="fa-solid fa-check"></i>
                      <i className="fa-solid fa-tag"></i>
                      <i className="fa-solid fa-lock"></i>
                      <i className="fa-solid fa-x"></i>
                      <i className="fa-solid fa-thumbs-down greyText"></i>
                      <i className="fa-solid fa-thumbs-up greyText"></i>
                      <label>⋮</label>
                    </div>
                  </div>
                  <div className="instance-toggler">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              {/* ChooseClass item component */}
              <div className="item-class">
                <div className="top">
                  <div className="item-detail eye">
                    <div className="icon-eye">
                      <i class="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  <div className="item-detail main-action">
                    <div className="choose-class">
                      <div className="input-with-toggle">
                        <input
                          type="text"
                          placeholder="Choose a class..."
                        ></input>
                        <div className="toggle-show">
                          <p>1</p>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                      <div className="action">
                        <i className="fa-solid fa-check"></i>
                        <i className="fa-solid fa-tag"></i>
                        <i className="fa-solid fa-lock"></i>
                        <i className="fa-solid fa-x"></i>
                      </div>
                    </div>
                  </div>
                  <div className="item-detail toggle">
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                </div>
                <div className="bot">
                  <div className="instance">
                    <div className="bk-instance"></div>
                  </div>
                  <div className="instance-header">
                    <div className="instance-bk"></div>
                  </div>
                  <div className="main-instance">
                    <div className="instance-eye">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="instance-main-icon">
                      <p>Polygon</p>
                      <i className="fa-solid fa-check"></i>
                      <i className="fa-solid fa-tag"></i>
                      <i className="fa-solid fa-lock"></i>
                      <i className="fa-solid fa-x"></i>
                      <i className="fa-solid fa-thumbs-down greyText"></i>
                      <i className="fa-solid fa-thumbs-up greyText"></i>
                      <label>⋮</label>
                    </div>
                  </div>
                  <div className="instance-toggler">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
