import "./cv.css";
import { CvData } from "../Data/cvdata.js";
import { Section1 } from "../Components/Section1/Section1.jsx";
import { Section2 } from "../Components/Section2/Section2.jsx";
import { Section3 } from "../Components/Section3/Section3.jsx";
import { Section4 } from "../Components/Section4/Section4.jsx";
import { Section5 } from "../Components/Section5/Section5.jsx";
import { Section6 } from "../Components/Section6/Section6.jsx";
import { useLanguageContext } from "../../../Shared/Hooks/LanguageContext/HookLanguageContext.jsx";
import { useThemeContext } from "../../../Shared/Hooks/ThemeContext/HookThemeContext.jsx";
export default function Cv () {
      const { Language } = useLanguageContext();
      const { Theme } = useThemeContext(); 
    return (
        <div >
            <Section1 Data={CvData[Language]} Theme={Theme}/>
            <Section3 Data={CvData[Language]} Theme={Theme}/>
            <Section4 Data={CvData[Language]} Theme={Theme}/>
            <Section5 Data={CvData[Language]} Theme={Theme}/>
            <Section6 Data={CvData[Language]} Theme={Theme}/>
        </div>
    )
}