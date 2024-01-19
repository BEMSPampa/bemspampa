import './Slider.scss'

import { register } from 'swiper/element/bundle'
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import {  EffectCoverflow } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';

import { useState } from 'react';
import { events } from '../../UI/strings';


import {useNavigate} from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState('0');

  const navigate = useNavigate();
  const handleEventPage = () => {
    const eventToPass = events[parseInt(currentSlide)];
    navigate('/event/' + events[parseInt(currentSlide)].url, {state: { event: eventToPass }});
  }

  return (
    <div className="slider-container">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {setCurrentSlide(events[swiper.activeIndex].id)}}
        onClick={handleEventPage}
      >
        {events.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className="slide-item"/>
          </SwiperSlide>
        ))}
      </Swiper>
      <h5>{events[parseInt(currentSlide)].description}</h5>
    </div>
  )
}

export default Slider