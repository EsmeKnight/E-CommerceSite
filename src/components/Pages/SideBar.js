import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

function SideBar(props) {
  const items = props.items;
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {items?.map((item) => (
          <div className="sidebar-item-container">
            <Link to="shoe-type" className="sidebar-item-link">
              <li className="sidebar-item">{item}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
