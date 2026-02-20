import "./cvcard1.css"
export function CvCard1 ({Txt, imgsrc}) {
    return (
        <div className="CardContainer">
            <div className="CardImgContainer">
                <img src = {imgsrc} alt="Card Image" />
            </div>
            <div className="CardTextContainer">
                <h5>{Txt}</h5>
            </div>
        </div>
    )
}