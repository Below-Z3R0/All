import "./Section4.css";

export function Section4 ({Data}){
    return(
        <div className = "Section Section4" >
            <div className="SectionTitleContainer">
                <h1 className="Section4Title">
                    {Data.Section4.Title}
                </h1>
            </div>
            <div className="Section4ContentBlock">
                {Data.Section4.Cards.map(Item =>
                <div 
                className="Section4ImgContainer"
                key = {Item.Id}
                >
                    <img 
                    className="Section4Img"
                    src = {Item.ImgSrc}
                    />
                    <div className="Section4TxtContent">
                        <h4 className="Section4TxtTitle">
                            {Item.Title}
                        </h4>
                        <h5 className="Section4TxtDate">
                            {Item.Date}
                        </h5>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}