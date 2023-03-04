import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import Styles from "./table.module.css";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { getValue, isDisabled } from "@testing-library/user-event/dist/utils";

interface Props {
  count: number;
  goToTheLeft: () => void;
  goToTheRight: () => void;
  currentPage: number;
}

function Paginations({
  count,
  currentPage,
  goToTheRight,
  goToTheLeft,
}: Props) {
  useEffect(() => {
    console.log(currentPage);
  }, [count, currentPage]);

  return (
    <div className={Styles.paginationContainer}>
      {currentPage == 1 ? (
        <IconButton disabled size="small" color="primary" aria-label="Next">
          <ArrowBackIosNewIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            goToTheLeft();
          }}
          size="small"
          color="primary"
          aria-label="Next"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}

      {currentPage != count ? (
        <IconButton
          onClick={() => {
            goToTheRight();
          }}
          size="small"
          color="primary"
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      ) : (
        <IconButton disabled size="small" color="primary" aria-label="Next">
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </div>
  );
}

export default Paginations;
