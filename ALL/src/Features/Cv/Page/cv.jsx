import "./cv.css";
import { cvdata } from "../Data/cvdata.js"
import { Section2 } from "../Components/Section2/Section2.jsx"
import { Section1 } from "../Components/Section1/Section1.jsx"
export default function Cv () {
    return (
        <div className="CvContainer">
            <div className="CvContent">
                <Section1 Title={cvdata.Section1.Title} Paragraph1={cvdata.Section1.Paragraph1} SecondTitle={cvdata.Section1.SecondTitle} DataCard={cvdata.Section1.Card} imgsrc={cvdata.Section1.ImgSrc}/>
            </div> 
            <div>
                <Section2 DataSec2={cvdata.Section2}/>
            </div>
        </div>
    )
}