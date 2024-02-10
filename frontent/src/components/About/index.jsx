import "./style.scss"
import CarouselComponent from "../common/Carousel"

import Img1 from '../../assets/images/img1.jpeg'
import Img2 from '../../assets/images/img2.jpeg'
import Img3 from '../../assets/images/img3.jpeg'
import Img4 from '../../assets/images/free.png'
import Img5 from '../../assets/images/supor.jpg'
import Img6 from '../../assets/images/year.png'

function About() {
    const images = [Img1, Img2, Img3]

    
    return (
    <div id="about-wrapper">        
        <CarouselComponent images={images} blurred={true}>
            <div className="inner-carousel">
                    <h1> Exclusive Deals Of <br /> Furniture <span>Collection</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum fuga facilis</p>
                    <br />
                    <button className="warning-btn2">Buy Now</button>
                    <button className="warning-btn">Explore</button>
            </div>
        </CarouselComponent>
        <br />
        <br />
        <br />
        <br />
        <div className="our-express">
            <h1 className="hoh">Why <br /> <span>You Get</span> With <br /> Our Furniture</h1>
            <p className="hoh1">Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Similique, quis?</p>
            <img className="img-10" src={Img4} alt=""  width="150px"/>
            <img className="img-11" src={Img5} alt=""  width="150px"/>
            <img className="img-12" src={Img6} alt=""  width="150px"/>
            <img src="" alt="" />
        </div>

    </div>
    );
}

export default About;