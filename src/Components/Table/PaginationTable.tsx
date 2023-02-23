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

function PaginationTable() {
  const [range, setRange] = React.useState(5);
  const [selectedPage, setSelectedPage] = useState(1);
  let [searchToken, setSearchToken] = useState("");

  const arr = [
    { name: "test", category: "test-cat", code: 1233, quantity: 14, price: 50 },
    {
      name: "test2",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test3",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test4",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test5",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test6",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test7",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test8",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test9",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test10",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test11",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test12",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test13",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test14",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test15",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test16",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test17",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test18",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test19",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test20",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test21",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test22",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test23",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test24",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test25",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test26",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test27",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
    {
      name: "test28",
      category: "test-cat",
      code: 1233,
      quantity: 14,
      price: 50,
    },
  ];


  function goToTheRight() {
    setSelectedPage(selectedPage+1);
  }

  function goToTheLeft() {
    setSelectedPage(selectedPage-1);
  }

  function filterResultByProductName() {
    return arr
      .filter((item) => item.name.toLowerCase().includes(searchToken))
      .map((element, key) => {
        if (key >= range * selectedPage - range && key < range * selectedPage) {
          return (
            <tr>
              <td>{key + 1}</td>
              <td>{element.name}</td>
              <td>{element.code}</td>
              <td>{element.code}</td>
              <td>{element.quantity}</td>
              <td>{element.price}$</td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <EditIcon />
                </IconButton>
              </td>
              <td>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </td>
            </tr>
          );
        }
      });
  }

  function displayData() {
    return arr.map((element, key) => {
      if (key >= range * selectedPage - range && key < range * selectedPage) {
        return (
          <tr>
            <td>{key + 1}</td>
            <td>{element.name}</td>
            <td>{element.code}</td>
            <td>{element.code}</td>
            <td>{element.quantity}</td>
            <td>{element.price}$</td>
            <td>
              <IconButton
                size="small"
                color="primary"
                aria-label="add to shopping cart"
              >
                <EditIcon />
              </IconButton>
            </td>
            <td>
              <IconButton
                size="small"
                color="primary"
                aria-label="add to shopping cart"
              >
                <DeleteIcon color="error" />
              </IconButton>
            </td>
          </tr>
        );
      }
    });
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRange(parseInt(event.target.value));
  };

  useEffect (()=>{
    setSelectedPage(1)

  },[range])

  return (
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
          onChange={(e)=>{
            let pageNumber = parseInt(e.target.value); 
            if (pageNumber <= Math.ceil(arr.length / range) && pageNumber>=1){
              setSelectedPage(parseInt(e.target.value))
            }
          }
          
          }
          style={{width:20}} id="standard-basic" defaultValue={selectedPage} variant="standard" />/{Math.ceil(arr.length / range)}
        </div>
      </div>
      <table className={Styles.table}>
        <thead className={Styles.tableHeader}>
          <th>#</th>
          <th>Name</th>
          <th>Code</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody className={Styles.tableBody}>
          {searchToken.length > 0 ? filterResultByProductName() : displayData()}
        </tbody>
      </table>
      <div className={Styles.tableFooter}>
        <Paginations
          goToTheRight={goToTheRight}
          goToTheLeft={goToTheLeft}
          currentPage={selectedPage}
          count={Math.ceil(arr.length / range)}
        />
        <div className={Styles.elementsCounter}>
          {selectedPage == Math.ceil(arr.length / range) ? (
            <h4>
              {range * selectedPage - range + 1}-{arr.length} of {arr.length}
            </h4>
          ) : (
            <h4>
              {range * selectedPage - range + 1}-{range * selectedPage} of{" "}
              {arr.length}
            </h4>
          )}
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Range</InputLabel>
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
  );
}

export default PaginationTable;
