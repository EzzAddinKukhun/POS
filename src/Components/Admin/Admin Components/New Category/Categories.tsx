import React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesTable from "./Categories Table/CategoriesTable";
import Styles from "./categories.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import NewCategoryModal from "./NewCategoryModal";
import {useState, useEffect} from 'react'
import UpdateCategory from "./UpdateCategory";


function Categories() {

  return (
    <div className={Styles.outlet}>
      <Navbar name={"Categories"} />
      <NewCategoryModal/>
      <CategoriesTable />
    </div>
  );
}

export default Categories;
