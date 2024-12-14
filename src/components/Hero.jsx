"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const slides = [
  {
    image: "/assets/images/Sauna-Gallery/sauna-1.jpg",
    title: "Традиционная русская баня",
    description: "Ощутите тепло и расслабление в настоящей парной.",
    buttonText: "Подробнее",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    image: "https://via.placeholder.com/1920x900",
    title: "Ароматные венички",
    description: "Попробуйте процедуры с дубовыми и берёзовыми вениками.",
    buttonText: "Забронировать",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    image: "https://via.placeholder.com/1920x900",
    title: "Пар для здоровья",
    description: "Укрепляйте иммунитет и наслаждайтесь уникальной атмосферой.",
    buttonText: "Узнать больше",
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
];

const Hero = () => {
  return (
    <section className="w-full h-[900px] bg-gray-100 flex justify-center items-center overflow-hidden">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 6000, // Rotate every 6 seconds (6000ms)
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        modules={[Scrollbar, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 md:px-16 lg:px-64">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                {slide.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white">
                {slide.description}
              </p>
              <button
                className={`mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg text-white ${slide.buttonColor}`}
              >
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
