import "./Section2.css";
export function Section2 ({Data}) {
    return (
        <div className = "Section Section2" id="sobre-mi">
            <div className="SectionTitleContainer">
                <h1 className="Section2TitleTxt">
                    {Data.Section2.Title}
                </h1>
            </div>

            <div className="Section2ContentBlock">
                <div className="Section2ImgContainer">
                    <img 
                    className="Section2Img"
                    src={Data.Section2.ImgSrc}
                    />
                </div>
                <div className="Section2TxtContainer">
                    <h3 className="Section2TxtTitle">
                        {Data.Section2.SecondTitle}
                    </h3>
                    <p className="Section2TxtParagrapht">
                        {Data.Section2.Paragrapht}
                    </p>
                </div>
            </div>
        </div>
    )
}