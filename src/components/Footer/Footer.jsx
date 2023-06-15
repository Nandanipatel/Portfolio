import React from "react";
import "./Footer.css";
import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        NANDANI PATEL
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://github.com/Nandanipatel" target="_blank">
          <BsGithub />
        </a>
        <a href="https://twitter.com/Nandani_1406" target="_blank">
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/nandani-patel-824b0621a/"
          target="_blank"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/nandani_p1406/" target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Copyright 2023 NANDANI PATEL.</small>
      </div>
    </footer>
  );
};

export default Footer;
