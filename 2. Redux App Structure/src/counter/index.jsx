import React from "react";
import Counter from "./features/counter/Counter";
import { useSelector } from "react-redux/es/exports";
import { selectCount } from "./features/counter/counterSlice";

const CounterFeature = () =>{
    const counter = useSelector(selectCount)
    return(
        <div>
            <Counter/>
            <p>Counter value: {counter}</p>
            <p>Status: </p>
        </div>
    )
}

export default CounterFeature;