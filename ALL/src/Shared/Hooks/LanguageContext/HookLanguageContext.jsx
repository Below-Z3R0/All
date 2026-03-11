import { useContext } from "react";
import { LanguageContext } from './CreateLanguageContext'

export function useLanguageContext () {
    const context = useContext(LanguageContext);
    return(
        context
    )
}