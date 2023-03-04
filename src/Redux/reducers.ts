import cartReducer from "./CartReducer";
import multipleCarts from "./multipleCarts";
import cartSelected from "./cartSelected"; 
import {combineReducers} from "redux"; 

const reducers = combineReducers({
    products:cartReducer,
    carts:multipleCarts,
    cartNameSelected: cartSelected
})

export default reducers; 