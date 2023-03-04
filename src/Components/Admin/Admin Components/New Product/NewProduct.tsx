import React from "react";
import Styles from "./newProduct.module.css";
import Navbar from "../Navbar/Navbar";
import ProductForm from "./ProductForm";
import PaginationTable from "../../../Table/PaginationTable";
import NewProductModal from "./ProductsModal";

function NewProduct() {
  return (
    <div className={Styles.outlet}>
      <Navbar name={"Add New Product"} />
      <PaginationTable />
    </div>
  );
}

export default NewProduct;
