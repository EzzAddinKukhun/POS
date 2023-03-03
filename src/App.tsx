import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PaginationTable from "./Components/Table/PaginationTable";
import Admin from "./Components/Admin/Admin";
import Registrtion from "./Components/Registration/Registrtion";
import POS from "./Components/POS/POS";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import cartReducer from "./Redux/CartReducer";

function App() {
  let store = createStore(cartReducer);
  // console.log(store);
  return (
    <>
      <Provider store={store}>
        <POS />
      </Provider>
    </>
  );
}

export default App;
