import { Outlet } from "react-router-dom";
import "./layout.css";
import "./layoutdata.js";
import { NavBar } from "../../../Shared/Components/NavBar/navbar.jsx";
export function LayOut() {
    return (
        <div className="Container">
            <div className="LeftSide">
              <NavBar />
            </div>
            <div className="Outlet">
              <Outlet />
            </div>
            <div className="RightSide">
                <button className="Translate">Button 1</button>
                <button className="Night/Day">Button 2</button>
            </div>
        </div>
    )
}     