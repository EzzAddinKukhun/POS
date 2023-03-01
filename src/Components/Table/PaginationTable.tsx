import React, { ReactNode, useState, useEffect } from "react";
import Styles from "./table.module.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paginations from "./Paginations";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { width } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import ProductsModal from "../Admin/Admin Components/New Product/ProductsModal";
import swal from 'sweetalert'; 

interface Products {
  id: number;
  productName: string;
  productCode: string;
  productCategory: string;
  productQuantity: number;
  productCost: number;
  productPrice: number;
  productDescription: string;
  productImg: string;
}

function PaginationTable() {
  const [range, setRange] = React.useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchToken, setSearchToken] = useState("");
  const [isProductsModalOpen, setProductModalOpen] = useState(false);
  const [productsModalFunctionality, setProductsModalFunctionality] =
    useState("add");
  const [products, setProducts] = useState<Products[]>([]);

 
  async function getProducts() {
    await fetch(`http://localhost:5000/Products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }

  async function deleteProduct(id: number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted the product, you will not be able to recover it!",
      icon: "warning",
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await fetch(`http://localhost:5000/deleteProduct/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.message == "success") {
              swal("Good job!", "Product Deleted Successfully!", "success");
            }
          });
      }
    });
  }

  function goToTheRight() {
    setSelectedPage(selectedPage + 1);
  }

  function goToTheLeft() {
    setSelectedPage(selectedPage - 1);
  }

  function displayData() {
    return products
      .filter((product) =>
        product.productName.toLowerCase().includes(searchToken)
      )
      .map((product, key) => {
        if (key >= range * selectedPage - range && key < range * selectedPage) {
          return (
            <tr>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img width={100} height={100} src={`http://localhost:5000/${product.productImg}`}></img>
              </td>
              <td>{product.productCategory}</td>
              <td>{product.productCode}</td>
              <td>{product.productQuantity}</td>
              <td>{product.productPrice}$</td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => openModal("update")}
                >
                  <EditIcon />
                </IconButton>
              </td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={()=>deleteProduct(product.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </td>
            </tr>
          );
        }
      });
  }

  function openModal(functionality: string) {
    setProductModalOpen(true);
    setProductsModalFunctionality(functionality);
  }

  function closeModal() {
    setProductModalOpen(false);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRange(parseInt(event.target.value));
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  },[]);

  useEffect(() => {
    setSelectedPage(1);
  }, [range]);

  return (
    <>
      <div className={Styles.addNewProductBtn}>
        <Button
          onClick={() => openModal("add")}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add New Product
        </Button>
      </div>
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
                  pageNumber <= Math.ceil(products.length / range) &&
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
            /{Math.ceil(products.length / range)}
          </div>
        </div>
        <table className={Styles.table}>
          <thead className={Styles.tableHeader}>
            <th>#</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Code</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
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
            count={Math.ceil(products.length / range)}
          />
          <div className={Styles.elementsCounter}>
            {selectedPage == Math.ceil(products.length / range) ? (
              <h4>
                {range * selectedPage - range + 1}-{products.length} of {products.length}
              </h4>
            ) : (
              <h4>
                {range * selectedPage - range + 1}-{range * selectedPage} of{" "}
                {products.length}
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
      <ProductsModal
        openStatus={isProductsModalOpen}
        closeModal={closeModal}
        modalFunctionality={productsModalFunctionality}
      />
    </>
  );
}

export default PaginationTable;
