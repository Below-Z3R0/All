import "./Section3.css";
export  function Section3 ({Data}) {
  return (
    <div className = "Section Section3">
          <div className="SectionTitleContainer">
            <h1 className="Section3Title">
              {Data.Section3.Title}
            </h1>
          </div>
          <div className="Section3Contentblock">
            {Data.Section3.Logos.map(Item =>
            <div 
            className="Section3LogoContainer"
            key = {Item.id}
            >
              <img className="Section3LogoImg"
                src = {Item.ImgSrc}
              />
              <h5 className="Section3LogoTitle">
                {Item.Names}
              </h5>
            </div>
            )}
          </div>
    </div>
  )
}