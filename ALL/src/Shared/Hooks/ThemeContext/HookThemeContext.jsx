import { useContext } from "react";
import { ThemeContext } from './CreateThemeContext'

export function useThemeContext () {
    const Context = useContext(ThemeContext)
    return(
        Context
    )
}