import React from "react";
import Styles from './pos.module.css'
import food from '../../imgs/food.jpg'; 

interface CategoryInformation {
  categoryName: string, 
  categoryImgName: string
}

function Category({categoryName, categoryImgName}: CategoryInformation) {
  return (
    <div className={Styles.category}>
      <div className={Styles.categoryTheme}>
        <img className={Styles.categoryThumbnial} src={`http://localhost:5000/${categoryImgName}`} />
      </div>
      <div className={Styles.categoryName}>
        <h6>{categoryName}</h6>
      </div>
    </div>
  );
}

export default Category;
