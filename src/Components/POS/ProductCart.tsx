import React from "react";
import Styles from './pos.module.css'
import food from "../../imgs/food.jpg";

function ProductCart() {
  return (
    <div className={Styles.productCart}>
      <div className={Styles.productCartThumbnial}>
        <img src={food}></img>
      </div>
      <div className={Styles.productCartInfo}>
        <h3>Pizza with coca-cola & potatos</h3>
        <div className={Styles.quantity}>
          <h3>10.00 $</h3>
          <div className={Styles.quantityControllers}>
            <button>
              <i className="fa-solid fa-minus"></i>
            </button>
            <div className={Styles.qNumber}>1</div>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
