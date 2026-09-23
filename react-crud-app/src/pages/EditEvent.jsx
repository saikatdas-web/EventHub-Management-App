import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import { getEvent,updateEvent } from "../services/api";

// import Navbar from "../components/Navbar";


function EditEvent () {

  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  
  useEffect(() => {

    fetchEvent();
  
  },[]);

  const fetchEvent = async () => {

    try {

      const response = await getEvent(id);

      setEvent(response.data.data);
    
    } catch (error) {

      console.log(error);
    
    }
  
  };
  
  const handleUpdateEvent = async (formData) => {

    try {

      await updateEvent(id, formData);

      alert("Event Updated Successfully!");

      navigate("/dashboard");
    
    } catch (error) {

      console.log(error);

      alert("oops sorry!! Unable to update event");
    }
  
  };

  if (!event) {

     return (

        <>

        {/* <Navbar /> */}

        <h2 style={{ padding:"40px" }} >

        Loading...

        </h2>

      </>  
  
    );
}


return (

  <>

  {/* <Navbar/> */}

  <EventForm initialData={event} 
  
  onSubmit={handleUpdateEvent} 
  
  buttonText="Update-Event" />
  
  </>

  );

}

export default EditEvent;