// components/admin/hero.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const AdminHero = () => {
  const [slides, setSlides] = useState([]);
  const [newSlide, setNewSlide] = useState({
    image: "",
    title: "",
    description: "",
    buttonText: "",
    buttonColor: "",
  });
  const [activeSlideId, setActiveSlideId] = useState(null);
  const [isDbConnected, setIsDbConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Check if the database is connected
  useEffect(() => {
    const checkDatabase = async () => {
      try {
        await axios.get("/api/slides"); // Attempt to fetch the slides
        setIsDbConnected(true);
      } catch (error) {
        setIsDbConnected(false);
        setErrorMessage("Database connection failed. Please check the server.");
      } finally {
        setIsLoading(false);
      }
    };

    checkDatabase();
  }, []);

  // Fetch slides
  useEffect(() => {
    if (!isDbConnected) return;
    const fetchSlides = async () => {
      try {
        const response = await axios.get("/api/slides");
        setSlides(response.data);
      } catch (error) {
        /* console.error("Error fetching slides:", error);
        setErrorMessage("Error fetching slides. Please try again later."); */
      }
    };

    fetchSlides();
  }, [isDbConnected]);

  // Add a new slide
  const handleAddSlide = async () => {
    try {
      const response = await axios.post("/api/slides", newSlide);
      setSlides([...slides, response.data]);
      setNewSlide({
        image: "",
        title: "",
        description: "",
        buttonText: "",
        buttonColor: "",
      });
    } catch (error) {
      console.error("Error adding slide:", error);
      setErrorMessage("Failed to add a new slide. Please try again.");
    }
  };

  // Update a slide
  const handleUpdateSlide = async (id, updatedSlide) => {
    try {
      await axios.put(`/api/slides/${id}`, updatedSlide);
      setSlides(
        slides.map((slide) => (slide._id === id ? { ...slide, ...updatedSlide } : slide))
      );
    } catch (error) {
      console.error("Error updating slide:", error);
      setErrorMessage("Failed to update the slide. Please try again.");
    }
  };

  // Delete a slide
  const handleDeleteSlide = async (id) => {
    try {
      await axios.delete(`/api/slides/${id}`);
      setSlides(slides.filter((slide) => slide._id !== id));
    } catch (error) {
      console.error("Error deleting slide:", error);
      setErrorMessage("Failed to delete the slide. Please try again.");
    }
  };

  // Handle tab selection for slide editing
  const handleSelectTab = (id) => {
    setActiveSlideId(id);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold">Loading...</h2>
      </div>
    );
  }

  // No database connection error
  if (!isDbConnected) {
    return (
      <div className="text-center p-8 bg-red-200">
        <h2 className="text-xl font-bold">Database Not Found</h2>
        <p className="mt-4">{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Hero Section Admin Panel</h1>

      {/* Error message display */}
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Add New Slide Form */}
      <div className="mb-8 p-4 bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">Add New Slide</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddSlide();
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Image URL"
            value={newSlide.image}
            onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Title"
            value={newSlide.title}
            onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={newSlide.description}
            onChange={(e) =>
              setNewSlide({ ...newSlide, description: e.target.value })
            }
            className="p-2 border border-gray-300 rounded col-span-2"
          />
          <input
            type="text"
            placeholder="Button Text"
            value={newSlide.buttonText}
            onChange={(e) =>
              setNewSlide({ ...newSlide, buttonText: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Button Color (e.g., bg-blue-500)"
            value={newSlide.buttonColor}
            onChange={(e) =>
              setNewSlide({ ...newSlide, buttonColor: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded col-span-2"
          >
            Add Slide
          </button>
        </form>
      </div>

      {/* Swiper for Slide Preview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Slide Preview</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          className="mb-8"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide._id}>
              <div className="bg-white p-4 rounded shadow-md">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Manage Existing Slides */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Manage Slides</h2>
        {slides.length === 0 ? (
          <p className="text-gray-500">No slides available.</p>
        ) : (
          <div className="space-y-4">
            {slides.map((slide) => (
              <div key={slide._id}>
                <button
                  onClick={() => handleSelectTab(slide._id)}
                  className={`px-4 py-2 rounded-md mb-2 ${
                    activeSlideId === slide._id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {slide.title}
                </button>
                {activeSlideId === slide._id && (
                  <div className="p-4 bg-white shadow-md rounded">
                    <h3 className="font-semibold">Edit Slide</h3>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) =>
                        handleUpdateSlide(slide._id, {
                          ...slide,
                          title: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <textarea
                      value={slide.description}
                      onChange={(e) =>
                        handleUpdateSlide(slide._id, {
                          ...slide,
                          description: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <input
                      type="text"
                      value={slide.buttonText}
                      onChange={(e) =>
                        handleUpdateSlide(slide._id, {
                          ...slide,
                          buttonText: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <input
                      type="text"
                      value={slide.buttonColor}
                      onChange={(e) =>
                        handleUpdateSlide(slide._id, {
                          ...slide,
                          buttonColor: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <button
                      onClick={() => handleDeleteSlide(slide._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded mt-4"
                    >
                      Delete Slide
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHero;
