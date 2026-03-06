import { Outlet } from "react-router-dom";
import { NavBar } from "../../../Shared/Components/NavBar/navbar.jsx";
import {Footer} from "../../../Shared/Components/Footer/footer.jsx"
export function LayOut() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}     