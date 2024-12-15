import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SketchPicker } from 'react-color';
import { HiColorSwatch } from 'react-icons/hi'; // Color picker icon
import { IoIosClose } from 'react-icons/io'; // Delete icon
import { confirmAlert } from 'react-confirm-alert'; // Correct import for confirmAlert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the styles

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const AdminHero = () => {
  const [slides, setSlides] = useState([]);
  const [editingSlide, setEditingSlide] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(null);
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/slides");
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
    fetchSlides();
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Are you sure?',
      message: `Do you really want to delete slide ${id}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:5000/api/slides/${id}`);
              setSlides(slides.filter(slide => slide.id !== id));
            } catch (error) {
              console.error("Error deleting slide:", error);
            }
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };

  const handleEdit = (id) => {
    const slide = slides.find((slide) => slide.id === id);
    setEditingSlide({ ...slide });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingSlide({ ...editingSlide, [name]: value });
  };

  const handleBooleanChange = (e) => {
    const { name, checked } = e.target;
    setEditingSlide({ ...editingSlide, [name]: checked });
  };

  const handleColorChange = (color, field) => {
    setEditingSlide({ ...editingSlide, [field]: color.hex });
  };

  const toggleColorPicker = (field) => {
    setShowColorPicker(showColorPicker === field ? null : field);
  };

  const toggleBackgroundPicker = () => {
    setShowBackgroundPicker(!showBackgroundPicker);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Admin Panel - Edit Slides</h2>

      {/* Editable Swiper with Inline Editing */}
      <div className="w-full h-[900px] bg-gray-100 flex justify-center items-center overflow-hidden">
        {slides.length > 0 ? (
          <Swiper
            scrollbar={{ hide: true }}
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
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 md:px-16 lg:px-64">
                  {editingSlide && editingSlide.id === slide.id ? (
                    <div className="relative w-full">
                      {/* Editable Title */}
                      <input
                        type="text"
                        name="title"
                        value={editingSlide.title}
                        onChange={handleChange}
                        className="text-2xl font-bold p-2 mb-4 w-full text-white bg-transparent border-b-2 border-white"
                      />

                      {/* Editable Description */}
                      <textarea
                        name="description"
                        value={editingSlide.description}
                        onChange={handleChange}
                        className="p-2 w-full mb-4 text-white bg-transparent border-b-2 border-white"
                      />

                      {/* Editable Button Text */}
                      <input
                        type="text"
                        name="button_text"
                        value={editingSlide.button_text}
                        onChange={handleChange}
                        className="p-2 mb-4 w-full text-white bg-transparent border-b-2 border-white"
                      />

                      {/* Color Picker for Text */}
                      <div className="flex items-center justify-end mb-4">
                        <button
                          type="button"
                          className="p-2 border rounded"
                          onClick={() => toggleColorPicker('text_color')}
                        >
                          <HiColorSwatch className="text-xl text-blue-500" />
                        </button>
                        {showColorPicker === 'text_color' && (
                          <SketchPicker
                            color={editingSlide.text_color}
                            onChangeComplete={(color) => handleColorChange(color, 'text_color')}
                          />
                        )}
                      </div>

                      {/* Save Button */}
                      <button
                        type="button"
                        className="p-2 bg-blue-500 text-white rounded mt-4"
                        onClick={async () => {
                          try {
                            await axios.put(`http://localhost:5000/api/slides/${editingSlide.id}`, editingSlide);
                            setSlides(slides.map(slide => slide.id === editingSlide.id ? editingSlide : slide));
                            setEditingSlide(null);
                          } catch (error) {
                            console.error("Error saving slide:", error);
                          }
                        }}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                        {slide.title}
                      </h2>
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-white">
                        {slide.description}
                      </p>
                      <button
  className={`mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg text-white ${
    /^#[0-9A-F]{6}$/i.test(slide.buttonColor) // Check if buttonColor is a hex code
      ? `bg-[${slide.buttonColor}]` // Apply hex color as a dynamic class
      : slide.buttonColor === 'blue'
      ? 'bg-blue-500'
      : slide.buttonColor === 'green'
      ? 'bg-green-500'
      : slide.buttonColor === 'red'
      ? 'bg-red-500'
      : 'bg-gray-500' // Default to gray if no valid color
  }`}
>
  {slide.buttonText}
</button>


                    </div>
                  )}
                </div>

                {/* Edit and Delete Icons */}
                <div className="absolute top-2 right-2 space-x-2">
                  <button
                    onClick={() => handleEdit(slide.id)}
                    className="p-2 bg-blue-500 text-white rounded-full"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(slide.id)}
                    className="p-2 bg-red-500 text-white rounded-full"
                  >
                    <IoIosClose />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500">Loading slides...</div>
        )}
      </div>
    </div>
  );
};

export default AdminHero;
