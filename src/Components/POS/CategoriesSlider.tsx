import React from "react";
import Styles from "./pos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import food from "../../imgs/food.jpg";
import Category from "./Category";
import { useState, useEffect } from "react";
const Fade = require("react-reveal/Fade");

interface Categories {
  categoryId: number;
  categoryName: string;
  categoryImg: string;
  productsNumber: number;
}

function CategoriesSlider() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  async function getCategories() {
    await fetch(`http://localhost:5000/Categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.categories}>
        <h2 style={{ marginBottom: 20, paddingLeft: 10, paddingTop: 10 }}>
          {" "}
          Categories{" "}
        </h2>
        <Slider {...settings}>
          {categories.map((item, key) => {
            return (
              <Fade delay={key*250}>
                <Category
                  categoryName={item.categoryName}
                  categoryImgName={item.categoryImg}
                />
              </Fade>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CategoriesSlider;
