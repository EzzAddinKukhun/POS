import React from "react";
import Styles from "./pos.module.css";
import food from "../../imgs/food.jpg";
import { Products } from "../Table/PaginationTable";
const Zoom = require("react-reveal/Zoom");

interface Props {
  name: string;
  image: string;
  description: string;
  price: number;
  id: number;
  // click: (item: Products) => {
  //   type: string,
  //   payload: Products
  // }
  click: ()=> void
}

function ProductItem({ name, image, description, price, id, click }: Props) {
  return (
    <Zoom delay={id * 250}>
      <div className={Styles.item}>
        <div className={Styles.itemThumbnail}>
          <img
            style={{ width: "70%", margin: "auto", display: "block" }}
            src={`http://localhost:5000/${image}`}
          />
          <button onClick={click} className={Styles.addItem}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <div className={Styles.overLay}></div>
        </div>
        <div className={Styles.itemInfo}>
          <h3 className={Styles.itemName}>{name}</h3>
          <h6 className={Styles.itemDescription}>{description}</h6>
          <h2 className={Styles.itemPrice}>{price}.00$</h2>
        </div>
      </div>
    </Zoom>
  );
}

export default ProductItem;
