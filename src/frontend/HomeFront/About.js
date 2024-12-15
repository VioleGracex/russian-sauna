"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const images = [
    "https://via.placeholder.com/500x500?text=Image+1",
    "https://via.placeholder.com/500x500?text=Image+2",
    "https://via.placeholder.com/500x500?text=Image+3",
    "https://via.placeholder.com/500x500?text=Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Switch images every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]); // Added images.length to the dependency array

  return (
    <section
      className="w-full h-auto min-h-screen flex flex-wrap items-center justify-center p-6  md:p-8"
      style={{
        background: "linear-gradient(135deg, #FFD698, #5A4E3D)",
      }}
    >
      {/* Right Side - Text Content */}
      <div className="w-auto md:w-1/2 max-w-lg justify-items-center text-center ml-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#AA3708] mb-4">
          О нас
        </h2>
        <p className="text-white text-sm md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
      </div>

      {/* Left Side - Image Cards */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mb-24  mt-9">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-lg absolute transition-all duration-700 ${
              index === currentIndex
                ? "z-10 transform translate-x-0 translate-y-0 scale-100"
                : "z-0 opacity-50 transform scale-90"
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
