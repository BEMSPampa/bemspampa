import './Event.scss'

import { register } from 'swiper/element/bundle'
register();

import pic1 from '../../assets/engpic.png';
import pic2 from '../../assets/unipampapic.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCoverflow, EffectFlip } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

import { useState } from 'react';

const Event = () => {

  const data = [
    {id: '0', image: pic2, description: "visita a hduahudeadhuasdasudasudsuadusah"},
    {id: '1', image: pic1, description: "bemspampa visitah hudhaudhausduaduas"},
    {id: '2', image: pic2, description: "neste dia visita bemspampa haudheauduasudasadsadsas"}
  ]

  const [currentSlide, setCurrentSlide] = useState('1');

  return (
    <div className="event-container">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {setCurrentSlide(data[swiper.activeIndex].id)}}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className="slide-item"/>
          </SwiperSlide>
        ))}
      </Swiper>

      <h1>{data[parseInt(currentSlide)].description}</h1>
    </div>
    
  )
}

export default Event