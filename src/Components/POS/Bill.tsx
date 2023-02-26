import React from "react";
import Styles from "./pos.module.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function Bill() {
  return (
    <table className={Styles.billTable}>
      <tr>
        <td style={{ width: "50%" }}>Sub Total</td>
        <td>500.00$</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td>
          <input
            style={{ width: "30%", margin: "auto" }}
            min={0}
            max={100}
            type="number"
          ></input>
        </td>
      </tr>
      <tr>
        <td>Discount</td>
        <td>
          <input
            style={{ width: "30%", margin: "auto" }}
            min={0}
            max={100}
            type="number"
          ></input>
        </td>
      </tr>
      <tr>
        <td>Total</td>
        <td>430.00$</td>
      </tr>
      <tr>
        <td>
          <Button fullWidth variant="outlined">
            Cancel
          </Button>
        </td>
        <td>
          <Button fullWidth variant="contained">
            Checkout
          </Button>
        </td>
      </tr>
    </table>
  );
}

export default Bill;
