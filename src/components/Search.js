import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

import "./Search.css";

function Search() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
      <div className="navbar">
        <div className="mobile-header">Golden Shoe</div>
        <div className="buffer-container">
          <ul>
            <li className="nav-item">
              <p className="buffer">My Basket</p>
            </li>
          </ul>
        </div>
        <div className="navbar-container">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon"></MdFingerprint>
              Golden SHoe
            </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/my-account"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {click ? (
              <li className="nav-item">
                <Link
                  to="/basket"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  <BsCart4 className="cart-icon" />
                  My Basket
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="basket-container">
          <ul>
            <li className="nav-item">
              <Link to="/basket" className="nav-link" onClick={closeMobileMenu}>
                <BsCart4 className="cart-icon" />
                My Basket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
