import { useState } from "react";
import "./Section5.css";

function ProjectCard({ item }) {
    const [descripcionActual, setDescripcionActual] = useState(item.Description);
    
    const handleLogoClick = (nuevaDescripcion) => {
        setDescripcionActual(nuevaDescripcion);
    };

    return (
        <div className="Section5ProyectsBody">
            <img className="Section5ProyectsImg" src={item.ImgSrc} alt="project" />
            
            <div className="Section5ProyectsTxt">
                <h4 className="Section5ProyectsTxtTitle">{item.Name}</h4>
                <p className="Section5ProyectsTxtParagrapht">{descripcionActual}</p>
            </div>
            
            <div className="Section5ProyectsBottonsBody">
                <div className="Section5ProyectsBottonContainer">
                    {item.Bottons.map(BottonsItem => (
                        <button className="Section5Button" key={BottonsItem.Id}>
                            <img className="Section5ButtonImg" src={BottonsItem.SrcImg} alt="button" />
                            <p className="Section5ButtonTxt">{BottonsItem.Txt}</p>
                        </button>
                    ))}
                </div>
                
                <div className="Section5ProyectsLogosAndTitleBlock">
                    <div className="Section5ProyectsLogosBlock-TitleContainer">
                        <h6 className="Section5ProyectsLogosBlock-Title">Tecnologies</h6>
                    </div>
                    
                    <div className="Section5ProyectsLogosBlock">
                        <div className="Section5ProyectsLogosContainer">
                            {item.Logos.map(LogosItem => (
                                <button
                                    className="Section5Logo"
                                    key={LogosItem.Id}
                                    onClick={() => handleLogoClick(LogosItem.Description)}
                                >
                                    <img className="Section5LogoImg" src={LogosItem.SrcImg} alt="tech" />
                                </button>
                            ))}
                        </div>
                        
                        <div className="Section5ProyectsReturnContainer">
                            <button 
                                onClick={() => handleLogoClick(item.Description)}
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
}

// Componente principal Section5
export function Section5({ Data, Theme }) { 
    return (
        <div className={`Section Section5 Theme-${Theme}`}>
            <div className="SectionTitleContainer">
                <h1 className="Section5Title">{Data.Section5.Title}</h1>
            </div>
            <div className="Section5ContentBlock">
                {Data.Section5.Cards.map(item => (
                    <ProjectCard key={item.Id} item={item}/>
                ))}     
            </div>
        </div>
    );
}