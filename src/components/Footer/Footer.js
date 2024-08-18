import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/png-clipart-lego-logo-lego-city-undercover-the-lego-group-lego-minifigure-brand-svg-library-game-text-thumbnail.png";
import location from "../../assets/images/location.png";
import email from "../../assets/images/email.png";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import x from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logocontainer">
          <Link to="/" className="footer__link">
            <img className="footer__logo" src={logo} alt="Logo" />
          </Link>
          <img className="footer__location" src={location} alt="Location" />
        </div>

        <div className="footer__column">
          <ul className="footer__legoinfo">
            <li className="footer__legoinfo--text">
              <p href="#">Gift Cards</p>
            </li>
            <li className="footer__legoinfo--text">
              <p href="#">Sitemap</p>
            </li>
            <li className="footer__legoinfo--text">
              <p href="#">Find inspiration</p>
            </li>
            <li className="footer__legoinfo--text">
              <p href="#">LEGO Catalogues</p>
            </li>
            <li className="footer__legoinfo--text">
              <p href="#">Find a LEGO Store</p>
            </li>
          </ul>
        </div>

        <div className="footer__emailcontainer">
          <p>SUBSCRIBE TO DIGITAL MARKETING EMAILS</p>
          <img className="footer__email" src={email} alt="email" />
        </div>

        <div className="footer__column">
          <ul className="footer__aboutus">
            <h3 className="footer__title">ABOUT US</h3>
            <div className="footer__mobile">
              <li>
                <p href="#">About the LEGO Group</p>
              </li>
              <li>
                <p href="#">LEGO news</p>
              </li>
              <li>
                <p href="#">Sustainability</p>
              </li>
              <li>
                <p href="#">LEGO PRODUCT certification</p>
              </li>
              <li>
                <p href="#">LEGO Jobs</p>
              </li>
              <li>
                <p href="#">LEGO Compliance Line</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer__column">
          <ul className="footer__support">
            <h3 className="footer__title">SUPPORT</h3>
            <div className="footer__mobile">
              <li>
                <p href="#">Contact us</p>
              </li>
              <li>
                <p href="#">Find building instructions</p>
              </li>
              <li>
                <p href="#">Replacement parts</p>
              </li>
              <li>
                <p href="#">Deliveries and returns</p>
              </li>
              <li>
                <p href="#">Payment methods</p>
              </li>
              <li>
                <p href="#">Terms & Conditions</p>
              </li>
              <li>
                <p href="#">Product recalls</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer__column">
          <ul className="footer__attractions">
            <h3 className="footer__title">ATTRACTIONS</h3>
            <div className="footer__mobile">
              <li>
                <p href="#">LEGO House</p>
              </li>
              <li>
                <p href="#">LEGOLAND Parks</p>
              </li>
              <li>
                <p href="#">LEGOLAND Discovery Centers</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer__column">
          <ul className="footer__morefromus">
            <h3 className="footer__title">MORE FROM US</h3>
            <div className="footer__mobile">
              <li>
                <p href="#">LEGO Magazine (FREE)</p>
              </li>
              <li>
                <p href="#">LEGO Education</p>
              </li>
              <li>
                <p href="#">LEGO Ideas</p>
              </li>
              <li>
                <p href="#">LEGO Foundation</p>
              </li>
              <li>
                <p href="#">Affiliate Program</p>
              </li>
              <li>
                <p href="#">Student Offers</p>
              </li>
              <li>
                <p href="#">LEGO Braille Bricks</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__followus">
            <h3 className="footer__title">Follow Us</h3>
            <div class="footer__social">
              <a href="#">
                <img className="footer__socialicon" src={facebook} />
              </a>
              <a href="#">
                <img className="footer__socialicon" src={x} />
              </a>
              <a href="#">
                <img className="footer__socialicon" src={instagram} />
              </a>
              <a href="#">
                <img className="footer__socialicon" src={youtube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="footer__privacy">
          <div className="footer__privacy--upper">
            <li>
              <p href="#">Privacy Policy</p>
            </li>
            <li>
              <p href="#">Cookies</p>
            </li>
            <li>
              <p href="#">Legal notice</p>
            </li>
            <li>
              <p href="#">Terms of Use</p>
            </li>
          </div>
          <div className="footer__privacy--lower">
            <li>
              <p href="#">Digital wellbeing</p>
            </li>
            <li>
              <p href="#">Accessibility</p>
            </li>
            <li>
              <p href="#">Cookie Settings</p>
            </li>
          </div>
        </ul>
      </div>

      <div className="footer__legal">
        <p>
          LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older
          to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO, the
          FRIENDS logo, the MINIFIGURES logo, DREAMZzz, NINJAGO, VIDIYO and
          MINDSTORMS are trademarks of the LEGO Group. ©2024 The LEGO Group. All
          rights reserved. Use of this site signifies your agreement to the
          Terms of Use.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
