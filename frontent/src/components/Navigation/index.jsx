import "./style.scss"
import { Outlet, Link } from "react-router-dom";


function Navigation() {
    return ( 
    <>
    <div className="left">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
    </div>
    <div className="right">
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Register"><button>Register</button></Link>

    </div>
        <br />
        <br />
        <hr />
        <Outlet />
    </>
     );
}

export default Navigation;