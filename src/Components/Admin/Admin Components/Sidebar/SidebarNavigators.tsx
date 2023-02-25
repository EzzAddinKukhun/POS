import React from "react";
import { Link, Outlet } from "react-router-dom";
import Styles from "./Sidebar.module.css";

function SidebarNavigators() {
  return (
    <>
      <div className={Styles.navigatorsContainer}>
        <div className={Styles.navigatorsList}>
          <div className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-border-all"></i>
            </div>
            <div className={Styles.navigatorName}>
              <Link to="dashboard">Dashboard</Link>
            </div>
          </div>
          <div className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className={Styles.navigatorName}>
              <Link to="newProduct">New Product</Link>
            </div>
          </div>
          <div className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className={Styles.navigatorName}>
              <Link to="">New Category</Link>
            </div>
          </div>
          <div className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-money-bill"></i>
            </div>
            <div className={Styles.navigatorName}>
              <Link to="">Purchases</Link>
            </div>
          </div>
          <div className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className={Styles.navigatorName}>
              <Link to="">Sales</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SidebarNavigators;
