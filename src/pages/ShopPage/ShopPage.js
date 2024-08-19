import "./ShopPage.scss";
import React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";

function ShopPage() {
  return (
    <div className="shop-container">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
    </div>
  );
}
export default ShopPage;