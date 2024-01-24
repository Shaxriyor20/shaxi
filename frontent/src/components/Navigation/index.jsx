import "./style.scss"
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx"

function Navigation() {
    return ( 
    <>
    <div className="navigation-wrapper">
        <footer>
            <Nav />
        </footer>

        <Outlet />
    </div>
    </>
     );
}

export default Navigation;