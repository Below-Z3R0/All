import "./navbar.css";
import { NavbarData } from "./navbardata.js";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../../Shared/Hooks/LanguageContext/HookLanguageContext.jsx";
import { useThemeContext } from "../../../Shared/Hooks/ThemeContext/HookThemeContext.jsx";

export function NavBar () {
  const { Theme, ToggleTheme } = useThemeContext();
  const { Language, ToggleLanguage } = useLanguageContext();

  return (
    <div className="NavBodyContainer">
      <div className="Section NavBody">
        <div className="LeftImgContainer">
          <img src={NavbarData.Themes[Theme]} className="Img" alt="theme" />
        </div>

        <div className="RightSide">
          <div className="LinksBlock">
            {NavbarData[Language].Cards.map((item) => {  
              if (item.Link.startsWith("#")) {
                return (
                  <a key={item.Id} href={item.Link} className="LinkContainer">
                    <h2 className="Links">{item.Title}</h2>
                  </a>
                );
              } else {
                return (
                  <Link key={item.Id} to={item.Link} className="LinkContainer">
                    <h2 className="Links">{item.Title}</h2>
                  </Link>
                );
              }
            })}
          </div>

          <div className="BttonBlock">
            {NavbarData.LanguagesLogos.map((logoItem) => (
              <button
                key={logoItem.Id}
                onClick={() => ToggleLanguage(logoItem.LogoLanguage)}
                className="BttnBlockImgContainer"
              >
                <img src={logoItem.ImgSrc} className="Img" alt="language" />
              </button>
            ))}

            <div className="BttonBlock">
              {Theme === "Night" && (
                <button
                  className="BttnBlockImgContainer"
                  onClick={() => ToggleTheme("Day")}
                >
                  <img src={NavbarData.Themes[Theme]} className="Img" alt="theme" />
                </button>
              )}

              {Theme === "Day" && (
                <button
                  className="BttnBlockImgContainer"
                  onClick={() => ToggleTheme("Night")}
                >
                  <img src={NavbarData.Themes[Theme]} className="Img" alt="theme" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}