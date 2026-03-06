import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children, data }) {
  const [actualLanguage, setActualLanguage] = useState(data.Spanish);
  const changeLanguage = (newLanguage) => {
    setActualLanguage(newLanguage);
  };
  
  return (
    <LanguageContext.Provider value={{ actualLanguage, changeLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}