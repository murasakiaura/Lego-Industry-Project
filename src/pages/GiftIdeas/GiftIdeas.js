import "./GiftIdeas.scss";
import React from "react";
import giftcard from "../../assets/images/gift-card.png";
import { Link } from 'react-router-dom';

function GiftIdeas() {
  return (
    <div>
      <section className="gift-section">
        <div className="gift-section__card">
          <div className="gift-section__image">
            <video width="280" height="200" autoplay>
              <source
                src="https://www.lego.com/cdn/cs/set/assets/blt4a880dc43a78b06f/21350-202407-PLP-Interactive-Disruptor.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="gift-section__content">
            <h2 className="gift-section__title">Gift Finder</h2>
            <p className="gift-section__description">
              Finding that perfect gift can be challenging. Let the LEGO gift
              finder find that WOW gift for you.
            </p>
            <Link to="/gift-finder">
            <button className="gift-section__button">Gift Finder</button>
            </Link>
            
          </div>
        </div>
      </section>

      <section className="age-section">
        <h2 className="age-section__title">Only know their age?</h2>
        <p className="age-section__description">
          Choose their age range below and we will suggest some suitable options
          for you.
        </p>
        <div className="age-section__grid">
          <div className="age-section__block age-section__block--red">1-3</div>
          <div className="age-section__block age-section__block--green">
            4-5
          </div>
          <div className="age-section__block age-section__block--blue">6-8</div>
          <div className="age-section__block age-section__block--purple">
            9-13
          </div>
          <div className="age-section__block age-section__block--orange">
            14+
          </div>
          <div className="age-section__block age-section__block--pink">18+</div>
        </div>
      </section>

      <section className="gift-section">
        <div className="gift-section__card">
          <div className="gift-section__image">
            <img className="gift-section__img" src={giftcard} alt="gift card" />
          </div>
          <div className="gift-section__content">
            <h2 className="gift-section__title">LEGO Gift Card</h2>
            <p className="gift-section__description">
              Finding that perfect gift can be challenging. Let the LEGO gift
              finder find that WOW gift for you.
            </p>
            <button className="gift-section__button">Gift Finder</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GiftIdeas;
