import "./navbar.css";
import { NavbarData } from "./navbardata.js";
import { Link } from "react-router-dom";

export function NavBar () {
  return(
    <div className="NavBodyContainer">
      <div className="Section NavBody  ">
        <div className="LeftImgContainer">
          <img src= {NavbarData.DayOrNight} className="Img"/>
        </div>
        
        <div className="RightSide">
          <div className="LinksContainer">
            {NavbarData.Cards.map(Item => 
            <Link key={Item.Id} to={Item.Link} className="Links">
              <h2 className="Links">{Item.Title}</h2>
            </Link>
            )}
          </div>

          <div className="ImgsContainer">
            {NavbarData.Languages.map(Language =>
              <div key = {Language.Id}className="ImgContainer">
                <img 
                  src = {Language.ImgSrc}
                  className="Img"
                />
              </div>
            )}
            <div className="ImgContainer">
              <img 
                src = {NavbarData.DayOrNight}
                className="Img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}