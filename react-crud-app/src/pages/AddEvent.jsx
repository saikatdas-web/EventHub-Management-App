import React from "react";
import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { createEvent } from "../services/api";

// import Navbar from "../components/Navbar";


function AddEvent() {

    const navigate = useNavigate();

    const handleCreateEvent = async (formData) => {

        try {

            await createEvent(formData);

            alert("Event Created Successfully!");

            navigate("/dashboard");

        }

        catch (error) {

            console.error(error);

            alert("Unable to create event.");

        }

    };

    return (

        <>

            {/* <Navbar /> */}

            <EventForm
                onSubmit={handleCreateEvent}
                buttonText="Create Event"
            />

        </>

    );

}

export default AddEvent;