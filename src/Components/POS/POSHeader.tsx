import React from "react";
import Styles from "./pos.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  getSearchToken: (token: string) => void;
}

function POSHeader({ getSearchToken }: Props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.posHeader}>
        <div className={Styles.userNameWelcome}>
          <h2 style={{ paddingLeft: 10 }}>Welcome, Ezz Addin</h2>
          <h6 style={{ paddingLeft: 10 }}>Discover what you need easily</h6>
        </div>
        <div className={Styles.searchBar}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              onChange={(e) => getSearchToken(e.target.value)}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default POSHeader;
