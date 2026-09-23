import React from "react";
import { useState, useEffect } from "react";
import "../styles/Form.css";

function EventForm({
    initialData = {},
    onSubmit,
    buttonText = "Save Event",

}) {

    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category, setCategory] = useState("Tech");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (initialData && Object.keys(initialData).length > 0) {
            setTitle(initialData.title || "");
            setDescription(initialData.description || "");
            setCategory(initialData.category || "Tech");
            setLocation(initialData.location || "");

            if (initialData.eventDate) {
                setEventDate(initialData.eventDate.substring(0, 10));

            }

            if (initialData.coverImage) {
                setPreview(`http://localhost:5000/uploads/${initialData.coverImage}`);
            }
        }
    }, [initialData]);

    const handleImageChange = (e) => {
        
        const file = e.target.files[0];
        
        if (file) {

            setCoverImage(file);
            
            setPreview(URL.createObjectURL(file));

        }
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("eventDate", eventDate);
        formData.append("location", location);

if (coverImage) {
    
    formData.append("coverImage", coverImage);
    }

    onSubmit(formData);
    
};

    return (
        <div className="form-page" >

            <div className="form-container">

                <h2> {buttonText} </h2>

                <form
                className="event-form"
                onSubmit={handleSubmit}
                >

                     {/* Title */}

                     <div>
                        
                        <label> Event Title </label>

                        <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        />

                     </div>   

                         {/* Description */}

                        <div>
                            
                            <label> Description </label>

                            <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            />
                            
                        </div>

                          {/* Category */}

                          <div>
                            
                            <label> Category </label>

                            <select
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >

                            <option value= "Tech" > Tech </option>
                            <option value= "Workshop" > Workshop </option>
                            <option value= "Sports" > Sports </option>
                            <option value= "Cultural" > Cultural </option>

                           </select>

                        </div>

                         {/* Date */}

                         <div>
                            
                            <label> Event Date </label>

                            <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            required
                            />

                        </div>

                        {/* Location */}

                        <div>
                            
                            <label> Location </label>

                            <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            />
                        
                        </div>

                        {/* Image */}

                        <div>
                            
                            <label> Cover Image </label>

                            <input
                            type="file"
                            accept="image/*"
                            className="file-input"
                            onChange={handleImageChange}
                            />

                       </div>

                       {/* Preview */}

                       {preview && (

                        <div className="image-preview">

                            <img
                            src={preview}
                            alt="preview"
                            />
                            
                        </div>
                    )}

                    {/* Buttons */}

                    <div className="form-buttons">

                        <button
                        
                        className="submit-btn" 
                        type="submit"
                        
                        >{buttonText} 
                        
                      </button>
                    
                    </div>


                </form>
            
            </div>
        
        </div>
    );
 }

 export default EventForm;