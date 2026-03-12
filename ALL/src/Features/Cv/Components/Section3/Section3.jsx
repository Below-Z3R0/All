import "./Section3.css";
export  function Section3 ({Data}) {
  return (
    <div className = "Section Section3" id="formación">
          <div className="SectionTitleContainer">
            <h1 className="Section3Title">
              {Data.Section3.Title}
            </h1>
          </div>
          <div className="Section3Contentblock">
            {Data.Section3.Logos.map(Item =>
            <div 
            className="Section3LogoContainer"
            key = {Item.Id}
            >
              <div className="Section3LogoContainer-Content">
              <div className="Section3LogoImgContainer">
                <img className="Section3LogoImg"
                  src = {Item.ImgSrc}
                />
              </div>
              <div className="Section3LogoTitleContainer">
                <h5 className="Section3LogoTitle">
                  {Item.Names}
                </h5>
              </div>
              </div>
            </div>
            )}
          </div>
    </div>
  )
}