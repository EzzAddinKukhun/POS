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

function NewCategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={Styles.addNewProductBtn}>
        <Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
          Add New Category
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 style={{ textAlign: "center" }}>Add New Category</h2>
            <CategoryForm imgName={""} categoryName = {""} categoryId={0} status="add" />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default NewCategoryModal;
