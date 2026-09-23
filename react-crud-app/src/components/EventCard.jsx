import React from "react";
import { CalendarDays, MapPin, Pencil, Trash2 } from "lucide-react";
import "../styles/EventCard.css";

function EventCard ({event, onEdit, onDelete,}) {

    const formattedDate = new Date(event.eventDate).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="event-card">

             <div className="event-top">
                
                 <img
                
                className="event-image"
                src={`http://localhost:5000/uploads/${event.coverImage}`}
                alt={event.title}
                /> 

                <span className="event-category"> {event.category} </span>
            
            </div>

            <h2> {event.title} </h2>
            <p> {event.description} </p>

            <div className="event-info">
                
                <div>
                    
                    <CalendarDays size={18} />
                    {/* <span> {event.eventDate} </span> */}
                    <span> {formattedDate} </span>
                    
                    </div>

                    <div>
                        <MapPin size={18} />
                        <span> {event.location} </span>
                   </div>

                </div>

                <div className="event-button">
                    
                    <button className="edit-btn"
                    onClick={() => onEdit (event._id)}
                    >
                        <Pencil size={18} /> Edit </button>

                     <button className="delete-btn"
                     onClick={() => onDelete (event._id)}
                     > 
                     <Trash2 size={18} /> Delete </button>
                     
                </div>

            </div>     
    );
}

export default EventCard;