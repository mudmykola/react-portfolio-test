import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        MUD
      </a>
      <ul className="footer-list">
        <li>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/mud-developer/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/mud.web.developer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-copy">
        <p>&copy; MUD Web Portfolio. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
