import "./allproyects.css";
import {AllproyectsData} from "./../Data/allproyectsdata.js"
import { useState } from "react";

function AllProyectsCard ({item}) {
    const [descripcionActual, setDescripcionActual] = useState(item.Description)
    const handleLogoClick = (nuevaDescripcion) => {
        setDescripcionActual(nuevaDescripcion);
    };
    return (
            <div className="ItemContainer" key = {item.id}>
                <div style={{backgroundImage: `url(${item.ImgSrc})`}} className="img">
                </div>
                <div className = "RightSideItemContainer">
                    <div>
                        <div className="TitleContainer">
                            <h1 className="Title">{item.Title}</h1>
                        </div>
                        <div className="PharagrahptContainer">
                            <p className="Pharagrahpt">{descripcionActual}</p>
                         </div>
                        </div>

                        <div className="LogosContainer">
                            {item.ImgsContainer.map(logoItem => 
                            <div key = {logoItem.Logoid} className = "LogoImgContainer"
                             onClick={() => handleLogoClick(logoItem.Description)}
                            >
                                <img className="img" src = {logoItem.Logo}/>
                            </div>)}
                        </div>
                </div>
            </div>
    )
}

export default function AllProyects() {
  return (
    <div className="AllproyectsContainer">
      {AllproyectsData.General.Gene.map(item => (
        <AllProyectsCard key={item.id} item={item} />
      ))}
    </div>
  );
}