const Slide = require("../models/slide");

// Get all slides
exports.getSlides = async (req, res) => {
  try {
    const slides = await Slide.find();
    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json({ message: "Error fetching slides", error });
  }
};

// Update a slide
exports.updateSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedSlide = await Slide.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedSlide) return res.status(404).json({ message: "Slide not found" });
    res.status(200).json(updatedSlide);
  } catch (error) {
    res.status(500).json({ message: "Error updating slide", error });
  }
};

// Add a new slide
exports.addSlide = async (req, res) => {
  try {
    const newSlide = new Slide(req.body);
    await newSlide.save();
    res.status(201).json(newSlide);
  } catch (error) {
    res.status(500).json({ message: "Error adding slide", error });
  }
};

// Delete a slide
exports.deleteSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSlide = await Slide.findByIdAndDelete(id);
    if (!deletedSlide) return res.status(404).json({ message: "Slide not found" });
    res.status(200).json({ message: "Slide deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting slide", error });
  }
};
