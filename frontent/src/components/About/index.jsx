import "./style.scss"
import CarouselComponent from "../common/Carousel"

import Img1 from '../../assets/images/img1.jpeg'
import Img2 from '../../assets/images/img2.jpeg'
import Img3 from '../../assets/images/img3.jpeg'

function About() {
    const images = [Img1, Img2, Img3]

    
    return (
        <>        
        <CarouselComponent images={images} blurred={true}/>
        </>
    );
}

export default About;