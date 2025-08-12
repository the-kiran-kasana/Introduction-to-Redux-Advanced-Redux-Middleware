import React ,{useState}from "react"

import { useSelector, useDispatch } from 'react-redux'
import {loginUser} from "../feature/auth/authSlice"

function login()
{
  const dispatch = useDispatch();
  const {user ,loading , error} = useSelector((state) => state.auth)
  const [email setEmail] = useState("")
  const [password setPassword] = useState("")
  const [FormError , setFormError] = useState("")

  const  handleSubmit(e) => {
    e.preventDefault();

    if(!email || !password)
    {
      setFormError("fill form")
      return
    }

    if(password.length < 6)
    {
      setFormError("invalid password")
      return;
    }
   dispatch(signupUser({email,password})

  };

  return (
   <>
   <h1>login page</h1>
   <form onSubmit={han dleSubmit}>
    <input type="email"  placeholder="email" value={email} onChange = {(e) => setEmail(e.target.value)}>
    <input type="password"  placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}>

    {FormError && (<div>{FormError}</div>)}
    {error && (<div>{error}</div>)}


    <button type="submit" disable = {loading}>{loading ? "signup .." : "signup"}<button>
   </form>

   </>
  )

}