import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const Hero = () => {
  const slides = [
    {
      image: 'https://via.placeholder.com/1200x600', // Replace with your image URL
      title: 'Продукт 1',
      description: 'Описание продукта 1. Успейте приобрести прямо сейчас!',
    },
    {
      image: 'https://via.placeholder.com/1200x600', // Replace with your image URL
      title: 'Продукт 2',
      description: 'Описание продукта 2. Качество и надежность!',
    },
    {
      image: 'https://via.placeholder.com/1200x600', // Replace with your image URL
      title: 'Продукт 3',
      description: 'Описание продукта 3. Не упустите свой шанс!',
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-content">
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-button">Запасаться сейчас</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
