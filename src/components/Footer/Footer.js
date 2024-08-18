import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/png-clipart-lego-logo-lego-city-undercover-the-lego-group-lego-minifigure-brand-svg-library-game-text-thumbnail.png";
import location from "../../assets/images/location.png";

function Footer() {
  return (
    <footer className="footer">


      <div className="footer__container">

      <div className="footer__column">
        <div className="footer__logocontainer">

        <Link to="/" className="footer__link">
        <img className="footer__logo" src={logo} alt="Logo" />
      </Link>
      <img src={location} alt="Location" />
        </div>

         <ul className="footer__legoinfo">
            <li><p href="#">Gift Cards</p></li>
            <li><p href="#">Sitemap</p></li>
            <li><p href="#">Find inspiration</p></li>
            <li><p href="#">LEGO Catalogues</p></li>
            <li><p href="#">Find a LEGO Store</p></li>
          </ul>
        </div>
        <div className="footer__column">
            <h3 className="">ABOUT US</h3>
         <ul className="header__aboutus">
            <li><p href="#">About the LEGO Group</p></li>
            <li><p href="#">LEGO news</p></li>
            <li><p href="#">Sustainability</p></li>
            <li><p href="#">LEGO PRODUCT certification</p></li>
            <li><p href="#">LEGO Jobs</p></li>
            <li><p href="#">LEGO Compliance Line</p></li>
          </ul>
        </div>

        <div className="footer__column">
            <h3>SUPPORT</h3>
         <ul className="footer__support">
            <li><p href="#">Contact us</p></li>
            <li><p href="#">Find building instructions</p></li>
            <li><p href="#">Replacement parts</p></li>
            <li><p href="#">Deliveries and returns</p></li>
            <li><p href="#">Payment methods</p></li>
            <li><p href="#">Terms & Conditions</p></li>
            <li><p href="#">Product recalls</p></li>
          </ul>
        </div>

        <div className="footer__column">
            <h3>ATTRACTIONS</h3>
         <ul className="footer__attractions">
            <li><p href="#">LEGO House</p></li>
            <li><p href="#">LEGOLAND Parks</p></li>
            <li><p href="#">LEGOLAND Discovery Centers</p></li>

          </ul>
        </div>


        <div className="footer__column">
            <h3>MORE FROM US</h3>
         <ul className="header__morefromus">
            <li><p href="#">LEGO Magazine (FREE)</p></li>
            <li><p href="#">LEGO Education</p></li>
            <li><p href="#">LEGO Ideas</p></li>
            <li><p href="#">LEGO Foundation</p></li>
            <li><p href="#">Affiliate Program</p></li>
            <li><p href="#">Student Offers</p></li>
            <li><p href="#">LEGO Braille Bricks</p></li>
          </ul>
        </div>
    
        <div className="footer__column">
          <h4>Follow Us</h4>
          <div class="footer__social">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <p>LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO, the FRIENDS logo, the MINIFIGURES logo, DREAMZzz, NINJAGO, VIDIYO and MINDSTORMS are trademarks of the LEGO Group. ©2024 The LEGO Group. All rights reserved. Use of this site signifies your agreement to the Terms of Use.</p>
      </div>
    </footer>
  );
}

export default Footer;
