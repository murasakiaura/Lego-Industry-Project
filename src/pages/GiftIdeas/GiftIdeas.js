import "./GiftIdeas.scss";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function GiftIdeas() {
    <Header />
    return (
        <div>

<section className="gift-section">
        <div className="gift-section__card">
          <div className="gift-section__image">[Image Placeholder]</div>
          <div className="gift-section__content">
            <h2 className="gift-section__title">Gift Finder</h2>
            <p className="gift-section__description">
              Finding that perfect gift can be challenging. Let the LEGO gift finder find that WOW gift for you!
            </p>
            <button className="gift-section__button">Gift Finder</button>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="age-section">
        <h2 className="age-section__title">Only know their age?</h2>
        <p className="age-section__description">
          Choose their age range below and we'll suggest some suitable options for you.
        </p>
        <div className="age-section__grid">
          <div className="age-section__block age-section__block--red">1-3</div>
          <div className="age-section__block age-section__block--green">4-5</div>
          <div className="age-section__block age-section__block--blue">6-8</div>
          <div className="age-section__block age-section__block--purple">9-13</div>
          <div className="age-section__block age-section__block--orange">14+</div>
          <div className="age-section__block age-section__block--pink">18+</div>
        </div>
      </section>

      {/* Content Section 3 */}
      <section className="gift-section">
        <div className="gift-section__card">
          <div className="gift-section__image">[Image Placeholder]</div>
          <div className="gift-section__content">
            <h2 className="gift-section__title">LEGO Gift-card</h2>
            <p className="gift-section__description">
              Finding that perfect gift can be challenging. Let the LEGO gift finder find that WOW gift for you!
            </p>
            <button className="gift-section__button">Gift Finder</button>
          </div>
        </div>
      </section>
    </div>

    );
    <Footer />;
}

export default GiftIdeas;