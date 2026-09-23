import React from "react";
import { LayoutDashboard, PlusCircle, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem("isLoggedIn");
        
        navigate("/", { replace: true });
    };

    return (

        <nav className="navbar">

            <div className="logo">
                
                EventHub
            
            </div>

            <ul className="nav-links">

                <li>

                <Link to= "/dashboard">

                  {/* <LayoutDashboard size={18} /> */} 

                📊Dashboard
                
                </Link>

                </li>

                <li>

                    <Link to="/add-event" >
                    
                     {/* <PlusCircle size={18} /> */} 

                    ➕Add Event

                    </Link>

                </li>

            </ul>


            <button
            
            className="logout-btn"
            
            onClick={handleLogout} >

             <LogOut size={18} /> 

            Logout
            
            </button>
        
        </nav>
    );
}

export default Navbar;