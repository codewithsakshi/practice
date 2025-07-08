import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
    console.log("useContext theme")
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return(
     <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
     </ThemeContext.Provider>
    )

}
