import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({

 name : "carts",

 initialState : {
    total : 0,
    items : []
 },

 reducer : {
    totalPrice : (state) => {
      state.total += 1
    },

    addItem : (state,action) => {
      state.total = 0;
    },

    removeItem : (state,action) =>
    {
       state.total = 0;
    }
 },

})


export const {addItem , removeItem} = cartSlice.actions
export default cartSlice.reducer
