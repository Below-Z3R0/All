import { useState } from 'react';
import { LanguageContext } from './CreateLanguageContext';

export function LanguageProvider({ children }) {
  const [Language, setLanguage] = useState('Spanish');
  const ToggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  return (
    <LanguageContext.Provider value={{ Language, ToggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}