import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App () {

  // This is to show footer only after login //
  
  const location = useLocation();

  const showLayout = location.pathname !== "/";

  return (
  
    <>
    
    <div className="app">

      {showLayout && <Navbar />}
    
    <Routes>

    <Route path="/" element={<Login />} />

    <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

    <Route path="/add-event" element={<ProtectedRoute><AddEvent /> </ProtectedRoute>} />

    <Route path="/edit-event/:id" element={<ProtectedRoute><EditEvent /> </ProtectedRoute>} />
      
    </Routes>

    {showLayout && <Footer />}

    </div>

    </>
  
)};

export default App;


