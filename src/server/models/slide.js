const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
  image: { type: String, required: true, default: "placeholder-image.jpg" },
  title: { type: String, required: true, default: "Untitled Slide" },
  description: { type: String, required: true, default: "No description provided." },
  buttonText: { type: String, required: true, default: "Click Here" },
  buttonColor: { type: String, required: true, default: "#000000" }, // Black as default color
});

module.exports = mongoose.model("Slide", slideSchema);
