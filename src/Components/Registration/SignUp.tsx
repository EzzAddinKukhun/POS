import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Styles from "./reg.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yub from "yup";

import swal from "sweetalert";
import TextError from "./TextError";
const Fade = require("react-reveal/Fade");

interface Props {
  showLogInForm: () => void;
}
function SignUp({ showLogInForm }: Props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = async (values: any) => {
    console.log(values)
   
    await fetch("http://localhost:5000/signUp", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message == "username is exist") {
            swal("Ops!", "This account is already exist!, Try to use another username..", "error");
          }
          else if (json.message == "success") {
            swal("Good Job!", "You Signed Up Successfully!", "success");
          }
        });
  };

  const schema = () => {
    const schema = Yub.object({
      fullName: Yub.string().required(),
      userName: Yub.string().required(),
      password: Yub.string().required(),
      passwordConfirmation: Yub.string().required().oneOf([Yub.ref('password')]), 
    });

    return schema;
  };

  const form = (props: any) => {
    return (
      <form id="form" onSubmit={props.handleSubmit}>
        <div className={Styles.logIn}>
          <div style={{ marginBottom: 60, width: "70%", margin: "auto" }}>
            <Field
              style={{ marginBottom: 4 }}
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              name="fullName"
              as={TextField}
            />
            <ErrorMessage
              name="fullName"
              component={() => TextError("Full Name is Required!")}
            />

            <Field
              style={{ marginBottom: 4 }}
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="userName"
              as={TextField}
            />
            <ErrorMessage
              name="userName"
              component={() => TextError("Username is Required!")}
            />

            <FormControl
              style={{ marginBottom: 4 }}
              fullWidth
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Field
                id="outlined-adornment-password"
                name="password"
                as={OutlinedInput}
              
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <ErrorMessage
                name="password"
                component={() => TextError("Password is Required!")}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <Field
                id="outlined-adornment-password"
                name="passwordConfirmation"
                type={showPassword ? "text" : "password"}
                as={OutlinedInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <ErrorMessage
                name="passwordConfirmation"
                component={() => TextError("Two Passwords are not identical!")}
              />
          
            </FormControl>
          </div>
          <div className={Styles.logInSubmission}>
            <Button type="submit" style={{ width: "30%" }} variant="contained">
              Sign Up
            </Button>
            <p>
              If you have an account, just &nbsp;{" "}
              <a onClick={showLogInForm} href="#">
                Log In
              </a>
            </p>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          userName: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {form}
      </Formik>
    </>
  );
}

export default SignUp;
