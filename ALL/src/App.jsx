import './App.css';
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayOut } from "./Features/Core/Layout/layout.jsx";
const AllProyects = lazy(() => import ("./Features/AllProyects/Page/allproyects"));
const Cv = lazy(() => import ("./Features/Cv/Page/cv"));

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<LayOut />}>
          <Route path="/" element={<Cv />} />
          <Route path="/AllProyects" element={<AllProyects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App