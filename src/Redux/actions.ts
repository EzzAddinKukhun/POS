import { Products } from "../Components/Table/PaginationTable";

const Add = (product: any) =>{
    console.log(product)
    return {
        type: "ADD", 
        payload : product
    }
}

const incQuantity = (productCode: string)=>{
    return {
        type: "INC_QUA",
        payload: productCode
    }
}

const decQuantity = (productCode: string)=>{
    return {
        type: "DEC_QUA",
        payload: productCode
    }
}


const deleteProduct = (productCode: string)=>{
    return {
        type: "DELETE_PRODUCT",
        payload: productCode
    }
}

const addNewCart = (cartName: string)=>{
    return {
        type: "ADD_NEW_CART",
        payload: cartName
    }
}

const selectCart = (cartName: string)=>{
    return {
        type: "SELECT_CART",
        payload: cartName
    }
}


const checkoutCart = (cartName: string)=>{
    return {
        type: "CHECKOUT_CART",
        payload: cartName
    }
}



export {Add, incQuantity, decQuantity, deleteProduct, addNewCart, selectCart, checkoutCart}