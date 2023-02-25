import React from "react";
import Styles from "../Dashboard/dash.module.css";
import ComboBox from "./ComboBox";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";

function Charts() {
  return (
    <div className={Styles.charts}>
      <div className={Styles.barChartContainer}>
        <div className={Styles.barChartContainerHeader}>
          <div>
            <p>Selling Per Month In Custom Year</p>
          </div>
          <ComboBox />
        </div>
        <BarChart />
      </div>
      <div className={Styles.pieChartContainer}>
        <div>
          <p>Selling Per Month In Custom Year</p>
        </div>
        <PieChart />
      </div>
    </div>
  );
}

export default Charts;
