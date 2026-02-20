import "./Section1.css"
import { CvCard1 } from "../Cards/Card1/cvcard1"
export function Section1 ({Title, Paragraph1, SecondTitle, DataCard, imgsrc}) {
    return (
        <div className="SectionContainer">
            <div className="LeftSideSection">
                <div className="Section1Title">
                    <h1 className = "Section1TitleText">{Title}</h1>
                </div>

                <div className = "Section1Content">
                    <div className = "Paragraph1Container">
                        <p className = "Paragraph1">{Paragraph1}</p>
                    </div>
                    <div className = "ContactContainer">
                        <h2>{SecondTitle}</h2>
                        <div className="Section1CardsContainer">
                            {DataCard.map(item =>
                            <CvCard1 key={item.id} Txt={item.Txt} imgsrc={item.imgsrc} />)}
                        </div>
                  </div>
                </div>
            </div>

            <div className = "RightSideSection">
                  <img src = {imgsrc}/>
            </div>
        </div>
    )
}