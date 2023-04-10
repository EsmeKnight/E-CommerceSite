import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CaroselHover from "./CaroselHover";
import "./Carosel.css";

function Carosel() {
  const [currentIndex, setIndex] = useState(0);
  const [showHover, setHover] = useState(false);

  const caroselImages = [
    {
      url: "http://localhost:3000/images/shoe-1.jpg",
      offer: "Back to School",
      details: "25% off selected childrens' lines",
    },
    {
      url: "http://localhost:3000/images/shoe-2.jpeg",
      offer: "Mens' Formal",
      details: "Lorem ipsum",
    },
    {
      url: "http://localhost:3000/images/shoe-3.jpeg",
      offer: "Streetwear",
      details: "Lorem ipsum",
    },
    {
      url: "http://localhost:3000/images/shoe-4.jpeg",
      offer: "Sports",
      details: "Lorem ipsum",
    },
    {
      url: "http://localhost:3000/images/shoe-5.jpeg",
      offer: "Womens'",
      details: "Lorem ipsum",
    },
    {
      url: "http://localhost:3000/images/shoe-6.jpeg",
      offer: "Mens' Formal",
      details: "Lorem ipsum",
    },
  ];

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${caroselImages[currentIndex].url})`,
  };

  // slider functions
  const nextPic = () => {
    if (currentIndex == caroselImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(currentIndex + 1);
    }
    clearInterval();
  };
  const prevPic = () => {
    setIndex(currentIndex - 1);
    if (currentIndex == 0) {
      setIndex(caroselImages.length - 1);
    }
    clearInterval();
  };

  // hover functions
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  //window.setInterval(nextPic, 10000);

  return (
    <div
      className="carosel"
      style={sliderStyles}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="left-arrow">
        <IoIosArrowBack className="prev-arrow" onClick={prevPic} />
      </div>
      <div className="right-arrow">
        <IoIosArrowForward className="next-arrow" onClick={nextPic} />
      </div>
      <div className="slide" style={slideStyles}>
        <div className={showHover ? "show-hover" : "hide-hover"}>
          <CaroselHover
            offer={caroselImages[currentIndex].offer}
            description={caroselImages[currentIndex].details}
          />
        </div>
      </div>
    </div>
  );
}

export default Carosel;
