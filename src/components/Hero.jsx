"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const slides = [
  {
    image: "https://via.placeholder.com/1920x900",
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
        modules={[Scrollbar]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-64">
              {/* Adjusted px-16 for padding on the left */}
              <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              <p className="mt-4 text-lg text-white">{slide.description}</p>
              <button
                className={`mt-6 px-6 py-3 rounded-full text-white ${slide.buttonColor}`}
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
