
import { Products } from "../Components/Table/PaginationTable";

// interface IAppState {
//     products: Products[];
//   } 

const initialState = {
    products: [],
}; 



const cartReducer = (state: any=initialState , action: any) =>{
    console.log(state); 
    switch (action.type){
        case "ADD": 
        return {
            ...state,
            products: [
                ...state.products,
                action.payload
            ]
            
        }

        case "INC_QUA": {
            console.log(action.payload)
            for (let i=0 ; i<state.products.length ; i++){
                if(state.products[i].productCode == action.payload){
                    state.products[i].productQuantity += 1;
                }
            }
            return {
                products: [
                    ...state.products,             
                ]       
            }

        }


        case "DEC_QUA": {
            for (let i=0 ; i<state.products.length ; i++){
                if(state.products[i].productCode == action.payload && state.products[i].productQuantity!=1){
                    state.products[i].productQuantity -= 1;
                }
            }
            return {
                products: [
                    ...state.products,             
                ]       
            }
        }


        case "DELETE_PRODUCT": {
            for (let i=0 ; i<state.products.length ; i++){
                if(state.products[i].productCode == action.payload){
                    state.products.splice(i,1); 
                }
            }
            return {
                products: [
                    ...state.products,             
                ]       
            }

        }
     
        
    }

}


export default cartReducer; 