import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/allblogcontentpage"}>Blog</Link>
          </li>
          <li>
            <Link to={"/services"}>Service</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
        <p>© Grid Reputation 2021-2024 | All Rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
