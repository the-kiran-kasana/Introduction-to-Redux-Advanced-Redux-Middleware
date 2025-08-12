import React , {useState} from "react";
import {useSelector , useDispatch} from "react-redux";
import {addItem , removeItem} from "./cartSlice"

export default function Counter()
{

 const [item , setItem] = useState("")
 const dispatch = useDispatch();
 const items = useSelector((state) => state.carts.items)
 const total = useSelector((state) => state.carts.total)

 return (
   <>
       <h1>total items</h1>
       <ul>
       {products.map((p) => {
         <li key={p.id}>
           {p.name} - ${p.price}
         </li>
       })}

       </ul>
       <h3>total price : {total}</h3>

       <button onClick = {() => dispatch(addItem())}>add item</button>
       <button onClick = {() => dispatch(removeItem())}>remove item</button>
   </>
 )



}