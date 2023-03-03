import React from "react";
import CategoriesSlider from "./CategoriesSlider";
import Styles from "./pos.module.css";
import POSHeader from "./POSHeader";
import ProductsList from "./ProductsList";

function Products() {
  const [searchToken, setSearchToken] = React.useState(""); 

  function getSearchToken (token: string){
    setSearchToken(token)
  }

  return (
    <div className={Styles.products}>
      <POSHeader getSearchToken= {getSearchToken} />
      <CategoriesSlider />
      <ProductsList searchToken = {searchToken} />
    </div>
  );
}

export default Products;
