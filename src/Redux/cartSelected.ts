
const initialState = {
    cartNameSelected : ""
}



const cartSelected = (state: any=initialState, action: any)=>{
    console.log(state.cartsNames)
    switch(action.type){
        case "SELECT_CART": 
        return {
            cartNameSelected: action.payload
        }
        default: return state; 
    }
   
}


export default cartSelected