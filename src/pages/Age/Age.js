import "./Age.scss";
import React from "react";

function Age() {
    return (
      <div>
  <section>
          <div className="selection__age">
            <div className="selection__age-box">1-3</div>
            <div className="selection__age-box">4-5</div>
            <div className="selection__age-box">6-8</div>
            <div className="selection__age-box">9-13</div>
            <div className="selection__age-box">14+</div>
            <div className="selection__age-box">18+</div>
          </div>
        </section>
  
        <section className="difficulty">
          <div className="difficulty__box difficulty__box--brick">
            <p className="difficulty__title">Brick by Brick</p>
            <p className="difficulty__description">Young and new to LEGO</p>
            <p className="difficulty__age">Age: 0-5</p>
          </div>
          <div className="difficulty__box difficulty__box--challenge">
            <p className="difficulty__title">Challenge Ahead</p>
            <p className="difficulty__description">Familiar with LEGO</p>
            <p className="difficulty__age">Age: 6-13</p>
          </div>
          <div className="difficulty__box difficulty__box--master">
            <p className="difficulty__title">Master Builder</p>
            <p className="difficulty__description">The Ultimate Challenge</p>
            <p className="difficulty__age">Age: 14+</p>
          </div>
        </section>
      </div>
    );
  }
  
  export default Age;
  