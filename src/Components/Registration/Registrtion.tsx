import React, { useState } from "react";
import LogIn from "./LogIn";
import Styles from "./reg.module.css";
import RegistrationBackground from "./RegistrationBackground";
import logo from "../../imgs/logo.png";
import SignUp from "./SignUp";
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

function Registrtion() {
  let [isLogInFormDisplayed, setLogInFormDisplayed] = useState(true);

  function showSignUpForm() {
    setLogInFormDisplayed(false);
  }

  function showLogInForm() {
    setLogInFormDisplayed(true);
  }
  return (
    <div>
      <div className={Styles.regestrationContainer}>
        <div className={Styles.RegistrationForm}>
          <Fade right>
            <div className={Styles.RegistrationHeader}>
              <img className={Styles.logo} src={logo}></img>
            </div>
          </Fade>
          <Fade left>
            {isLogInFormDisplayed ? (
              <LogIn showSignUpForm={showSignUpForm} />
            ) : (
              <SignUp showLogInForm={showLogInForm} />
            )}
          </Fade>
        </div>
      
          <RegistrationBackground />
        
      </div>
    </div>
  );
}

export default Registrtion;
