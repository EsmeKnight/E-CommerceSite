import React from "react";
import "./CaroselHover.css";

function CaroselHover(props) {
  return (
    <div className="carosel-hover">
      <div className="offer-header">{props.offer}</div>
      <div className="offer-description">{props.description}</div>
    </div>
  );
}

export default CaroselHover;
