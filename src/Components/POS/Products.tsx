import React from 'react'
import CategoriesSlider from './CategoriesSlider';
import Styles from './pos.module.css'; 
import POSHeader from './POSHeader';
import ProductsList from './ProductsList';

function Products() {
  return (
    <div className={Styles.products}>
        <POSHeader/>
        <CategoriesSlider/>
        <ProductsList/>
    </div>
  )
}

export default Products