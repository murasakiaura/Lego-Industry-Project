import "./Header.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import searchicon from "../../assets/images/search-icon.jpg";
import hearticon from "../../assets/images/heart-icon.png";
import shoppingbagicon from "../../assets/images/shoppingbag-icon.jpg";


function Header() {
  return (
    <header className="header">
      {/* Logo Link */}
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>

      {/* Top Header Links */}
      <div className="header-top">
        <a href="#" className="header-link">Find a Store</a>
        <a href="#" className="header-link">Customer Service</a>
        <a href="#" className="header-link">United Kingdom</a>
      </div>

      {/* Main Navigation */}
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="LEGO Logo" />
          </a>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#">SHOP</a></li>
            <li><a href="#">DISCOVER</a></li>
            <li><a href="#">HELP</a></li>
            <li><a href="#">DREAMZZZ</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#">
            <img src={searchicon} alt="Search Icon" />
          </a>
          <a href="#">
            <img src={hearticon} alt="Heart Icon" />
          </a>
          <a href="#">
            <img src={shoppingbagicon} alt="Shoppingbag Icon" />
          </a>
          <h4>(0)</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;