import "./cv.css";
import { CvData } from "../Data/cvdata.js";
import { Section1 } from "../Components/Section1/Section1.jsx";
import { Section2 } from "../Components/Section2/Section2.jsx";
import { Section3 } from "../Components/Section3/Section3.jsx";
import { Section4 } from "../Components/Section4/Section4.jsx";
import { Section5 } from "../Components/Section5/Section5.jsx";
import { Section6 } from "../Components/Section6/Section6.jsx";

export default function Cv () {
    return (
        <div >
            <Section1 Data={CvData}/>
            <Section2 Data={CvData}/>
            <Section3 Data={CvData}/>
            <Section4 Data={CvData}/>
            <Section5 Data={CvData}/>
            <Section6 Data={CvData}/>
        </div>
    )
}