import { configureStore }  from '@reduxjs/toolkit'
import cartsReducer from "./features/cartSlice"

export const store = configureStore({

 reducer : {
   carts : cartsReducer,
 },

});