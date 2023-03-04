import React from "react";
import Styles from "./pos.module.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewCart } from "../../Redux/actions";

function AddNewCart() {
  const dispatch = useDispatch(); 
  return (
    <div className={Styles.addNewCart}>
      <TextField
        style={{ width: "70%" }}
        id="new-cart-name"
        label="Cart Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ShoppingCartIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button onClick={()=>{
        let newCartNameField = document.getElementById("new-cart-name") as HTMLInputElement; 
        let newCartName = newCartNameField?.value; 
        dispatch(addNewCart(newCartName)); 
        newCartNameField.value = ""; 
 
      }} variant="contained" endIcon={<AddIcon />}>
        Add
      </Button>
    </div>
  );
}

export default AddNewCart;
