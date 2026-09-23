const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Tech", "Workshop", "Sports", "Cultural"],
      required: true,
    },

    eventDate: {
      type: Date,
      default: Date.now,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: null,
    },
  },{
    
    timestamps: true,
    collection: "events",
});

module.exports = mongoose.model("Event", eventSchema);