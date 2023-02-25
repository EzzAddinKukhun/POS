import React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesTable from "./Categories Table/CategoriesTable";
import Styles from './categories.module.css'

function Categories() {
  return (
    <div className={Styles.outlet}>
      <Navbar name={"Categories"} />
      <CategoriesTable/>
    </div>
  );
}

export default Categories;
