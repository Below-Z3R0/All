import "./allproyects.css"
import { AllProyectsData } from "../Data/allproyectsdata.js";
import  { Card1 } from "../../../Shared/Components/Cards/Card1/card1.jsx";
export default function AllProyects () {
  return (
    <div className="AllProyectsContainer">
        <div className="CardContainer">
          {AllProyectsData.map(item => 
          <Card1 key={item.id} title={item.title} imageSrc={item.image} description={item.description} 
          marginRight={item.marginright} marginLeft={item.marginleft} />
          )}
        </div>
    </div>
  )
}