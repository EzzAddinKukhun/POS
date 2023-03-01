import React from "react";
import Styles from "../New Product/newProduct.module.css";
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
import { useState, useEffect } from "react";
import swal from "sweetalert";


interface Props {
  imgName: string, 
  categoryName: string
  status: string, 
  categoryId: number
}

function CategoryForm({categoryId, imgName, categoryName, status }: Props) {
  const [categoryImage, setCategoryImage] = useState("");

  if(categoryImage == ""){
    console.log(true)
  }

  const onSubmit = async (values: any) => {
    let formm = document.getElementById("form") as HTMLFormElement;
    const formdata = new FormData(formm);

    if (status == "add"){
      await fetch("http://localhost:5000/addNewCategory", {
        method: "POST",
        body: formdata, 
        
      })
        .then((result) => {
          if (result.status == 200){
              swal(
                  'Good job!',
                  'You clicked the button!',
                  'success'
                )
             
          }    
        })
    }
    else if (status == "update"){
      await fetch(`http://localhost:5000/updateCategory/${categoryId}`, {
        method: "PUT",
        body: formdata, 
        
      })
      .then((response) => response.json())
      .then((json) => {
        if (json.message == "success") {
          swal("Good job!", "Category Updated Successfully!", "success");
        }
      });

    }   
  };

  const form = (props: any) => {
    return (
      <form id="form" onSubmit={props.handleSubmit}>
        <div className={Styles.form}>
          <div className={Styles.sectionOne}>
            <Field
              name="name"
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              as={TextField}
            />
          </div>
          <div className={Styles.uploadedImageContainer}>
            <img
              width={100}
              height={100}
              src={categoryImage}
            ></img>
          </div>
          <div
            style={{ width: "100%" }}
            className={Styles.uploadButtonContainer}
          >
            <Button
              style={{ marginLeft: "auto", marginTop: 10 }}
              variant="contained"
              component="label"
              onChange={(e: any) => {
                setCategoryImage(URL.createObjectURL(e.target.files[0]));
              }}
            >
              UPLOAD
              <Field type="file" name="file" hidden />
            </Button>
          </div>
          <div className={Styles.saveBtnContainer}>
            <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
              {
                status == "add"? "Save" : "Update"
              } 
            </Button>
          </div>
        </div>
      </form>
    );
  };

  useEffect (()=>{
    setCategoryImage(`http://localhost:5000/${imgName}`)
  }, [imgName])
  return (
    <>
      <Formik initialValues={{
            name : categoryName
      }} onSubmit={onSubmit}>
        {form}
      </Formik>
    </>
  );
}

export default CategoryForm;
