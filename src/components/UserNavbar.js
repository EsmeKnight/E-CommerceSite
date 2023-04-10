import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart4, BsTruck } from "react-icons/bs";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { BasketContext } from "../App";

import "./UserNavbar.css";

export default function UserNavbar(props) {
  // const [mobile, setMobile] = useState(false);
  // const [basketCount, setBasketCount] = useState(0);

  const basketCount = useContext(BasketContext);

  // const checkSize = () => {
  //   if (window.innerWidth < 988) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // };

  // useEffect(() => {
  //   checkSize();
  // }, []);

  // window.addEventListener("resize", checkSize);
  // window.addEventListener("storage", () => {
  //   console.log("item added");
  // });

  return (
    <div className="usernav-background">
      <div className="usernav">
        <div className="usernavbar-container">
          <ul className="usernav-menu">
            <li className="usernav-item">
              <Link to="/track" className="usernav-link-desktop">
                <BsTruck className="icon" />
                <div className="usernav-link-text">Track an Order</div>
              </Link>
              <Link to="/track" className="usernav-link-mobile">
                <BsTruck className="icon" />
              </Link>
            </li>
            <li className="usernav-item">
              <Link to="/account" className="usernav-link-desktop">
                <IoPersonOutline className="icon" />
                <div className="usernav-link-text">My Account</div>
              </Link>
              <Link to="/account" className="usernav-link-mobile">
                <IoPersonOutline className="icon" />
              </Link>
            </li>
            <li className="usernav-item">
              <Link to="/locator" className="usernav-link-desktop">
                <IoLocationOutline className="icon" />
                <div className="usernav-link-text">Store Locator</div>
              </Link>
              <Link to="/locator" className="usernav-link-mobile">
                <IoLocationOutline className="icon" />
              </Link>
            </li>
            <li className="usernav-item">
              <Link to="/basket" className="usernav-link-desktop">
                <div className="basket-icon-container">
                  <BsCart4 className="icon" />
                  <div
                    className={
                      basketCount > 0 ? "basket-count" : "basket-empty"
                    }
                  >
                    {basketCount}
                  </div>
                </div>
                <div className="usernav-link-text">My Basket</div>
              </Link>
              <Link to="/basket" className="usernav-link-mobile">
                <BsCart4 className="icon" />
                <div
                  className={basketCount > 0 ? "basket-count" : "basket-empty"}
                >
                  {basketCount}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
