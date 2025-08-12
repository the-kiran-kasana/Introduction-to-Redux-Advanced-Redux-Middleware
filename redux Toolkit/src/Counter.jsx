import {increment ,decrement,incbyAmount ,reset} from "./counterSlice"
import { useSelector ,useDispatch} from "react-redux"
import React from "react"

export default function Counter()
{
 const count = useSelector((state) => state.counter.name));

 const dispatch = useDispatch();

 return (
 <>
 <button onClick = {() => dispatch(increment()}>increment </button>
 <button onClick = {() => dispatch(decrement()}>decrement </button>
 <button onClick = {() => dispatch(reset()}>reset </button>


 </>
 );

}