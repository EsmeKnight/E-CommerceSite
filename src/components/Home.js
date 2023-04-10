import React from "react";
import Carosel from "./Carosel";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <div className="carosel-container">
          <Carosel />
        </div>
      </div>
    </>
  );
}

export default Home;
