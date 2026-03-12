import { Outlet } from "react-router-dom";
import { NavBar } from "../../../Shared/Components/NavBar/navbar.jsx";
import {Footer} from "../../../Shared/Components/Footer/footer.jsx"
import { useThemeContext } from '../../../Shared/Hooks/ThemeContext/HookThemeContext.jsx';
export function LayOut() {
    const { Theme } = useThemeContext();
    return (
        <div className={`Theme-${Theme}`}>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}     