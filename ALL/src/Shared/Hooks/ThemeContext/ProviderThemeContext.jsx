import { useState } from "react";
import { ThemeContext } from "./CreateThemeContext.jsx";

export function ThemeProvider({ children }) {
    const [Theme, setTheme] = useState('Night');
    const ToggleTheme = (newTheme) => {
        setTheme(newTheme)
    };
    return(
        <ThemeContext.Provider value={{Theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}