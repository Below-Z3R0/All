import "./Section2.css"
import { CvCard2 } from "../Cards/Card2/cvcard2.jsx"
export function Section2 ({DataSec2}) {
    return (
        <div className="Section2Container">
            <div className="Section2First">
                <h1>{DataSec2.First.Title}</h1>
                {DataSec2.First.items.map(item =>
                <div key={item.id}>
                    <h5 >{item.Txt}</h5>
                </div>)}
            </div>

            <div className="Section2Second">
                <h1>{DataSec2.Second.Title}</h1>
                <div className = "Section2SecondCardContainer">
                    {DataSec2.Second.items.map(item =>
                    <CvCard2 key={item.id} Txt={item.Txt} imgsrc={item.imgsrc}/>)}
                </div>
            </div>

            <div className="Section2Third">
                <h1>{DataSec2.Third.Title}</h1>
                {DataSec2.Third.items.map(item =>
                <div key = {item.id}>
                    <h5>{item.Txt}</h5>
                </div>)}

            <div className="Section2Fourth">
                <h1>{DataSec2.Fourth.Title}</h1>
                {DataSec2.Fourth.items.map(item =>
                <div key = {item.id}>
                    <h5> {item.Txt}</h5>
                </div>)}
            </div>

            <div className="Section2Fifth">
                <h1>{DataSec2.Fifth.Title}</h1>
                {DataSec2.Fifth.items.map(item =>
                <div key = {item.id}>
                    <h5>{item.Txt}</h5>
                </div>)}
            </div>

            <div className="Section2Sixth">
                <h1>{DataSec2.Sixth.Title}</h1>
                {DataSec2.Sixth.items.map(item =>
                <div key = {item.id}>
                    <h5>{item.Txt}</h5>
                </div>)}
            </div>
            </div>
        </div>
    )
}