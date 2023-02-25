import React from "react";
import Styles from "./dash.module.css";
import { PieChart } from "../Charts/PieChart";
import BasicTable from "./BasicTable";

function MidDashboard() {
  return (
    <div className={Styles.charts}>
      <div className={Styles.barChartContainer}>
        <div className={Styles.barChartContainerHeader}>
          <div>
            <p>Top Selling Products</p>
          </div>
        </div>
        <BasicTable />
      </div>
      <div className={Styles.pieChartContainer}>
        <div>
          <p>Top 5 Customers</p>
        </div>
        <PieChart />
      </div>
    </div>
  );
}

export default MidDashboard;
