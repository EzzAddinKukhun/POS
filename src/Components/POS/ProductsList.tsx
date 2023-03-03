import React, { useEffect, useState } from "react";
import Styles from "./pos.module.css";
import food from "../../imgs/food.jpg";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ProductItem from "./ProductItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Products } from "../Table/PaginationTable";
import { Add } from "../../Redux/actions";
import {useDispatch, useSelector} from 'react-redux'; 
import { incQuantity } from "../../Redux/actions";

const Fade = require("react-reveal/Fade");

interface Props{
  searchToken: string
}

function ProductsList({searchToken}: Props) {
  let elementsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [token, setToken] = React.useState(""); 
  const [pagesCount, setPagesCount] = useState(1);
  const [products, setProducts] = useState<Products[]>([]);
  const dispatch = useDispatch();

  

  async function getProducts() {
    await fetch(`http://localhost:5000/Products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }

  function next() {
    setCurrentPage(currentPage + 1);
  }

  function previous() {
    setCurrentPage(currentPage - 1);
  }

  function displayData (){
    return products
    .filter((product) =>
      product.productName.toLowerCase().includes(token)
    ).map((element, key) => {
      if (
        key >= elementsPerPage * currentPage - elementsPerPage &&
        key < elementsPerPage * currentPage
      ) {
        return (  
              <ProductItem
                id = {key}
                name={element.productName}
                image={element.productImg}
                description={element.productDescription}
                price={element.productPrice}
                click = {()=> dispatch(Add({
                  productId: element.id,
                  productCode: element.productCode,
                  productImg: element.productImg,
                  productName: element.productName,
                  productPrice: element.productPrice,
                  productQuantity: 1, 
                }))}
              />
        );
      }
    })
  }

  useEffect(() => {
    setPagesCount(Math.ceil(products.length / elementsPerPage));
  },[products]);

  useEffect(() => {
    setToken(searchToken); 
    getProducts();
  }, [products, searchToken]);


  return (
    <div className={Styles.container}>
      <div className={Styles.productsList}>
        <div className={Styles.productsListHeader}>
          <h4 style={{ paddingLeft: 10 }}>Food Category</h4>
          <h4 style={{ paddingRight: 10 }}>53 Items</h4>
        </div>
        <div className={Styles.items}>
          {/* {products.map((element, key) => {
            if (
              key >= elementsPerPage * currentPage - elementsPerPage &&
              key < elementsPerPage * currentPage
            ) {
              return (
               
                    <ProductItem
                      id = {key}
                      name={element.productName}
                      image={element.productImg}
                      description={element.productDescription}
                      price={element.productPrice}
                      click = {()=> dispatch(Add({
                        productId: element.id,
                        productCode: element.productCode,
                        productImg: element.productImg,
                        productName: element.productName,
                        productPrice: element.productPrice,
                        productQuantity: 1, 
                      }))}
                    />
              );
            }
          })} */}
          {
            displayData()
          }
        </div>
        <div className={Styles.productsListFooter}>
          <h4 style={{ paddingLeft: 10 }}>
            Page {currentPage} of {pagesCount}
          </h4>
          <div className={Styles.paginations}>
            {currentPage <= 1 ? (
              <Button
                disabled
                onClick={previous}
                endIcon={<ArrowBackIosIcon />}
              ></Button>
            ) : (
              <Button
                onClick={previous}
                endIcon={<ArrowBackIosIcon />}
              ></Button>
            )}
            {currentPage >= pagesCount ? (
              <Button
                disabled
                onClick={next}
                endIcon={<ArrowForwardIosIcon />}
              ></Button>
            ) : (
              <Button onClick={next} endIcon={<ArrowForwardIosIcon />}></Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
