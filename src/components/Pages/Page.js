import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Page.css";

import SideBar from "./SideBar";

let path = window.location.pathname;

let shoeData = require("./shoes.json");
let pageShoeData = [];

for (let i = 0; i < shoeData.length; i++) {
  if (shoeData[i].gender[0] == path[1]) {
    pageShoeData.push(shoeData[i]);
  }
}

function getCount() {
  let count = 0;
  for (let i = 0; i < shoeData.length; i++) {
    if (shoeData[i].gender[0] == path[1]) {
      count++;
    }
  }
  return count;
}
const count = getCount();

function Page(props) {
  const [numThumbnails, setNumThumbnails] = useState(12);
  let restrictedShoeData = pageShoeData.slice(0, numThumbnails);

  useEffect(() => {
    restrictedShoeData = pageShoeData.slice(numThumbnails);
  }, [numThumbnails]);

  return (
    <>
      <div className="page-container">
        <div className="sidebar-container">
          <SideBar items={props.items} />
        </div>
        <div className="page-main">
          <div className="page-top">
            <div className="page-title">{props.title}</div>
            <div className="result-count-container">
              <div className="result-count">{count} items</div>
            </div>
          </div>
          <div className="shoe-thumbnails">
            {restrictedShoeData?.map((shoe) =>
              shoe.gender[0] == path[1] ? (
                <div className="shoe-thumbnail">
                  <div className="image-container">
                    <Link to={shoe.shoe + shoe.id}>
                      <img
                        src="https://via.placeholder.com/300"
                        alt={`${shoe.shoe}`}
                      />
                    </Link>
                    <div className="flag-container">
                      <div
                        className={
                          Object.values(shoe.sizes).reduce(
                            (a, b) => a + b,
                            0
                          ) == 0
                            ? "flag"
                            : "flag inactive"
                        }
                      >
                        Out of Stock
                      </div>
                    </div>
                  </div>
                  <div className="name-price-container">
                    <Link to={shoe.shoe} className="shoe-link">
                      {shoe.shoe}
                    </Link>
                    <Link to={shoe.shoe} className="shoe-price">
                      {shoe.price}
                    </Link>
                  </div>
                  <Link to={shoe.shoe} className="shoe-brand">
                    {shoe.brand}
                  </Link>
                </div>
              ) : null
            )}
          </div>
          <div className="show-more-button-container">
            <button
              className="show-more-button"
              onClick={() => setNumThumbnails(numThumbnails + 12)}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
