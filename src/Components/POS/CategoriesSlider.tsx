import React from "react";
import Styles from "./pos.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import food from '../../imgs/food.jpg'; 
import Category from "./Category";


// const Slider = require("react-slick");

function CategoriesSlider() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.categories}>
        <h2 style={{marginBottom: 20, paddingLeft: 10, paddingTop: 10}}> Categories </h2>
        <Slider {...settings}>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
         
         
        </Slider>
      </div>
    </div>
  );
}

export default CategoriesSlider;
