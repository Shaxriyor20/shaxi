import "./style.scss"
import CarouselComponent from "../common/Carousel"

import Img1 from '../../assets/images/img1.jpeg'
import Img2 from '../../assets/images/img2.jpeg'
import Img3 from '../../assets/images/img3.jpeg'

function About() {
    const images = [Img1, Img2, Img3]

    
    return (
        <div id="about-wrapper">        
        <CarouselComponent images={images} blurred={true}>
            <div className="inner-carousel">
                    <h1>Exclusive Deals Of <br /> Furniture <span>Collection</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum fuga facilis</p>
                    <br />
                    <button className="warning-btn2">Buy Now</button>
                    <button className="warning-btn">Explore</button>
            </div>
        </CarouselComponent>
        </div>
    );
}

export default About;