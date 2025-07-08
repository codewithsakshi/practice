import { createContext, useState } from "react";

export const CountContext = createContext(null);

export const CountProvider = ({ children }) => {
    console.log("count provider")
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }
   
    return(
        <CountContext.Provider value={{count, increment, decrement}}>
          {children}    
        </CountContext.Provider>
    )
}