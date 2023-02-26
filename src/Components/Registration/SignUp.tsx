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
  return (
    <>
      <div className={Styles.logIn}>
        <div style={{ marginBottom: 60, width: "70%", margin: "auto" }}>
            <TextField
              style={{ marginBottom: 20 }}
              fullWidth
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          <TextField
            style={{ marginBottom: 20 }}
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 20 }}
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
          </FormControl>
         
        </div>
        <div className={Styles.logInSubmission}>
          <Button style={{ width: "30%" }} variant="contained">
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
    </>
  );
}

export default SignUp;
