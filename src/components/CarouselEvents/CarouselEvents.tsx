import './CarouselEvents.scss'

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

//import {useNavigate} from "react-router-dom";

const CarouselEvents = () => {
  const [currentSlide, setCurrentSlide] = useState('0');

  /*const navigate = useNavigate();
  const handleEventPage = () => {
    const eventToPass = events[parseInt(currentSlide)];
    navigate('/eventos/' + events[parseInt(currentSlide)].url, {state: { event: eventToPass }});
  }*/

  /*
      <div className='carousel-description'>
        <h3>{events[parseInt(currentSlide)].title}</h3>
        <h5>{events[parseInt(currentSlide)].description}</h5>
      </div>*/

  return (
    <div className="carousel-container">
      <div className='carousel-img'>
      <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => {setCurrentSlide(events[swiper.activeIndex].id)}}
        >
          {events.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} className="slide-item"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className='carousel-description'>
        <h3>{events[parseInt(currentSlide)].title}</h3>
        <h5>{events[parseInt(currentSlide)].description}</h5>

        <div className='carousel-date'>
          <p>{events[parseInt(currentSlide)].date}</p>
        </div>
        
      </div>
    </div>
  )
}

export default CarouselEvents