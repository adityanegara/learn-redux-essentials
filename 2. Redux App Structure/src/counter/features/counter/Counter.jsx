import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, incrementAsync} from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <button onClick={()=>{dispatch(incrementByAmount(amount))}}>Incrsement By Amount</button>
      <button onClick={()=>{dispatch(incrementAsync(3))}}>Increment async</button>
    </>
  );
};

export default Counter;
