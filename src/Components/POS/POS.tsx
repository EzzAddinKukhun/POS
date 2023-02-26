import { AppBar } from '@mui/material'
import React from 'react'
import Cart from './Cart'
import CashierAppBar from './CashierAppBar'
import Styles from './pos.module.css'
import Products from './Products'

function POS() {
  return (
    <>
    <CashierAppBar/>
    <div className={Styles.posContainer}>
       <Products/>
       <Cart/>
    </div>   
    </>
  )
}

export default POS