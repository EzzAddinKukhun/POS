import React, { useEffect } from "react";
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
import { Formik, Field } from "formik";
import swal from "sweetalert";
import { Products } from "../../../Table/PaginationTable";

interface Props {
  modalFunctionality: string;
  productData : Products
  closeForm : ()=> void
}

interface Categories {
  categoryName: string,
}

function ProductForm({ modalFunctionality, productData, closeForm }: Props) {
  const [categoryOption, setCategoryOption] = React.useState(productData.productCategory);
  const [categoriesOptions, setCategoriesOptions] = React.useState<
    Categories[]
  >([]);
  const [productImage, setProductImage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategoryOption(event.target.value as string);
  };

  async function getCategories() {
    await fetch(`http://localhost:5000/Categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCategoriesOptions(json);
      });
  }

  const onSubmit = async (values: any) => {
    let formm = document.getElementById("form") as HTMLFormElement;
    const formdata = new FormData(formm);

    if (modalFunctionality == "add") {
      await fetch("http://localhost:5000/addNewProduct", {
        method: "POST",
        body: formdata,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message == "no file uploaded") {
            swal("Ops!", "No Uploaded Image!", "error");
          } else if (json.message == "error") {
            swal(
              "Ops!",
              "There is an error, be sure that you enter all information correctly",
              "error"
            );
          } else if (json.message == "success") {
            swal("Good Job!", "The Product Added Successfully!", "success");
            closeForm(); 
          }
        });
    } else if (modalFunctionality == "update") {
      await fetch(`http://localhost:5000/updateProduct/${productData.id}`, {
        method: "PUT",
        body: formdata,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message == "success") {
            swal("Good job!", "Category Updated Successfully!", "success");
            closeForm(); 

          }
        });
    }
  };

  

  

  useEffect(() => {
    getCategories();
    if (modalFunctionality == "update"){
    setProductImage(`http://localhost:5000/${productData.productImg}`)
    }
    else if (modalFunctionality == "add"){
      setProductImage("http://localhost:5000/download.png")
    }
  }, []);


  const form = (props: any) => {
    return (
      <form id="form" onSubmit={props.handleSubmit}>
        <div className={Styles.form}>
          <div className={Styles.sectionOne}>
            <Field
              style={{ width: "100%", marginBottom: 15 }}
              name="productName"
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              as={TextField}
            />
            <Field
              style={{ width: "100%", marginBottom: 15 }}
              name="productCode"
              id="outlined-basic"
              label="Product Code"
              variant="outlined"
              as={TextField}
            />
            <FormControl style={{ width: "100%", marginBottom: 15 }} fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Field
                name="productCategory"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoryOption}
                label="Category"
                onChange={handleChange}
                as={Select}
              >
                {categoriesOptions.map((element) => {
                  return (
                    <MenuItem value={element.categoryName}>
                      {element.categoryName}
                    </MenuItem>
                  );
                })}
              </Field>
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <Field
                name="productQuantity"
                id="outlined-number"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                as={TextField}
              />
              <Field
                name="productCost"
                id="outlined-basic"
                label="Product Cost"
                variant="outlined"
                as={TextField}
              />
              <Field
                name="productPrice"
                id="outlined-basic"
                label="Product Price"
                variant="outlined"
                as={TextField}
              />
            </div>
            <Field
              fullWidth
              name="productDesc"
              id="outlined-multiline-static"
              label="Product Description"
              multiline
              rows={4}
              as={TextField}
            />{" "}
          </div>
          <div className={Styles.sectionTwo}>
            <div className={Styles.uploadedImageContainer}>
              <img  src={ productImage } className={Styles.uploadedImg}></img>
            </div>
            <div className={Styles.uploadButtonContainer}>
              <Button
                onChange={(e: any) => {
                  setProductImage(URL.createObjectURL(e.target.files[0]));
                }}
                variant="contained"
                component="label"
              >
                Upload
                <Field type="file" name="file" hidden />
              </Button>
            </div>
          </div>
          <div className={Styles.saveBtnContainer}>
            <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
              Save
            </Button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <Formik initialValues={{
        productName: productData.productName, 
        productCode: productData.productCode, 
        productQuantity: productData.productQuantity, 
        productPrice: productData.productPrice, 
        productCost: productData.productCost,
        productDesc: productData.productDescription,
      }} onSubmit={onSubmit}>
        {form}
      </Formik>
    </>
  );
}

export default ProductForm;
