import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../utity/firebase"


//sign
export const signupUser = createAsyncThunk(

   "auth/signupUser",
   async({email,password}) , {rejectwithValue}) => {
        try {

         const userCredential = await createUserWithEmailAndPassword(auth , email , password);
         return userCredential.user
        } catch (error){
             return rejectwithValue(error.message)
        }
   }
);



//login
export const loginUser = createAsyncThunk(

   "auth/loginUser",
   async({email,password}) , {rejectwithValue}) => {
   try {

         const userCredential = await signInWithEmailAndPassword(auth , email , password);
         return userCredential.user
        } catch (error){
             return rejectwithValue(error.message)
        }
   }
);



const authSlice = createSlice({
   name : "auth",

   initialState : {
   user : null,
   loading : false,
   error:null
   },

   reducer:{
     logout : (state) => {
       state.user : null;
     }
   },

   extraReducer : ( builder) => {
    builder
    .addCase(signupUser.pending ,(state) =>{
       state.loading = true;
    })
    .addCase(signupUser.fulfilled , (state, action) => {
       state.loading = false;
       state.user = action.payload

    })
    .addCase(signupUser.rejected , (state,action) => {
      state.loading = false;
      state.error = action.payload

    })




    .addCase(loginUser.pending , (state) =>{
       state.loading = true;
    })

    .addCase(loginUser.fulfilled , (state, action) => {
           state.loading = false;
           state.user = action.payload
    })

    .addCase(loginUser.rejected , (state,action) => {
          state.loading = false;
          state.error = action.payload

   })

   }

})


export const {logout} = authSlice.actions;

export default authSlice.reducer;