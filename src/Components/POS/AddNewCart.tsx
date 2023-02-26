import React from "react";
import Styles from "./pos.module.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

function AddNewCart() {
  return (
    <div className={Styles.addNewCart}>
      <TextField
        style={{ width: "70%" }}
        id="input-with-icon-textfield"
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
      <Button variant="contained" endIcon={<AddIcon />}>
        Add
      </Button>
    </div>
  );
}

export default AddNewCart;
