import "./Section6.css";

export function Section6 ({Data}) {
    return(
        <div className = "Section Section6" id="contacto">
            <div className="SectionTitleContainer Section6TitleContainer ">
                <h1 className="SectionTitleContainer">
                    {Data.Section6.Title}
                </h1>
            </div>
            <div className="Section6ContentBody">
                <div className="Section6Formulary">
                    {Data.Section6.Content.map(Item =>
                        <div 
                        className="Section6TxtContainer"
                        key={Item.Id}
                        >
                            <h4 className="Section6FormularyTitle">
                                {Item.Txt}
                            </h4>
                        </div>
                    )}
                    <div className="Section6ButtonContainer">
                        <button className="Section6Button">
                            <h4 className="Section6ButtonTxt">
                                {Data.Section6.Button}
                            </h4>
                        </button>    
                    </div>
                </div>
            </div>
        </div>
    )
}