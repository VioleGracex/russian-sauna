"use client";

import React from "react";

// Helper component to render each advantage with an icon
const AdvantageItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#AA3708] to-[#541F09]"
      >
        <img src={icon} alt="Icon" className="w-8 h-8" />
      </div>
      <p className="text-white text-lg md:text-xl">{text}</p>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    { icon: "https://via.placeholder.com/40?text=WiFi", text: "Бесплатный Wi-Fi" },
    { icon: "https://via.placeholder.com/40?text=TV", text: "TV во всех номерах" },
    { icon: "https://via.placeholder.com/40?text=Clock", text: "Работаем круглосуточно" },
    { icon: "https://via.placeholder.com/40?text=Smoke", text: "Разрешено курение" },
    { icon: "https://via.placeholder.com/40?text=Gift", text: "Пятый час в подарок" },
    { icon: "https://via.placeholder.com/40?text=Billiards", text: "Бильярдный стол" },
    { icon: "https://via.placeholder.com/40?text=Drinks", text: "Дополнительно напитки/перекус" },
    { icon: "https://via.placeholder.com/40?text=Hygiene", text: "Дополнительно предметы гигиены" },
    { icon: "https://via.placeholder.com/40?text=Food", text: "Поможем организовать доставку еды" },
    { icon: "https://via.placeholder.com/40?text=Support", text: "Круглосуточная поддержка" }
  ];

  return (
    <section
      className="w-full py-16 px-8"
      style={{
        background: "linear-gradient(135deg, #FFD698, #5A4E3D)",
      }}
    >
      <h2 className="text-2xl font-bold text-[#AA3708] text-center mb-12">Преимущества</h2>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-xl overflow-x-auto scrollbar-hidden">
          {/* Adjust the grid to have more columns on larger screens and keep it responsive */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto">
            {advantages.map((advantage, index) => (
              <AdvantageItem key={index} icon={advantage.icon} text={advantage.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
