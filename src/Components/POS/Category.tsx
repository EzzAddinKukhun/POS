import React from "react";
import Styles from './pos.module.css'
import food from '../../imgs/food.jpg'; 

function Category() {
  return (
    <div className={Styles.category}>
      <div className={Styles.categoryTheme}>
        <img className={Styles.categoryThumbnial} src={food} />
      </div>
      <div className={Styles.categoryName}>
        <h6>Food</h6>
      </div>
    </div>
  );
}

export default Category;
