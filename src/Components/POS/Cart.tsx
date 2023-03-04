import React from "react";
import ComboBox from "../Admin/Admin Components/Charts/ComboBox";
import AddNewCart from "./AddNewCart";
import Bill from "./Bill";
import CartsOptions from "./CartsOptions";
import Styles from "./pos.module.css";
import ProductsCart from "./ProductsCart";

function Cart() {
  
  return (
    <div className={Styles.cart}>
      <h3 style={{ textAlign: "center", paddingTop: 5 }}>Current Order</h3>
      <div className={Styles.currentCarts}>
        <CartsOptions />
        <AddNewCart />
        <ProductsCart/>
        <Bill/>
      </div>
    </div>
  );
}

export default Cart;
