import "./card1.css"
export function Card1 ({Txt, imgsrc}) {
    return (
        <div className="Card1Container">
            <div className="CardImgContainer">
                <img src = {imgsrc} alt="Card Image" />
            </div>
            <div className="CardTextContainer">
                <p>{Txt}</p>
            </div>
        </div>
    )
}