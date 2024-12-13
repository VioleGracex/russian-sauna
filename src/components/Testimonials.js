"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const testimonials = [
  {
    name: "Иван",
    text: "Прекрасное место для отдыха, рекомендую всем!",
    date: "12 декабря 2024",
    imageUrl: "path_to_ivan_image.jpg", // Replace with actual path to Ivan's image
  },
  {
    name: "Анна",
    text: "Баня уютная, пар отличный. Обязательно вернусь!",
    date: "15 декабря 2024",
    imageUrl: "path_to_anna_image.jpg", // Replace with actual path to Anna's image
  },
  {
    name: "Петр",
    text: "Отличный сервис, чувствую себя как дома!",
    date: "18 декабря 2024",
    imageUrl: "path_to_peter_image.jpg", // Replace with actual path to Peter's image
  },
  {
    name: "Мария",
    text: "Очень понравился сервис и атмосфера, возвращусь снова!",
    date: "20 декабря 2024",
    imageUrl: "path_to_maria_image.jpg", // Replace with actual path to Maria's image
  },
  {
    name: "Дмитрий",
    text: "Лучший отдых за последнее время, супер!",
    date: "22 декабря 2024",
    imageUrl: "path_to_dmitry_image.jpg", // Replace with actual path to Dmitry's image
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Отзывы клиентов</h2>
        <Swiper
          scrollbar={{
            hide: false, // Make scrollbar always visible
            draggable: true, // Optional: allows the scrollbar to be dragged
          }}
          modules={[Scrollbar]}
          className="w-full"
          slidesPerView={3} // Show 3 reviews per slide
          spaceBetween={30} // Adjust space between slides if needed
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              {/* Review Card */}
              <div className="bg-white rounded-lg shadow-lg w-[300px] p-6 space-y-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
                {/* Profile image */}
                <div className="flex justify-center">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-white"
                  />
                </div>

                {/* Testimonial text */}
                <p className="text-gray-800 italic text-sm sm:text-base">{testimonial.text}</p>

                {/* Name and Date */}
                <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
                  <footer className="text-gray-600">{testimonial.name}</footer>
                  <footer className="text-gray-400">{testimonial.date}</footer>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
