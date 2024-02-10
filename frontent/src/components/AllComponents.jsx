import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Products from './Products'
import Catagoty from './Catagoty'
import Lol from './Lol'
import NoPage from './NoPage'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<About />} />
                <Route path='/about' element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/catagoty" element={<Catagoty />} />
                <Route path="/Lol" element={<Lol />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;
