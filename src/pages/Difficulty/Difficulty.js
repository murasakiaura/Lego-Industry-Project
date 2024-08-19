import "./Difficulty.scss";
import React from "react";

function Difficulty() {
    return (
      <div>

    
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

export default Difficulty;