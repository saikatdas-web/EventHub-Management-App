const upload = require("../middleware/upload");
const Event = require ("../models/event");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");

// Get all event
const getEvents = async (req,res) =>{

    try{
        const events = await Event.find();
        res.status(200).json({
            success:true,
            message:"All events fetched successfully",
            data:events,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

//Get single event
const getSingleEvent = async (req,res) => {
    try{
       const event = await Event.findById(req.params.id);
       if (!event) {
       return res.status(404).json({
        success:false,
        message:"Event not found",
     }); 
    }    
    res.status(200).json({
        success:true,
        data: event,
    });

} catch (error) {

    res.status(500).json({
        success:false,
        message: error.message,
    });
 }
};

// Create event
const createEvent = async (req,res) => {
    try {
        const event = await Event.create({

           title: req.body.title,
           description: req.body.description,
           category:req.body.category,
           eventDate:req.body.eventDate,
           location:req.body.location,
           
           // Save uploaded image filename
           coverImage:req.file? req.file.filename:null,
        });

        res.status(201).json({
            success:true,
            message:"Event created successfully",
            data: event,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
};

// Update event
/* const updateEvent = async (req,res) =>{
    try{
        const updatedEvent = await Event.findById(
          req.params.id,  
            {
                title:req.body.title,
                description:req.body.description,
                category:req.body.category,
                eventDate:req.body.eventDate,
                location:req.body.location,

        // If a new image is uploaded, use it.Otherwise keep the old one.
        
                coverImage:req.file ? req.file.filename : req.body.coverImage,
            },
            { new:true }
    );

        res.status(200).json({
            success:true,
            message:"Event updated successfully",
            data: updatedEvent,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
}; */

const updateEvent = async (req, res) => {
    try {

        // Find existing event first
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }


        // If a new image is uploaded
        if (req.file) {

            // Delete old image
            if (event.coverImage) {

                const oldImagePath = path.join(
                    uploadDir,
                    event.coverImage
                );

                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                    console.log("Old image deleted");
                }
            }


            // Save new image filename
            event.coverImage = req.file.filename;
        }


        // Update other fields
        event.title = req.body.title || event.title;
        event.description = req.body.description || event.description;
        event.category = req.body.category || event.category;
        event.eventDate = req.body.eventDate || event.eventDate;
        event.location = req.body.location || event.location;


        // Save changes
        const updatedEvent = await event.save();


        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            data: updatedEvent,
        });


    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message,
        });

    }
};

// Delete event
const deleteEvent = async (req, res) => {
  try {

    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Delete image if it exists
    if (deletedEvent.coverImage) {

      const filePath = path.join(uploadDir, deletedEvent.coverImage);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deletedEvent,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const eventController = {
    getEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent
}; 

module.exports = eventController; 