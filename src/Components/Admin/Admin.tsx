import React from "react";
import Sidebar from "./Admin Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Admin Components/Dashboard/Dashboard";
import NewProduct from "./Admin Components/New Product/NewProduct";
import Categories from "./Admin Components/New Category/Categories";

function Admin() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="newProduct" element={<NewProduct />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </>
  );
}

export default Admin;
