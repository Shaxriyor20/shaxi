import './style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    // <CarouselComponent images={...} />
     return (
        <section className="carousel-section">
            <div className="carousel-c-children">
                { props.children }
            </div>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
                {
                    props.images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img 
                                    src={img} 
                                    alt={"Carousel-item-" + index} 
                                    width={"100%"}
                                    height="650"
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    );
}

export default CarouselComponent;