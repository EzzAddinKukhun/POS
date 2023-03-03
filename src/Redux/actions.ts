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



export {Add, incQuantity, decQuantity, deleteProduct}