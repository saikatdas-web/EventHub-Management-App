const express = require ("express");
const router = express.Router();
const upload = require("../middleware/upload");
const eventController = require("../controllers/eventController");

// API Routes
router.get("/", eventController.getEvents);

router.get("/:id", eventController.getSingleEvent);

router.post("/", upload.single("coverImage"), eventController.createEvent);

router.put("/:id", upload.single("coverImage"), eventController.updateEvent);

router.delete("/:id", eventController.deleteEvent);

module.exports = router;