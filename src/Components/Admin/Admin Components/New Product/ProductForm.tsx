import React from "react";
import Styles from "./newProduct.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import Download from "../../../../imgs/download.png";
import PaginationTable from "../../../Table/PaginationTable";
import SaveIcon from "@mui/icons-material/Save";

function ProductForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <div className={Styles.form}>
        <div className={Styles.sectionOne}>
          <TextField
            style={{ width: "100%", marginBottom: 15 }}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: 15 }}
            id="outlined-basic"
            label="Product Code"
            variant="outlined"
          />
          <FormControl style={{ width: "100%", marginBottom: 15 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              //   style={{ width: "100%", marginBottom: 15 }}
              id="outlined-basic"
              label="Product Cost"
              variant="outlined"
            />
            <TextField
              //   style={{ width: "100%", marginBottom: 15 }}
              id="outlined-basic"
              label="Product Price"
              variant="outlined"
            />
          </div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Product Description"
            multiline
            rows={4}
            //   defaultValue="Default Value"
          />{" "}
        </div>
        <div className={Styles.sectionTwo}>
          <div className={Styles.uploadedImageContainer}>
            <img src={Download} className={Styles.uploadedImg}></img>
          </div>
          <div className={Styles.uploadButtonContainer}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
        </div>
        <div className={Styles.saveBtnContainer}>
          <Button variant="contained" endIcon={<SaveIcon />}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
