import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Navbar.css';
import image from '../Assests/grLogo.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      {/* Navigation links */}
      <div className="nav-link">
        <ul>
          <li>
            <a>
              <Link to={"/"}>Home</Link>
            </a>
          </li>
          <li>
            <a>
            <Link to={"/allblogcontentpage"}>Blogs</Link>
            </a>
          </li>
          <li>
            <a>
            <Link to={"/services"}>Services</Link>
            </a>
          </li>
          <li>
            <a>
            <Link to={"/aboutus"}>About Us</Link>
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Us */}
      <div className="contact-us">
        <Link to={"/contactus"}><button>Contact Us</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
