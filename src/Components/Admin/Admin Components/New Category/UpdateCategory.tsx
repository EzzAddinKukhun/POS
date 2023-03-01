import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CategoryForm from "./CategoryForm";
import Styles from "../New Product/newProduct.module.css";
import AddIcon from "@mui/icons-material/Add";
import { stat } from "fs";



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface Props {
  isOpen: boolean;
  closeUpdateModal: () => void;
  categoryId : number,
  categoryName: string;
  categoryImgName: string,
}

function UpdateCategory({ isOpen, categoryId,categoryImgName, categoryName, closeUpdateModal }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    closeUpdateModal();
  };


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <h2 style={{ textAlign: "center" }}>Update Category</h2>
          <CategoryForm categoryId={categoryId} imgName={categoryImgName} categoryName={categoryName} status={"update"} />
        </Box>
      </Fade>
    </Modal>
  );
}

export default UpdateCategory;
