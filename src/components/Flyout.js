import React from "react";
import { Link } from "react-router-dom";

import "./Flyout.css";

function Flyout(props) {
  const items = props.items;
  return (
    <div className="flyout-container">
      <div className="flyout-links-container">
        <ul className="flyout-list-items">
          {items?.map((link) => (
            <Link to={link.link} className="flyout-list-item">
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Flyout;
