"use client";

import React, { useState, useEffect } from "react";

const About = () => {
  // Initialize an array of images
  const images = [
    "https://via.placeholder.com/500x500?text=Image+1",
    "https://via.placeholder.com/500x500?text=Image+2",
    "https://via.placeholder.com/500x500?text=Image+3",
    "https://via.placeholder.com/500x500?text=Image+4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Switch images every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center p-8"
      style={{
        background: "linear-gradient(135deg, #FFD698, #5A4E3D)",
      }}
    >
      {/* Left Side - Image Cards */}
      <div className="w-1/2 flex justify-center items-center relative">
        {/* Loop through images and display them */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[500px] h-[500px] rounded-lg overflow-hidden shadow-lg absolute transition-all duration-700 ${
              index === currentIndex
                ? "z-10 transform translate-x-0 translate-y-0"
                : index === (currentIndex - 1 + images.length) % images.length
                ? "z-0 transform translate-x-4 translate-y-2"
                : "z-0 transform translate-x-4 translate-y-4"
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

      {/* Right Side - Text Content */}
      <div className="w-1/2 max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#AA3708] mb-4">О нас</h2>
        <p className="text-white text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
    </section>
  );
};

export default About;
