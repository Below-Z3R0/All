import { useState } from "react";
import { ThemeContext } from "./CreateThemeContext";

export function ThemeProvider({ children }) {
    const [Theme, setTheme] = useState('Night');
    const toggleTheme =(newTheme) => {
        setTheme(newTheme)
    };
    return(
        <ThemeContext.Provider value={{Theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}