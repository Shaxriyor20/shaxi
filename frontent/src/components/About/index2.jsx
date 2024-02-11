import NewCurs1 from "../../assets/images/images1.jpeg"
import NewCurs2 from "../../assets/images/images2.jpeg"

import "./style2.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

function NewCurs(props) {
    return ( 
        <div className="main-excurs">
         <div className="second-excurs">
            <span>Популярные экскурсии</span>
            <span>Смотреть все</span>
         </div>
         
         

         <div className="values-wrapper">
            <Swiper
                slidesPerView={5}
                spaceBetween={55}

                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    230: {
                        slidesPerView: 1,
                        spaceBetween: 11,
                    },
                    430: {
                        slidesPerView: 2,
                        spaceBetween: 55,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 44,
                    },
                    1024: {
                        slidesPerView: 4.8,
                        spaceBetween: 44,
                    },
                }}
                speed={300}
                modules={[Pagination]}
                className="mySwiper"
            >
              
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}> 
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
              
              
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>   <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
               

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>

   


         </div>
       
     );
}

export default NewCurs;