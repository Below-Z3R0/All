import "./contact.css";
import {ContactData} from "./../Data/contactdata.js"
import { useState } from "react";

function ContactCard ({item}) {
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
                            <h1 clasName="Title">{item.Title}</h1>
                        </div>
                        <div className="PharagrahptContainer">
                            <p className="Pharagrahpt">{descripcionActual}</p>
                         </div>
                        </div>

                        <div className="LogosContainer">
                            {item.ImgsContainer.map(logoItem => 
                            <div key = {logoItem.id} className = "LogoImgContainer"
                             onClick={() => handleLogoClick(logoItem.Description)}
                            >
                                <img className="img" src = {logoItem.Logo}/>
                            </div>)}
                        </div>
                </div>
            </div>
    )
}

export default function Contact() {
  return (
    <div className="ContactContainer">
      {ContactData.General.Gene.map(item => (
        <ContactCard key={item.id} item={item} />
      ))}
    </div>
  );
}