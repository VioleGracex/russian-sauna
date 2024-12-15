"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const Address = () => {
  // Editable location variable, can be changed later from another page
  const [location, setLocation] = useState({
    title: "Яндекс Карты",
    src: "https://yandex.ru/map-widget/v1/?um=constructor%3A9d23d8a2b2b03cc2a4b8d7c4e67a2d8b8bdde3b6d8ee1d431b6c5b8c4e3eeed&l=map&ll=37.618423%2C55.751244", // Default location (Moscow)
  });

  const maps = [
    {
      title: "Яндекс Карты",
      src: location.src,
    },
    {
      title: "2GIS Карты",
      src: "https://2gis.ru/moscow/firm/70000001045373682?m=37.618423%2C55.751244%2F12.42", // Default location (Moscow)
    },
  ];

  return (
    <div
      className="address-container max-w-full mx-auto p-6 rounded-lg shadow-xl"
      style={{
        background: "linear-gradient(135deg, #FFD698, #5A4E3D)",
      }}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-4">Адрес Русской Бани</h1>
      <p className="text-lg text-center text-white mb-6">
        Добро пожаловать в нашу уютную Русскую Баню! Наслаждайтесь отдыхом в тепле и
        комфорте, прямо в сердце города. Время забыться и отдохнуть!
      </p>

      {/* Swiper Slider for Maps */}
      <div className="map-container mb-6">
        <h2 className="text-xl font-semibold text-white text-center mb-4">
          Карты
        </h2>

        <Swiper
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          modules={[Scrollbar]}
          style={{
            "--swiper-scrollbar-drag-bg-color": "#EF5719", // Brighter orange thumb
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Soft grey background with opacity
            borderRadius: "8px",
          }}
          spaceBetween={10}
          slidesPerView={1} // Show 1 slide at a time
          loop={true} // Enable infinite loop
          autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        >
          {maps.map((map, index) => (
            <SwiperSlide key={index}>
              <div className="map mb-9">
                <iframe
                  src={map.src}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="rounded-lg mt-9"
                  style={{ borderRadius: "8px" }}
                ></iframe>
                <p className="text-lg mt-4 text-center text-white">
                  {map.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="cool-text mt-8 text-center">
        <h3 className="text-2xl font-bold text-amber-700 mb-4">
          Приходите и ощутите настоящий русский дух!
        </h3>
        <p className="text-lg text-white">
          Мы ждем вас в нашей бане, где царит тепло, уют и забота о каждом госте. Окунитесь в атмосферу отдыха и релаксации.
        </p>
      </div>
    </div>
  );
};

export default Address;
