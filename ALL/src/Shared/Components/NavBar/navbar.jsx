import "./navbar.css";
import { useState } from 'react';
import { NavbarData } from "./navbardata.js";
import { Link } from "react-router-dom";
import { Card1 } from "../Cards/Card1/card1.jsx";

export function NavBar () {
  const [stateMenu, setStateMenu] = useState("Close");
  return(
    <div className="NavBodyContainer">
      {stateMenu === "Close" && (
      <button onClick={() => setStateMenu("Open")} className="ButtonOpen">
        📚 Menú
      </button>)}
      {stateMenu === "Open" && (
      <button onClick={() => setStateMenu("Close")} className="ButtonClose">
        🚪 Cerrar
      </button>)}
      {stateMenu === "Open" && (
        <div className="NavBody">
          <div className="CardsContainer">
            {NavbarData.Cards.map(item => 
            <Link key={item.id} to={item.link}>
              <Card1 key={item.id} title={item.title} description={item.description}
               imageSrc={item.imageSrc} width={item.width} height={item.height} 
               fontSizeH={item.fontSizeH} fontSizeP={item.fontSizeP} padding={item.padding} />
            </Link>
            )}
          </div>
        </div>
        )}
      </div>
  ) 
}