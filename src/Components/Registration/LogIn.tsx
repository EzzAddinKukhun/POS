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
import { Field, Formik, ErrorMessage } from "formik";
import swal from "sweetalert";
import TextError from "./TextError";
import * as Yub from "yup";

interface Props {
  showSignUpForm: () => void;
}

function LogIn({ showSignUpForm }: Props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = async (values: any) => {
    await fetch("http://localhost:5000/login", {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message == "this account does not exist") {
          swal(
            "Ops!",
            "This account is doesn't exist!, Try to sure of enetered username..",
            "error"
          );
         
        } 
        else  if (json.message == "Password is wrong") {
          swal("Ops!", "Password is Wrong!", "error");
        }
        else if (json.message == "success") {
          let userInformation = {
            userId: json.userId, 
            userName: json.username,
            userType: json.userType, 
          }
          let userInformationStringified = JSON.stringify(userInformation); 
          localStorage.setItem("Data", userInformationStringified); 
          window.location.reload(); 

        }
      });
  };

  const schema = () => {
    const schema = Yub.object({
      username: Yub.string().required(),
      password: Yub.string().required(),
    });

    return schema;
  };

  const form = (props: any) => {
    return (
      <form id="form" onSubmit={props.handleSubmit}>
        <div className={Styles.logIn}>
          <div style={{ marginBottom: 60, width: "70%", margin: "auto" }}>
            <Field
              name="username"
              style={{ marginBottom: 4 }}
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage
              name="username"
              component={() => TextError("Username is Required!")}
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Field
                name="password"
                id="outlined-adornment-password"
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
          </div>
          <div className={Styles.logInSubmission}>
            <Button type="submit" style={{ width: "30%", marginBottom:20 }} variant="contained">
              LogIn
            </Button>
            <p>
              If you don't have an account, please &nbsp;{" "}
              <a onClick={showSignUpForm} href="#">
                Sign Up
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
          username: "",
          password: "",
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {form}
      </Formik>
    </>
  );
}

export default LogIn;
