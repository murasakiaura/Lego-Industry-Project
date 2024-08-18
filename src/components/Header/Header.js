import "./Header.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import searchicon from "../../assets/images/search-icon.jpg";
import hearticon from "../../assets/images/heart-icon.png";
import shoppingbagicon from "../../assets/images/shoppingbag-icon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header className="header">
      {/* Logo Link */}
      {/* <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link> */}

      {/* Top Header Links */}
      {/* <div className="header-top">
        <p href="" className="header-link">Find a Store</p>
        <p href="#" className="header-link">Customer Service</p>
        <p href="#" className="header-link">United Kingdom</p>
      </div> */}

      {/* Main Navigation */}
      {/* <div className="header-container"> */}
        {/* <div className="logo"> */}
        <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>
        {/* </div> */}
        <nav>
          <ul className="header__nav-list">
            <li><p href="#">SHOP</p></li>
            <li><p href="#">DISCOVER</p></li>
            <li><p href="#">HELP</p></li>
            <li><p href="#">DREAMZZZ</p></li>
          </ul>
        </nav>
        {/* <div className="header-right"> */}
            <FontAwesomeIcon icon={faSearch} />
        {/* </div> */}
      {/* </div> */}
    </header>
  );
}

export default Header;