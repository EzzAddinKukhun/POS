import React, { useEffect, useState } from "react";
import Styles from "./pos.module.css";
import ProductCart from "./ProductCart";
import { Products } from "../Table/PaginationTable";
import { useDispatch, useSelector } from "react-redux";
import reducers from "../../Redux/reducers";
import { incQuantity, decQuantity, deleteProduct } from "../../Redux/actions";

function ProductsCart() {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentCart, setCurrentCart] = useState("");
  const product = useSelector((state: any) => state?.products?.products);
  const cartSelected = useSelector(
    (state: any) => state?.cartNameSelected?.cartNameSelected
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(products);
  }, [product]);

  useEffect(() => {
    setCurrentCart(cartSelected);
  }, [cartSelected]);

  function incrementQuantity(productCode: string) {
    dispatch(incQuantity(productCode));
  }

  function decrementQuantity(productCode: string) {
    dispatch(decQuantity(productCode));
  }

  function deleteItem(productCode: string) {
    dispatch(deleteProduct(productCode));
  }

  return (
      <div className={Styles.productsCart}>
        {
        product.length == 0? 
        <div className={Styles.notification}>
          No Products Inside The Cart
        </div>
        :product.filter(
          (element: any) => element.cartName == currentCart
        ).map((item:any) => {
          return (
            <>
              <ProductCart
                productImgName={item.productImg}
                productName={item.productName}
                productPrice={item.productPrice}
                productCode={item.productCode}
                productQuantity={item.productQuantity}
                incrementQuantity={() => incrementQuantity(item.productCode)}
                decrementQuantity={() => decrementQuantity(item.productCode)}
                deleteProduct={() => deleteItem(item.productCode)}
              />
            </>
          );
        })}
      </div>
  );
}

export default ProductsCart;
