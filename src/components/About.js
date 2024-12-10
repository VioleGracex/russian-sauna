"use client";

import React, { useState, useEffect } from "react";

const About = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 8000); // Switch images every 2 seconds
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
        {/* First Image */}
        <div
          className={`ml-24 mb-24 w-[500px] h-[500px] rounded-lg overflow-hidden shadow-lg absolute transition-all duration-700 ${
            showFirstImage ? "z-10" : "z-0 scale-95 translate-x-4"
          }`}
        >
          <img
            src="https://via.placeholder.com/500x500?text=Image+1"
            alt="Placeholder Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div
          className={ ` mr-24 mt-24 w-[500px] h-[500px] rounded-lg overflow-hidden shadow-lg absolute transition-all duration-700 ${
            showFirstImage ? "z-0 scale-95 -translate-x-4" : "z-10"
          }`}
        >
          <img
            src="https://via.placeholder.com/500x500?text=Image+2"
            alt="Placeholder Image 2"
            className="w-full h-full object-cover"
          />
        </div>
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
