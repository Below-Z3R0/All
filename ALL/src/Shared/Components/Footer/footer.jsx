import { Data } from "./footer.js";
import "./footer.css";

export function Footer () {
    return (
        <div className="Footer">
            <div className="FooterContatsContainer">
                {Data.Contacts.map(Item =>
                <a 
                key={Item.Id}
                href={Item.Link}
                target="_blank"
                >
                    <img 
                    className="FooterContatsImg"
                    
                    src={Item.ImgSrc}
                    />
                </a>
                )}
            </div>
            <div className="FooterTxtContianer">
                <h4 className="FooterTxt">
                    {Data.Content.Txt}
                </h4>
                <h4 className="FooterTxt FooterName">
                    {Data.Content.Name}
                </h4>
            </div>
        </div>
    );
};