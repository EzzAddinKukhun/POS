import React from "react";
import Styles from "./Sidebar.module.css";
import logo from "../../../../imgs/result.png";


function SidebarHeader() {
  return (
    <div className={Styles.sidebarHeader}>
      <img className={Styles.websiteLogo} src={logo}></img>
    </div>
  );
}

export default SidebarHeader;
