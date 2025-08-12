import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name : "counter",// unique name of slice

  initialState : {   //initial state
   value : 0
  },

  reducer :{
     increment : state => {state.value + 1},
     decrement : state => {state.value - 1},
     incbyAmount : state => {state.value += action.platload},
     reset : state => {state.value = 0},
  },
});

export const {increment ,decrement,incbyAmount ,reset} = counterSlice.action;
export default counterSlice.reducer
