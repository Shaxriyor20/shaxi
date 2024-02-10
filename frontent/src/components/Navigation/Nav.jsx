import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <nav>
            <div className="left">
                <h2>Logo</h2>
            </div>
            <div className="middle">
                <Link to={'about'}>Home</Link>
                <Link to={'products'}>Products</Link>
                <Link to={'catagoty'}>Catagoty</Link>
                <Link to={'Lol'}>About us</Link>
            </div>
            <div className="right">
                <span>
                    👨‍🦲
                </span>
                <span>
                    🔍
                </span>
                <span>
                    🛍️
                </span>
            </div>
        </nav>
     );
}

export default Nav;