import React from "react";
import { Link, Outlet } from "react-router-dom";
import Styles from "./Sidebar.module.css";
import swal from "sweetalert";

function SidebarNavigators() {
  function logOut() {
    swal({
      title: "Are you sure that you want to Logout?",
      icon: "warning",
      dangerMode: true,
    }).then((logOut) => {
      if (logOut) {
        localStorage.removeItem("Data"); 
        window.location.reload(); 
      } 
    });
  }
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
              <Link to="categories">New Category</Link>
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
          <div onClick={logOut} className={Styles.navigator}>
            <div className={Styles.navigatorIcon}>
              <i className="fa-solid fa-power-off"></i>
            </div>
            <div className={Styles.navigatorName}>LogOut</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SidebarNavigators;
