import React from "react";
import CategoriesSlider from "./CategoriesSlider";
import Styles from "./pos.module.css";
import POSHeader from "./POSHeader";
import ProductsList from "./ProductsList";

function Products() {
  const [searchToken, setSearchToken] = React.useState(""); 
  const [selectedCategory, setSelectedCategory] = React.useState("")

  function getSearchToken (token: string){
    setSearchToken(token)
  }

  function getSelectedCategory (token: string){
    console.log(token)
    setSelectedCategory(token)
  }

  function refreshTable (){
    setSelectedCategory(""); 
    setSearchToken(""); 
  }

  return (
    <div className={Styles.products}>
      <POSHeader getSearchToken= {getSearchToken} />
      <CategoriesSlider getSelectedCategory={getSelectedCategory} />
      <ProductsList searchToken = {searchToken} selectedCategory={selectedCategory} refreshTable= {refreshTable} />
    </div>
  );
}

export default Products;
