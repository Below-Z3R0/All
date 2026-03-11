import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './Shared/Hooks/ThemeContext/ProviderThemeContext.jsx';
import { LanguageProvider } from './Shared/Hooks/LanguageContext/ProviderLanguageContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
)
