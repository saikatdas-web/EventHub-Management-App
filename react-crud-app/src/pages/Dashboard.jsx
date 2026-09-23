import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import DeleteModal from "../components/DeleteModal";
import { getEvents, deleteEvent } from "../services/api";
import "../styles/Dashboard.css";
// import Navbar from "../components/Navbar";


function Dashboard () {

  const navigate = useNavigate();
  
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  // Fetch events from backend //

  const fetchEvents = async () => {

    try {

      const response = await getEvents();
      setEvents(response.data.data);
    
    } catch (error) {

      console.log(error);
    
    } finally {

      setLoading(false);
    }
};

useEffect(() =>{

  fetchEvents();

},[]);

// Search + Category filter //

const filteredEvents = events.filter((event) => {

  const searchMatch = event.title.toLowerCase().includes(search.toLowerCase())

  || event.location.toLowerCase().includes(search.toLowerCase());

  const categoryMatch = category === "All" || event.category === category;

  return searchMatch && categoryMatch;

});

const handleEdit = (id) => {

  navigate(`/edit-event/${id}`);
};

const handleDelete = (id) => {

  setDeleteId(id);cd
};

const confirmDelete = async () => {

  try {

    await deleteEvent(deleteId);
    setDeleteId(null);
    fetchEvents();

    alert("Event deleted successfully");
  
  } catch (error) {

    console.log(error);

    alert("Unable to delete event");
  
  }

};

return (

    <>
  
  {/* <Navbar/> */}

  <div className="dashboard" >

    <div className="dashboard-header">

      <h1> Event Dashboard </h1>

      <p> Manage All Your Events in one Place </p>
      
      </div>

      <div className="filters">

        <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter category={category} setCategory={setCategory} />
        
      </div>

      { loading ? ( 
        
        <h2> Loading Events... </h2>) 
        
      : (< div className="event-grid" >
        
        {filteredEvents.length > 0 ? (filteredEvents.map((event) => 
        
        (<EventCard key={event._id} 
          event={event} 
          onEdit={handleEdit} 
          onDelete={handleDelete} />
      ))
    ) 

    : (

      <h2> No Events Found </h2>
     
     )}

  </div>

    )}
 
 </div>

    {

    deleteId && (

      <DeleteModal onConfirm = {confirmDelete}

      onCancel = {() => setDeleteId(null)} />

    )

  }

  </>

  );

}

export default Dashboard;