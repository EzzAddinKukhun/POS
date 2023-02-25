import React from "react";
import Card from "./Card";
import Styles from "./dash.module.css";


function StatisticsCards() {
    const arr = [
        {name: "Sales",icon: <i className="fa-solid fa-cart-shopping"></i>, color: "#f50057"},
        {name: "Total Sales Today",icon: <i className="fa-solid fa-dollar-sign"></i>, color: "#2979ff"},
        {name: "Purchases",icon: <i className="fa-solid fa-cart-plus"></i>, color: "#00e676"},
        {name: "Total Purchases Today",icon: <i className="fa-solid fa-coins"></i>, color: "#ffc400"}
    ]
  return (
    <div className={Styles.cardsContainer}>
      {
        arr.map((item)=>{
            return (
                <Card icon={item.icon} name={item.name} color={item.color} />
            ); 
        })
      }
      
    </div>
  );
}

export default StatisticsCards;
