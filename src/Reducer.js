import { createSlice } from "@reduxjs/toolkit";

let obj = {
    cartItems : []
}

let cartReducer = createSlice({
    name : "cart",
    initialState :  obj,
     reducers : {

        addToCart : (state,action)=>{
            // {name : "food name",price : 800 , Image : "...."}
            state.cartItems.push(action.payload)
        
        },
        removeFromCart : (state,action)=>{
            state.cartItems.splice(action.payload ,1)  
        }
     }
})

export const {addToCart,removeFromCart} = cartReducer.actions;
export default cartReducer.reducer