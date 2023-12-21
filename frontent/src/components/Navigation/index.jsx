import "./style.scss"
import { Outlet, Link } from "react-router-dom";


function Navigation() {
    return ( 
    <>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>

        <hr />
        <Outlet />
    </>
     );
}

export default Navigation;