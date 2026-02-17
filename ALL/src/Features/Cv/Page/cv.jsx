import "./cv.css";
import { cvdata } from "../Data/cvdata.js"
import { Section1 } from "../Components/Section1/Section1.jsx"
export default function Cv () {
    return (
        <div className="CvContainer">
            <div className="CvContent">
                <Section1 Title={cvdata.Title} Paragraph1={cvdata.Paragraph1} SecondTitle={cvdata.SecondTitle} Data={cvdata.Card} imgsrc={cvdata.imgsrc}/>
            </div> 
        </div>
    )
}