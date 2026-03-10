import './App.css';
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayOut } from "./Features/Core/Layout/layout.jsx";
import { ThemeProvider } from './Shared/Context/ThemeContext/themeContext.jsx';
import { LanguageProvider } from './Shared/Context/LanguageContext/languageContext.jsx';
const AllProyects = lazy(() => import ("./Features/AllProyects/Page/allproyects"));
const Cv = lazy(() => import ("./Features/Cv/Page/cv"));

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes >
            <Route element={<LayOut />}>
              <Route path="/" element={<Cv />} />
              <Route path="/AllProyects" element={<AllProyects />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App