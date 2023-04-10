import React from "react";
import BottomLinks from "./BottomLinks";
import FooterBar from "./FooterBar";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-padding"></div>
      <BottomLinks />
      <FooterBar />
    </div>
  );
}

export default Footer;
