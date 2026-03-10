import "./Section5.css";
import { useState } from "react";

export function Section5 ({Data}) {
    return(
        <div className = "Section Section5">
            <div className="SectionTitleContainer">
                <h1 className="Section5Title">
                    {Data.Section5.Title}
                </h1>
            </div>
            <div className="Section5ContentBlock">

            {Data.Section5.Cards.map(Item => {
                const [descripcionActual, setDescripcionActual] = useState(Item.Description)
                
                const handleLogoClick = (nuevaDescripcion) => {
                    setDescripcionActual(nuevaDescripcion);
                };
              return(
                <div
                className="Section5ProyectsBody"
                key = {Item.Id}
                >
                    <img
                    className="Section5ProyectsImg"
                    src= {Item.ImgSrc} 
                    />
                    <div className="Section5ProyectsTxt">
                        <h4 className="Section5ProyectsTxtTitle">
                            {Item.Name}
                        </h4>
                        <p className="Section5ProyectsTxtParagrapht">
                            {descripcionActual}
                        </p>
                    </div>
                    <div className="Section5ProyectsBottonsBody">
                        <div className="Section5ProyectsBottonContainer">
                            {Item.Bottons.map(BottonsItem =>
                            <button 
                                className="Section5Button"
                                key = {BottonsItem.Id}
                            >
                                <img
                                    className="Section5ButtonImg"
                                    src={BottonsItem.SrcImg}
                                />
                                <p className="Section5ButtonTxt">
                                    {BottonsItem.Txt}
                                </p>
                            </button>
                            )}
                        </div>
                        <div className="Section5ProyectsLogosAndTitleBlock">
                        <div className="Section5ProyectsLogosBlock-TitleContainer">
                            <h6 className="Section5ProyectsLogosBlock-Title">
                                Tecnologies
                            </h6>
                        </div>
                        <div className="Section5ProyectsLogosBlock">
                            <div className="Section5ProyectsLogosContainer">
                            {Item.Logos.map(LogosItem => (
                                <button
                                    className="Section5Logo"
                                    key = {LogosItem.Id}
                                    onClick={() => handleLogoClick(LogosItem.Description)}
                                >
                                    <img
                                        className="Section5LogoImg"
                                        src={LogosItem.SrcImg}
                                    />
                                </button>
                            ))}
                            </div>
                            <div className="Section5ProyectsReturnContainer">
                                <button 
                                    onClick={() => handleLogoClick(Item.Description)}
                                    className="Section5Return"
                                >
                                    <h6 className="Section5ReturnTxt">Return</h6>
                                </button>
                            </div>
                        </div>  
                        </div>  
                    </div>
                </div>
                );
            })}     
            </div>
        </div>
    );
}