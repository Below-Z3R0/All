import "./card1.css";
export function Card1 ({title, description, imageSrc, width, height, fontSizeH, fontSizeP, padding, marginTop, marginBottom, marginLeft, marginRight }) {
    return(
        <div className="CardBody" style={{ width: width, height: height, 
        marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight }}>
            <div className="Img" style={{ backgroundImage: `url(${imageSrc})` }}>
                <div className="TxtContainer" style={{ padding: padding }}>
                  <h3 style={{fontSize: fontSizeH }}>{title}</h3>
                  <p style={{fontSize: fontSizeP }}>{description}</p>
                </div>
            </div>
        </div>
    )
}