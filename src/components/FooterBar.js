import React from "react";

import { CgCopyright } from "react-icons/cg";
import "./FooterBar.css";

function FooterBar() {
  return (
    <div className="footer-bar-background">
      <div className="footer-bar">
        <div className="footer-content">
          <div className="copyright">
            <CgCopyright />
          </div>
          <div>Golden Shoe 2022</div>
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
