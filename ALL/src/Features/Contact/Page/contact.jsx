import "./contact.css";
import {ContactData} from "./../Data/contactdata.js"
export default function Contact () {
    return (
        <div className="ContactContainer">
            {ContactData.General.map(item => 
            <div className="ItemContainer" key = {item.id}>
                <div style={{backgroundImage: `url(${item.ImgSrc})`}} className="img">
                </div>
                <div className = "RightSideItemContainer">
                    <div>
                        <div className="TitleContainer">
                            <h1 clasName="Title">{item.Title}</h1>
                        </div>
                        <div className="PharagrahptContainer">
                            <p className="Pharagrahpt">{item.Description}</p>
                         </div>
                        </div>

                        <div className="LogosContainer">
                            {ContactData.ImgsContainer.map(itemImg => 
                            <div key = {itemImg.id} className = "LogoImgContainer">
                                <img className="img" src = {itemImg.Logo}/>
                            </div>)}
                        </div>
                </div>
            </div>)}
        </div>
    )
}