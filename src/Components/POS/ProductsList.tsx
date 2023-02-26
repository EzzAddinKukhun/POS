import React, { useEffect, useState } from "react";
import Styles from "./pos.module.css";
import food from "../../imgs/food.jpg";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ProductItem from "./ProductItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function ProductsList() {
  let elementsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1); 
  const [pagesCount, setPagesCount] = useState(1); 
  const arr = [
    { name: "test", category: "test-cat", code: 1233, quantity: 14, price: 50 },
    {
      name: "test2",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test3",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test4",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test5",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test6",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test7",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test8",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test9",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test10",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test11",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test12",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test13",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test14",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test15",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test16",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test17",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test18",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test19",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test20",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test21",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test22",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test23",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test24",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test25",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test26",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test27",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test28",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
  ];

  function next (){
    setCurrentPage(currentPage+1); 
  }

  function previous (){
    setCurrentPage(currentPage-1); 
  }

  useEffect(()=>{
    setPagesCount( Math.ceil(arr.length/elementsPerPage)); 

  })
  return (
    <div className={Styles.container}>
      <div className={Styles.productsList}>
        <div className={Styles.productsListHeader}>
          <h4 style={{ paddingLeft: 10 }}>Food Category</h4>
          <h4 style={{ paddingRight: 10 }}>53 Items</h4>
        </div>
        <div className={Styles.items}>
          {arr.map((element, key) => {
            if (key >= elementsPerPage * currentPage - elementsPerPage && key < elementsPerPage * currentPage) {
              return <ProductItem name = {element.name} />;
            }
          })}
        </div>
        <div className={Styles.productsListFooter}>
          <h4 style={{ paddingLeft: 10 }}>Page {currentPage} of {pagesCount}</h4>
          <div className={Styles.paginations}>
            {
              currentPage <= 1? <Button disabled onClick={previous} endIcon={<ArrowBackIosIcon />}></Button> : <Button onClick={previous} endIcon={<ArrowBackIosIcon />}></Button>
            }
            {
              currentPage >= pagesCount? <Button disabled onClick={next} endIcon={<ArrowForwardIosIcon />}></Button> : <Button onClick={next} endIcon={<ArrowForwardIosIcon />}></Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
