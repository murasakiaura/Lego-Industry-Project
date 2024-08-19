import "./GiftFinder.scss";
import React from "react";
import legohead from "../../assets/icons/legoHead.svg";
import nexticon from "../../assets/icons/next-icon.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import { Link,useNavigate } from 'react-router-dom';

function GiftFinder() {
    const navigate = useNavigate();
    function navigationIdea() {
      navigate("/ShopPage");
    }
  return (
    <div>
      <nav className="breadcrumb">
        <a href="#">Home</a>
        <span>
          <img className="nexticon" src={nexticon} alt="next icon" />
        </span>
        <span>
          <h4 className="breadcrumb__text"> Gift Finder Results </h4>
        </span>
      </nav>
      <section className="gift-finder">
        <div className="gift-finder__progress">
          <div className="gift-finder__step completed"></div>
          <div className="gift-finder__step"></div>
          <div className="gift-finder__step"></div>
        </div>
        <div className="gift-finder__info">
          <div className="gift-finder__icon">
            <img src={legohead} alt="lego head" />
          </div>
          <p className="gift-finder__text">
            We know that our builders of tomorrow can often build far above
            their age range. Narrow down your gift by age or difficulty to find
            that perfect set!
          </p>
        </div>
      </section>

      <section className="selection">
        <div className="selection__option">
       
          <div className="selection__box selection__box--age" onClick={navigationIdea}>Age</div>
         
          
          <div className="selection__box selection__box--difficulty" onClick={navigationIdea}>
            Difficulty
          </div>
        
       
      
        </div>

        <div className="buttoncontainer">
            <img className="buttoncontainer__icon" src={icon1} alt="icon" />
        <button className="buttoncontainer__button">Next Question</button>
        <img className="buttoncontainer__icon" src={icon2} alt="icon" />
        </div>

        
      </section>

    </div>
  );
}

export default GiftFinder;
