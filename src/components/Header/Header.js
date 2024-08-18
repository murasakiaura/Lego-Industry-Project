import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import  search  from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import legoHead from "../../assets/icons/legoHead.svg";
import bag from "../../assets/icons/bag.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header className="header">
      <div className="header__menu-logo-wrapper">
      <div className="header__menu-container">
            <FontAwesomeIcon className="header__menu-icon" icon={faBars} />
            <p className="header__menu-text">MENU</p>
        </div>
      <Link to="/" className="header__link">
        <img className="header__logo" src='https://assets.lego.com/logos/v4.5.0/brand-lego.svg' alt="Logo" />
      </Link>
      </div>
      <div className="header__icon-wrapper">
    <img className="header__icon" src={ search } alt="search"/>
    <img className="header__icon" src={ legoHead } alt="search"/>
    <img className="header__icon" src={ heart } alt="search"/>
    <img className="header__icon header__icon-bag" src={ bag } alt="search"/>
      </div>
    </header>
  );
}

export default Header;
