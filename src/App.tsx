import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PaginationTable from "./Components/Table/PaginationTable";
import Admin from "./Components/Admin/Admin";
import Registrtion from "./Components/Registration/Registrtion";
import POS from "./Components/POS/POS";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import cartReducer from "./Redux/CartReducer";
import reducers from "./Redux/reducers";

function App() {
  let store = createStore(reducers);
  const [username, setUsername] = React.useState("");
  const [userType, setUserType] = React.useState("");

  function renderUserPage(username: string, userType: string) {

    if (username == "" && userType == ""){
      return (
        <Registrtion/>
      ); 
    }
    else {
      if (userType == 'user'){
        return (
          <Provider store={store}>
        <POS />
      </Provider>
  
        ); 
      }
      else if (userType == 'admin'){
        return (
          <Admin/>
        ); 
      }

    }
    }
  
  useEffect(() => {
    let userDataFromLocalStorage = localStorage.getItem("Data");
    if (userDataFromLocalStorage == null) {
      setUsername("");
      setUserType("");
    } else {
      let dataAfterParsed = JSON.parse(userDataFromLocalStorage || "{}");
      setUsername(dataAfterParsed.username);
      setUserType(dataAfterParsed.userType);
    }
  }, []);

  return (
    <>
      {renderUserPage(username, userType)}
      
    </>
  );
}

export default App;
