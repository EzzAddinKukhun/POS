import * as React from "react";
import { Products } from "../../../Table/PaginationTable";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductForm from "./ProductForm";
import Styles from "./newProduct.module.css";
import AddIcon from "@mui/icons-material/Add";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};


interface Props {
  openStatus: boolean;
  closeModal: () => void;
  modalFunctionality: string;
  productData: Products; 
}

export default function ProductsModal({ openStatus, closeModal, modalFunctionality, productData }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  React.useEffect(() => {
    setOpen(openStatus);
  }, [openStatus]);

  return (
    <>
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
            {
              modalFunctionality == "add"? <h2 className={Styles.textAlignCenter}>Add New Product</h2> : <h2 className={Styles.textAlignCenter}>Update Product</h2>
            }     
            <ProductForm  modalFunctionality={modalFunctionality} productData ={productData} closeForm={handleClose}/>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
