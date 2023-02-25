import React from "react";
import Charts from "../Charts/Charts";

import Navbar from "../Navbar/Navbar";
import Styles from "./dash.module.css";
import MidDashboard from "./MidDashboard";
import StatisticsCards from "./StatisticsCards";


function Dashboard() {
  
  return (
    <div className={Styles.outlet}>
      <Navbar name = {"Dashboard"} />
      <StatisticsCards />
      <Charts/>
      <MidDashboard/>
    </div>
  );
}

export default Dashboard;
