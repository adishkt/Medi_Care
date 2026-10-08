import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle(){
    const { theme,setTheme } = useContext(ThemeContext);

    return (
        <button
        onClick={()=>(setTheme(themes=>(themes=="light"?"dark":"light")))}>
            {theme}
        </button>
    )
}

export default ThemeToggle;