"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const Hero = () => {
  const [slides, setSlides] = useState([]);

  // Fetch slide data from the backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get("/api/slides"); // Adjust endpoint as needed
        setSlides(response.data);
      } catch (error) {
       /*  console.error("Error fetching slides:", error); */
      }
    };

    fetchSlides();
  }, []);

  return (
    <section className="w-full h-[900px] bg-gray-100 flex justify-center items-center overflow-hidden">
      {slides.length > 0 ? (
        <Swiper
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
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
      ) : (
        <div className="text-center text-gray-500">Loading slides...</div>
      )}
    </section>
  );
};

export default Hero;
