import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Product from './Product'
import Catagoty from './Catagoty'
import Lol from './Lol'
import NoPage from './NoPage'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route path='/about' index element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/catagoty" element={<Catagoty />} />
                <Route path="/Lol" element={<Lol />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;
