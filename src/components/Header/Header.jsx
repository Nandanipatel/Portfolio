import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/img1.png";
// import ME from '../../assets/vector-user.png';

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nandani Patel</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="intro-img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
