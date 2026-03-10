import "./navbar.css";
import { NavbarData } from "./navbardata.js";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../Context/LanguageContext/LanguageContextHook.jsx";
import { useThemeContext } from "../../Context/ThemeContext/ThemeContextHook.jsx";

export function NavBar () {
  const { Theme, ToggleTheme } = useThemeContext();
  const { Language, ToggleLanguage } = useLanguageContext();
  return(
    <div className="NavBodyContainer">
      <div className="Section NavBody  ">
        <div className="LeftImgContainer">
          <img src= {NavbarData.Themes[Theme]} className="Img"/>
        </div>
        
        <div className="RightSide">
          <div className="LinksBlock">
            {NavbarData[Language].Cards.map(Item => (
            <Link key={Item.Id} to={Item.Link} className="LinkContainer">
              <h2 className="Links">{Item.Title}</h2>
            </Link>
            ))}
          </div>

          <div className="BttonBlock">
            {NavbarData.LanguagesLogos.map(LogoItem => (
              <button 
                onClick={ () => ToggleLanguage(LogoItem.LogoLanguage)}
                key = {LogoItem.Id}className="BttnBlockImgContainer"
              >
                  <img 
                    src = {LogoItem.ImgSrc}
                    className="Img"
                  />
              </button>
            ))}
            <div className="BttonBlock">
              {Theme === "Night" &&(
              <button className="BttnBlockImgContainer" 
              onClick={() => ToggleTheme("Day")}>
                <img 
                  src = {NavbarData.Themes[Theme]}
                  className="Img"
                />
              </button>
            )}

            {Theme === "Day" &&(
              <button className="BttnBlockImgContainer" 
              onClick={() => ToggleTheme('Night')}>
                <img 
                  src = {NavbarData.Themes[Theme]}
                  className="Img"
                />
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}