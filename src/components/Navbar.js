import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import UserNavbar from "./UserNavbar";
import Flyout from "./Flyout";
import { useContext } from "react";

// props for modal (passed to card in modal jsx)
const mensItems = [
  { key: 1, name: "Men's Sports", link: "mens-sports" },
  { key: 2, name: "Men's Evening Wear", link: "mens-evening-wear" },
  { key: 3, name: "Men's Casual", link: "mens-casual" },
  { key: 4, name: "Men's Sandles", link: "mens-sandles" },
  { key: 5, name: "Men's Boots", link: "mens-boots" },
  { key: 6, name: "View All", link: "mens" },
];
const womensItems = [
  { key: 1, name: "Women's Sports", link: "womens-sports" },
  { key: 2, name: "Women's Evening Wear", link: "womens-evening-wear" },
  { key: 3, name: "Women's Casual", link: "womens-casual" },
  { key: 4, name: "Women's Sandles", link: "womens-sandles" },
  { key: 5, name: "Women's Boots", link: "womens-boots" },
  { key: 6, name: "View All", link: "women-all" },
];
const kidsItems = [
  { key: 1, name: "Schoolwear", link: "schoolwear" },
  { key: 2, name: "Kid's Formal", link: "kids-formal" },
  { key: 3, name: "Kid's Casual", link: "kids-casual" },
  { key: 4, name: "Kid's Sandles", link: "kids-sandles" },
  { key: 5, name: "Kid's Boots", link: "kids-boots" },
  { key: 6, name: "View All", link: "kid-all" },
];

const brandsItems = [
  { key: 1, name: "Lorem", link: "lorem" },
  { key: 2, name: "Ipsum", link: "ipsum" },
  { key: 3, name: "Dolor", link: "dolor" },
  { key: 4, name: "Sit Amet", link: "sit-amet" },
  { key: 5, name: "Consectetur", link: "consesctetur" },
  { key: 6, name: "Adipiscing", link: "adipiscing" },
];

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showMenSlide, setShowMenSlide] = useState(false);
  const [showWomenSlide, setShowWomenSlide] = useState(false);
  const [showKidsSlide, setShowKidsSlide] = useState(false);
  const [showBrandsSlide, setShowBrandsSlide] = useState(false);

  let location = useLocation();

  const [curPath, setCurPath] = useState(location);

  // console.log(location);

  useEffect(() => {
    if (curPath != location) {
      window.location.reload();
      setCurPath(useLocation);
    }
  }, [location.pathname]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 566) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="usernav-wrapper">
        <UserNavbar basketCount={props.basketCount} />
      </div>
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="brand-container">
            <Link to="/" className="brand" onClick={closeMobileMenu}>
              Golden Shoe
            </Link>
          </div>
          <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FaTimes className="fa-times" />
              ) : (
                <FaBars className="fa-bars" />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/mens"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  onMouseEnter={() => setShowMenSlide(true)}
                  onMouseLeave={() => setShowMenSlide(false)}
                >
                  Mens
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/womens"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  onMouseEnter={() => setShowWomenSlide(true)}
                  onMouseLeave={() => setShowWomenSlide(false)}
                >
                  Womens
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kids"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  onMouseEnter={() => setShowKidsSlide(true)}
                  onMouseLeave={() => setShowKidsSlide(false)}
                >
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/brands"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  onMouseEnter={() => setShowBrandsSlide(true)}
                  onMouseLeave={() => setShowBrandsSlide(false)}
                >
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flyout-wrapper">
        <div
          className={showMenSlide ? "flyout active" : "flyout"}
          onMouseEnter={() => setShowMenSlide(true)}
          onMouseLeave={() => setShowMenSlide(false)}
        >
          <Flyout items={mensItems} />
        </div>
        <div
          className={showWomenSlide ? "flyout active" : "flyout"}
          onMouseEnter={() => setShowWomenSlide(true)}
          onMouseLeave={() => setShowWomenSlide(false)}
        >
          <Flyout items={womensItems} />
        </div>
        <div
          className={showKidsSlide ? "flyout active" : "flyout"}
          onMouseEnter={() => setShowKidsSlide(true)}
          onMouseLeave={() => setShowKidsSlide(false)}
        >
          <Flyout items={kidsItems} />
        </div>
        <div
          className={showBrandsSlide ? "flyout active" : "flyout"}
          onMouseEnter={() => setShowBrandsSlide(true)}
          onMouseLeave={() => setShowBrandsSlide(false)}
        >
          <Flyout items={brandsItems} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
