import React, { ReactNode, useState, useEffect } from "react";
import Styles from "../../../../Table/table.module.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paginations from "../../../../Table/Paginations";
import { width } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NewCategoryModal from "../NewCategoryModal";
import UpdateCategory from "../UpdateCategory";
import swal from "sweetalert";

const Fade = require("react-reveal/Fade");

interface Categories {
  categoryId: number;
  categoryName: string;
  categoryImg: string;
  productsNumber: number;
}

function CategoriesTable() {
  const [range, setRange] = React.useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [searchToken, setSearchToken] = useState("");
  const [updateModalStatus, setUpdateModalStatus] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState({
    categoryId: 0,
    categoryName: "",
    categoryImgName: "",
  });

  function openUpdateModal(
    categoryId: number,
    categoryName: string,
    categoryImgName: string
  ) {
    setUpdateModalStatus(true);
    let categoryInformation = {
      categoryId,
      categoryName,
      categoryImgName,
    };
    setCategoryToUpdate(categoryInformation);
  }

  function closeUpdateModal() {
    setUpdateModalStatus(false);
  }

  function goToTheRight() {
    setSelectedPage(selectedPage + 1);
  }

  function goToTheLeft() {
    setSelectedPage(selectedPage - 1);
  }

  function displayData() {
    return categories
      .filter((item) => item.categoryName.toLowerCase().includes(searchToken))
      .map((element, key) => {
        if (key >= range * selectedPage - range && key < range * selectedPage) {
          return (
            <tr>
              <td>{element.categoryId}</td>
              <td>{element.categoryName}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={100}
                  height={100}
                  src={`http://localhost:5000/${element.categoryImg}`}
                ></img>
              </td>
              <td>{element.productsNumber}</td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() =>
                    openUpdateModal(
                      element.categoryId,
                      element.categoryName,
                      element.categoryImg
                    )
                  }
                >
                  <EditIcon />
                </IconButton>
              </td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => deleteCategory(element.categoryId)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </td>
            </tr>
          );
        }
      });
  }

  async function getCategories() {
    await fetch(`http://localhost:5000/Categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      });
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRange(parseInt(event.target.value));
  };

  async function deleteCategory(id: number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted the product, you will not be able to recover it!",
      icon: "warning",
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await fetch(`http://localhost:5000/deleteCategory/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.message == "success") {
              swal("Good job!", "Category Deleted Successfully!", "success");
            }
          });
      }
    });
  }

  useEffect(() => {
    setTimeout(() => {
      getCategories();
    }, 1000);
  }, [categories]);

  useEffect(() => {
    setSelectedPage(1);
  }, [range, updateModalStatus]);

  return (
    <>
      {categories.length == 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Fade>
            <div className={Styles.tableContainer}>
              <div className={Styles.searchBar}>
                <div className={Styles.searchField}>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Search"
                    variant="standard"
                    onChange={(e) => setSearchToken(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    error
                    onChange={(e) => {
                      let pageNumber = parseInt(e.target.value);
                      if (
                        pageNumber <= Math.ceil(categories.length / range) &&
                        pageNumber >= 1
                      ) {
                        setSelectedPage(parseInt(e.target.value));
                      }
                    }}
                    style={{ width: 20 }}
                    id="standard-basic"
                    defaultValue={selectedPage}
                    variant="standard"
                  />
                  /{Math.ceil(categories.length / range)}
                </div>
              </div>

              <table className={Styles.table}>
                <thead className={Styles.tableHeader}>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Category Thumbnail</th>
                  <th>Products</th>
                  <th>Update</th>
                  <th>Delete</th>
                </thead>
                <tbody className={Styles.tableBody}>{displayData()}</tbody>
              </table>

              <div className={Styles.tableFooter}>
                <Paginations
                  goToTheRight={goToTheRight}
                  goToTheLeft={goToTheLeft}
                  currentPage={selectedPage}
                  count={Math.ceil(categories.length / range)}
                />
                <div className={Styles.elementsCounter}>
                  {selectedPage == Math.ceil(categories.length / range) ? (
                    <h4>
                      {range * selectedPage - range + 1}-{categories.length} of{" "}
                      {categories.length}
                    </h4>
                  ) : (
                    <h4>
                      {range * selectedPage - range + 1}-{range * selectedPage}{" "}
                      of {categories.length}
                    </h4>
                  )}
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Range
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={range + ""}
                    onChange={handleChange}
                    label="Range"
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Fade>
          <UpdateCategory
            isOpen={updateModalStatus}
            categoryId={categoryToUpdate?.categoryId}
            categoryImgName={categoryToUpdate?.categoryImgName}
            categoryName={categoryToUpdate?.categoryName}
            closeUpdateModal={closeUpdateModal}
          />
        </>
      )}
    </>
  );
}

export default CategoriesTable;
