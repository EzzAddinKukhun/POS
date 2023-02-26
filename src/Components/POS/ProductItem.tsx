import React from "react";
import Styles from "./pos.module.css";
import food from "../../imgs/food.jpg";

interface Props {
  name : string
}

function ProductItem({name}: Props) {
  return (
    <div className={Styles.item}>
      <div className={Styles.itemThumbnail}>
        <img src={food} />
        <div className={Styles.overLay}></div>
        <button className={Styles.addItem}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className={Styles.itemInfo}>
        <h3 className={Styles.itemName}>{name}</h3>
        <h6 className={Styles.itemDescription}>
          This is a small description about element
        </h6>
        <h2 className={Styles.itemPrice}>12.00$</h2>
      </div>
    </div>
  );
}

export default ProductItem;
