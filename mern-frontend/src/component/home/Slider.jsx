import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../styles.css';

import image3 from "../../assets/images/book-image/3.webp"
import image4 from "../../assets/images/book-image/4.webp"
import image5 from "../../assets/images/book-image/5.webp"
import image6 from "../../assets/images/book-image/7.webp"
import image7 from "../../assets/images/book-image/8.webp"
import image8 from "../../assets/images/book-image/9.webp"



import { EffectCards } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                <SwiperSlide> <img src={image4} alt="Book4"/> </SwiperSlide>
                <SwiperSlide> <img src={image3} alt="Book3"/> </SwiperSlide>
                <SwiperSlide> <img src={image5} alt="Book5"/> </SwiperSlide>
                <SwiperSlide> <img src={image6} alt="Book6"/> </SwiperSlide>
                <SwiperSlide> <img src={image7} alt="Book7"/> </SwiperSlide>
                <SwiperSlide> <img src={image8} alt="Book8"/> </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Slider;
