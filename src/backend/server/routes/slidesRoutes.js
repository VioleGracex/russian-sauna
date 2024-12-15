const express = require("express");
const router = express.Router();
const slidesController = require("../controllers/slidesController");

router.get("/", slidesController.getSlides);
router.post("/", slidesController.addSlide);
router.put("/:id", slidesController.updateSlide);
router.delete("/:id", slidesController.deleteSlide);

module.exports = router;
