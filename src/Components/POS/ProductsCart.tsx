import React, { useEffect, useState } from "react";
import Styles from "./pos.module.css";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { Products } from "../Table/PaginationTable";
import { useDispatch } from "react-redux";
import { incQuantity, decQuantity, deleteProduct } from "../../Redux/actions";

function ProductsCart() {
  const product = useSelector((state: any) => state?.products);
  const [products, setProducts] = useState<Products[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(product);
  }, [product]);

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
      {products?.map((item) => {
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
