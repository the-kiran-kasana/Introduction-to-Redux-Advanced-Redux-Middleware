import React, {useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice'

export default function Counter() {
  const [amount ,setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


 function handleChange(e){
   setAmount(e.target.value);
 }

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} >  Increment </button>
        <span>   { count }  </span>
        <button aria-label="Decrement value"  onClick={() => dispatch(decrement())} > Decrement </button>
        <br/><br/><br/>
        <input type="number" value={amount} placeholder="enter amount" onChange={handleChange} />
        <button aria-label="Increment by amount value"  onClick={() => dispatch(incrementByAmount(amount))} > Increment by amount</button>

      </div>
    </div>
  )
}