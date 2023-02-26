import React from "react";
import Styles from "./pos.module.css";
import ProductCart from "./ProductCart";

function ProductsCart() {
  return (
    <div className={Styles.productsCart}>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
    </div>
  );
}

export default ProductsCart;
