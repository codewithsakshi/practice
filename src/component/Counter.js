import React, {useContext} from "react";
import { CountContext } from "../context/countContext";

export default function Counter() {
    const {count, increment, decrement} = useContext(CountContext);
    console.log("count component")
    return (
        <>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </>
    )
}