import React, {useContext} from "react";
import { ThemeContext } from "../context/themeContext";

export default function Theme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log("theme comp")
    return(
        <>
        <div>current Theme: {theme}</div>
        <button onClick={toggleTheme}>Toggle theme</button>
        </>
    )
}