import React, { useEffect } from "react";
import Styles from "./pos.module.css";
import food from "../../imgs/food.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incQuantity } from "../../Redux/actions";

interface Props {
  productImgName: string;
  productName: string;
  productPrice: number;
  productCode: string;
  productQuantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  deleteProduct: () => void;
}

function ProductCart({
  productImgName,
  productName,
  productPrice,
  productCode,
  productQuantity,
  incrementQuantity,
  decrementQuantity,
  deleteProduct
}: Props) {
  const [quantity, setQuantity] = useState(productQuantity);

  useEffect(() => {
    setQuantity(quantity);
  }, [productQuantity]);

  return (
    <div className={Styles.productCart}>
      <div className={Styles.productCartThumbnial}>
        <img src={`http://localhost:5000/${productImgName}`}></img>
      </div>
      <div className={Styles.productCartInfo}>
        <h3>{productName}</h3>
        <div className={Styles.quantity}>
          <h3>{productPrice}.00 $</h3>
          <div className={Styles.quantityControllers}>
            <button onClick={() => decrementQuantity()}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <div className={Styles.qNumber}>{productQuantity}</div>
            <button onClick={() => incrementQuantity()}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div onClick={()=>deleteProduct()} className={Styles.deleteItem}>
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default ProductCart;
