"use client";

import React from "react";

const tariffs = [
  {
    title: "Тариф 01",
    description: [
      "Пункт 1: Описание преимущества",
      "Пункт 2: Дополнительные услуги",
      "Пункт 3: Особенности тарифа"
    ],
    image: "https://via.placeholder.com/1920x1080",
  },
  {
    title: "Тариф 02",
    description: [
      "Пункт 1: Описание преимущества",
      "Пункт 2: Дополнительные услуги",
      "Пункт 3: Особенности тарифа"
    ],
    image: "https://via.placeholder.com/1920x1080",
  },
  {
    title: "Тариф 03",
    description: [
      "Пункт 1: Описание преимущества",
      "Пункт 2: Дополнительные услуги",
      "Пункт 3: Особенности тарифа"
    ],
    image: "https://via.placeholder.com/1920x1080",
  }
];

const Tariffs = () => {
  return (
    <section className="w-full py-16 px-8 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        
        {tariffs.map((tariff, index) => (
          <div
            key={index}
            className="relative group flex-1 h-[900px] overflow-hidden rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${tariff.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 text-white">
              <h2 className="text-4xl font-bold mb-4 relative">
                {/* Transparent outlined numbers */}
                <span className="text-orange-500 text-[400px]  absolute font-bold opacity-10   p-4">
                  {`${index + 1}`}
                </span>
                {tariff.title}
              </h2>
              <ul className="space-y-2 mb-6">
                {tariff.description.map((point, i) => (
                  <li key={i} className="text-lg">{point}</li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-transform duration-300 transform group-hover:scale-105">
                Записаться
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tariffs;
