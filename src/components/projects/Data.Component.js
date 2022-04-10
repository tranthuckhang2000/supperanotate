import React, { useState } from "react";
import pj1 from "../../assets/images/products/1.jpg";
import pj2 from "../../assets/images/products/2.jpg";

export default function Data() {
  const [dropdownAmountItem, setDropdownAmountItem] = useState(false);
  const [amountItem, setAmountItem] = useState(100);
  const projectArray = [
    {
      name: "federer-i-want-to-win-more-playing-tennis-in-five-years-i-don-t-know-.jpg",
      src: pj1,
      icon: "fa-solid fa-arrows-rotate",
      status: "return",
    },
    {
      name: "istockphoto-639454798-170667a.jpg",
      src: pj2,
      icon: "fa-solid fa-exclamation",
      status: "err",
    },
  ];
  return (
    <div className="project-content-data">
      <div className="looking-for">
        <div className="search">
          {/* <label> */}
          <i className="fa-solid fa-magnifying-glass"></i>
          {/* </label> */}
          <input
            type="search"
            className="sn-search-input sn-input sn-input-simple sn-input-medium sn-input-primary"
            placeholder="Search by name..."
            id="images-search-basic"
          />{" "}
        </div>
        <div className="filter">
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>
      <div className="project-table-content">
        <div className="main-content">
          <div className="project-table-item header" style={{paddingTop: "13px"}}>
            <div className="check">
              <input
                type="checkbox"
                // defaultChecked={checked}
                // onChange={() => setChecked(!checked)}
              />
            </div>
            <div className="img-des"></div>
            <div className="name item-width-sort">
              <p>Name</p>
              <span>
                <i className="fa-solid fa-angle-up"></i>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <div className="status item-width-sort">
              <p>Status</p>
              <span>
                <i className="fa-solid fa-angle-up"></i>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <div className="assignee">
              <p>Assignee</p>
            </div>
            <div className="predict"></div>
          </div>
          {projectArray.map((item) => (
            <div className="project-table-item">
              <div className="check">
                <input
                  type="checkbox"
                  // defaultChecked={checked}
                  // onChange={() => setChecked(!checked)}
                />
              </div>
              <div className="img-des">
                <img src={item.src} alt=""></img>
              </div>
              <div className="name item-width-sort">
                <a href="/Editor">{item.name}</a>
              </div>
              <div className="status item item-width-sort">
                <i className={item.icon}></i>
              </div>
              <div className="assignee item">
                <p>-</p>
              </div>
              <div className="predict">
                <i className="fa-solid fa-bolt"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="project-bot">
          <div className="total">
            <p>Total Item - 2</p>
          </div>
          <div className="amount-item">
            <label>Items</label>
            <div className="amount-item-dropdown">
              <div
                onClick={() => {
                  setDropdownAmountItem(!dropdownAmountItem);
                }}
                className="btn-amount"
              >
                <button>100</button>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              {dropdownAmountItem && (
                <ul className="dropdown-item">
                  <li>1000</li>
                  <li className="active">100</li>
                  <li>50</li>
                  <li>25</li>
                </ul>
              )}
            </div>
          </div>
          <div className="pagination-pages">
            <button>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button active>1</button>
            <button>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="go-to">
              <label>Go to</label>
              <input type="text"></input>
          </div>
        </div>

        {/* <svg className="sa-icon" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><use xlink:href="/assets/svg-icons/sprite.svg#sa-icon-prediction-1"></use></svg> */}
      </div>
    </div>
  );
}
