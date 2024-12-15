"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SketchPicker } from 'react-color';
import { HiColorSwatch } from 'react-icons/hi'; // Color picker icon
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming these are from your UI library

const AdminHero = () => {
  const [slides, setSlides] = useState([]);
  const [editingSlide, setEditingSlide] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(null); // State to handle the color picker visibility

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

  const handleEdit = (id) => {
    const slide = slides.find((slide) => slide.id === id);
    setEditingSlide({ ...slide });  // Clone slide for editing
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/slides/${id}`, editingSlide);
      setSlides(slides.map(slide => slide.id === id ? editingSlide : slide));
      setEditingSlide(null);
    } catch (error) {
      console.error("Error saving slide:", error);
    }
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
    // Toggle color picker visibility for the respective field only
    setShowColorPicker(showColorPicker === field ? null : field);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Admin Panel - Edit Slides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Accordion type="single" collapsible>
          {slides.map((slide) => (
            <AccordionItem key={slide.id} value={slide.id.toString()}>
              <AccordionTrigger className="flex items-center justify-between">
                <div className="font-medium text-lg">{slide.title}</div>
                <div
                  className="w-24 h-16 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image_url})` }}
                ></div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-4">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                  <div
                    style={{
                      backgroundColor: slide.button_color,
                      color: slide.text_color,
                      padding: '10px',
                    }}
                  >
                    {slide.button_text}
                  </div>
                </div>

                {/* Form for editing slide */}
                <form>
                  <div className="mb-4">
                    <label className="block font-medium">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={editingSlide?.title || slide.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium">Description</label>
                    <textarea
                      name="description"
                      value={editingSlide?.description || slide.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium">Button Text</label>
                    <input
                      type="text"
                      name="button_text"
                      value={editingSlide?.button_text || slide.button_text}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  {/* Color picker for Text Color */}
                  <div className="flex items-center mb-4">
                    <label className="mr-2">Text Color</label>
                    <button
                      type="button"
                      className="p-2 border rounded"
                      onClick={() => toggleColorPicker('text_color')}
                    >
                      <HiColorSwatch className="text-xl text-blue-500" />
                    </button>
                    {showColorPicker === 'text_color' && (
                      <div className="absolute z-50">
                        <SketchPicker
                          color={editingSlide?.text_color || slide.text_color}
                          onChangeComplete={(color) => handleColorChange(color, 'text_color')}
                        />
                      </div>
                    )}
                  </div>

                  {/* Color picker for Button Color */}
                  <div className="flex items-center mb-4">
                    <label className="mr-2">Button Color</label>
                    <button
                      type="button"
                      className="p-2 border rounded"
                      onClick={() => toggleColorPicker('button_color')}
                    >
                      <HiColorSwatch className="text-xl text-blue-500" />
                    </button>
                    {showColorPicker === 'button_color' && (
                      <div className="absolute z-50">
                        <SketchPicker
                          color={editingSlide?.button_color || slide.button_color}
                          onChangeComplete={(color) => handleColorChange(color, 'button_color')}
                        />
                      </div>
                    )}
                  </div>

                  {/* Conditional rendering for background fields */}
                  <div className="mb-4">
                    <label className="block font-medium">Background Type</label>
                    <div className="flex items-center space-x-4">
                      <label>
                        <input
                          type="radio"
                          name="background_type"
                          value="solid"
                          checked={editingSlide?.background_type === 'solid'}
                          onChange={handleChange}
                        />
                        Solid Background
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="background_type"
                          value="image"
                          checked={editingSlide?.background_type === 'image'}
                          onChange={handleChange}
                        />
                        Image Background
                      </label>
                    </div>
                  </div>

                  {editingSlide?.background_type === 'solid' && (
                    <>
                      <div className="mb-4">
                        <label className="block font-medium">Solid Background Color</label>
                        <button
                          type="button"
                          className="p-2 border rounded"
                          onClick={() => toggleColorPicker('background_color')}
                        >
                          <HiColorSwatch className="text-xl text-blue-500" />
                        </button>
                        {showColorPicker === 'background_color' && (
                          <div className="absolute z-50">
                            <SketchPicker
                              color={editingSlide?.background_color || slide.background_color}
                              onChangeComplete={(color) => handleColorChange(color, 'background_color')}
                            />
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {editingSlide?.background_type === 'image' && (
                    <>
                      <div className="mb-4">
                        <label className="block font-medium">Image URL</label>
                        <input
                          type="text"
                          name="image_url"
                          value={editingSlide?.image_url || slide.image_url}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </>
                  )}

                  <div className="mb-4">
                    <label className="block">
                      <input
                        type="checkbox"
                        name="use_background_image"
                        checked={editingSlide?.use_background_image || slide.use_background_image}
                        onChange={handleBooleanChange}
                      />
                      Use Background Image
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block">
                      <input
                        type="checkbox"
                        name="use_solid_background"
                        checked={editingSlide?.use_solid_background || slide.use_solid_background}
                        onChange={handleBooleanChange}
                      />
                      Use Solid Background
                    </label>
                  </div>

                  <button
                    type="button"
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleSave(slide.id)}
                  >
                    Save
                  </button>
                </form>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AdminHero;
