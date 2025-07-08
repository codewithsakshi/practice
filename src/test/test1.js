import useCounter from "./countHook";

export default function Component() {
    const { count, increment, decrement, reset, setCount } = useCounter(2);
  
    return (
      <div>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}