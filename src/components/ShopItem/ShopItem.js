import "./ShopItem.scss";
import React from "react";
import img from '../../assets/images/Lego Carosel Image Wizard.jpg';
import iconBook from '../../assets/icons/Icon_Educational_Default.svg';
import iconAge from '../../assets/icons/Icon_Age_Default.svg';
import iconBrick from '../../assets/icons/Icon_Pieces_Default.svg';
import iconStar from '../../assets/icons/Icon_Ratings_Default.svg';

function ShopItem() {
  return (
    <div className="shop-item">
      <img src="https://www.lego.com/cdn/cs/set/assets/bltb25259c39204c629/75389_boxprod_v39_sha.jpg?format=webply&fit=bounds&quality=80&width=600&height=600&dpr=2" className="shop-item__img" />
      <div className="shop-item__icon-container">
        <span className="shop-item__single-icon-wrapper">
          <img src={iconAge} className="shop-item__icon" />
          <p className="shop-item__icon-count">2</p>
        </span>
        <span className="shop-item__single-icon-wrapper">
          <img src={iconBrick} className="shop-item__icon" />
          <p className="shop-item__icon-count">36327</p>
        </span>
        <span className="shop-item__single-icon-wrapper">
          <img src={iconStar} className="shop-item__icon" />
          <p className="shop-item__icon-count">5</p>
        </span>
        <span className="shop-item__single-icon-wrapper">
          <img src={iconBook} className="shop-item__icon" />
          <p className="shop-item__icon-count">5</p>
        </span>
      </div>
      <div className="shop-item__description-container">
        <h2 className="shop-item__descrption-title">The Dark Falcon</h2>
        <p className="shop-item__price">£ 159.99</p>
        <button className="shop-item__button">Shop Now</button>
      </div>
    </div>
  );
}
export default ShopItem;