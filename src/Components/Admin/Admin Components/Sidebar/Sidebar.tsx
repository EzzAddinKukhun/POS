import React from "react";
import Styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarNavigators from "./SidebarNavigators";

function Sidebar() {
  return (
    <div className={Styles.sidebarContainer}>
      <SidebarHeader />
      <SidebarNavigators />
    </div>
  );
}

export default Sidebar;
