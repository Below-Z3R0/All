import "./Section1.css";
export function Section1 ({Data}) {
    return (                  
        <div className = "Section Section1" >
            <div className="Section1Contactblock">
                <div className="Section1ImgContactContainer">
                {Data.Section1.Contact.map(Item =>
                    <img 
                    key = {Item.Id}
                    src={Item.ImgSrc}
                    className = "Section1ImgContacts"
                    />
                )}
                </div>
            </div>
            <div className="Section1Content">
                <div className="Section1TitlesContainer">
                    <p className="Section1Title1">
                        {Data.Section1.Title1}
                    </p>
                    <p className="Section1Title2">
                        {Data.Section1.Title2}
                    </p>
                </div>

                <div className="Section1ContentContainer">
                    <div className = "Section1ParagraphtContainer">
                        <p className="Section1Paragrapht">
                            {Data.Section1.Paragrapht}
                        </p>
                    </div>
                    <div className="Section1BottonsContainer">
                        {Data.Section1.Bottons.map(BottonsItems =>
                        <button
                        className={`Bottons Botton-${BottonsItems.Id} `}
                        key = {BottonsItems.Id}
                        >
                        <p className = "Sections1BottonsTxt">
                            {BottonsItems.Txt}
                        </p>
                    </button>
                    )}
                    </div>
                </div>
            </div>
            <div className="Section1ImgContainer">
                <img
                    className="Section1Img"
                    src={Data.Section1.ImgSrc}
                />
             </div>
        </div>  
    )
}