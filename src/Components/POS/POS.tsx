import { AppBar } from "@mui/material";
import React from "react";
import Cart from "./Cart";
import CashierAppBar from "./CashierAppBar";
import Styles from "./pos.module.css";
import Products from "./Products";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import cartReducer from "../../Redux/CartReducer";

function POS() {
  

  return (
    <>
      <CashierAppBar />
      <div className={Styles.posContainer}>
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default POS;
