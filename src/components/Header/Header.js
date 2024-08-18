import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import legoHead from "../../assets/icons/legoHead.svg";
import bag from "../../assets/icons/bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="header">
      <div className="header__mobile-tablet-container">
        <div className="header__menu-logo-wrapper">
          <div className="header__menu-container">
            <FontAwesomeIcon className="header__menu-icon" icon={faBars} />
            <p className="header__menu-text">MENU</p>
          </div>
          <Link to="/" className="header__link">
            <img
              className="header__logo"
              src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="header__icon-wrapper">
          <img className="header__icon" src={search} alt="search" />
          <img className="header__icon" src={legoHead} alt="search" />
          <img className="header__icon" src={heart} alt="search" />
          <img
            className="header__icon header__icon-bag"
            src={bag}
            alt="search"
          />
        </div>
      </div>
      <div className="header__desktop-container">
        <span className="header__styling-link-container">
          <Link to="/" className="header__link">
            <img
              className="header__logo-desktop"
              src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg"
              alt="Logo"
            />
          </Link>

          <ul className="header__nav-list-desktop">
            <li className="header__menu-link">SHOP</li>
            <li className="header__menu-link">DISCOVER</li>
            <li className="header__menu-link">HELP</li>
            <li className="header__menu-link header__menu-link-dreamzz">
              DREAMZZZ
            </li>
          </ul>
        </span>
        <div className="header__icon-wrapper header__icon-wrapper-desktop">

          <img className="header__icon header__icon-search" src={search} alt="search" />
          <img className="header__icon" src={heart} alt="search" />
          <img
            className="header__icon header__icon-bag"
            src={bag}
            alt="search"
          />
   
        </div>

        <div className="header__icon-container-destop"></div>
      </div>
    </header>
  );
}

export default Header;
