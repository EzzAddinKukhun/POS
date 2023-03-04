

const initialState = {
    cartsNames : []
}



const multipleCarts = (state: any=initialState, action: any)=>{
    console.log(state.cartsNames)
    switch(action.type){
        case "ADD_NEW_CART": 
        return {
            ...state,
            cartsNames: [
                ...state.cartsNames,
                action.payload
            ]
        }

        case "CHECKOUT_CART": 
        for (let i=0 ; i<state.cartsNames.length ; i++){
            if (state.cartsNames[i] == action.payload){
                state.cartsNames.splice(i,1); 
            }
        }
        return {
            cartsNames: [
                ...state.cartsNames,             
            ]      
        }
        default: return state; 
    }
   
}


export default multipleCarts