import React, { useEffect } from "react";
import Styles from "./pos.module.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Bill() {
  const product = useSelector((state: any) => state?.products);
  const [totalBeforeTaxAndDiscount, setTotalBeforeTaxAndDiscount] = React.useState(0);
  const [taxPercentage, setTaxPercentage] = React.useState(0); 
  const [discountPercentage, setDiscountPercentage] = React.useState(0); 
  const [total, setTotal] = React.useState(0); 

  useEffect(()=>{
    let totalBill = 0; 
    let taxAmount = 0; 
    let discountAmount = 0; 
  
    for (let i=0; i<product?.length ; i++){
      totalBill += (product[i].productPrice)*(product[i].productQuantity)
    }

    setTotalBeforeTaxAndDiscount(totalBill)
    taxAmount = ((taxPercentage/100)*totalBill); 
    discountAmount = ((discountPercentage/100)*totalBill); 
    setTotal((totalBill + taxAmount - discountAmount))

  }, [product,taxPercentage, discountPercentage])


  return (
    <table className={Styles.billTable}>
      <tr>
        <td style={{ width: "50%" }}>Sub Total</td>
        <td>{totalBeforeTaxAndDiscount}.00$</td>
      </tr>
      <tr>
        <td>Tax(%)</td>
        <td>
          <input
            style={{ width: "30%", margin: "auto" }}
            min={0}
            max={100}
            type="number"
            onChange={(e)=>setTaxPercentage(parseInt(e.target.value))}
          ></input>
        </td>
      </tr>
      <tr>
        <td>Discount(%)</td>
        <td>
          <input
            style={{ width: "30%", margin: "auto" }}
            min={0}
            max={100}
            type="number"
            onChange={(e)=>setDiscountPercentage(parseInt(e.target.value))}
          ></input>
        </td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{total}$</td>
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
