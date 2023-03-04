import React from "react";
import Styles from "./dash.module.css";

type Props = {
    icon: JSX.Element,
    name : string,
    color : string
}

function Card({icon, name, color}: Props) {
  return (
    <div style={{backgroundColor: color}} className={Styles.card}>
      <div className={Styles.cardIcon}>
        {icon}
      </div>
      <div className={Styles.cardData}>
        <div className={Styles.counter}><b>2300$</b></div>
        <div className={Styles.dataType}><b>{name}</b></div>
      </div>
    </div>
  );
}

export default Card;
