import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function Card(props) {
  const items = props.items;
  return (
    <div className="card-container">
      <div className="header">{props.title}</div>
      <div className="links-container">
        <ul className="card-list-items">
          {items?.map((link) => (
            <Link to={link.link} className="card-list-item">
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
