import React from "react";
import { Mail, Phone } from "lucide-react";
import {  FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/Footer.css";

function Footer () {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h3> HubSpot </h3>
                    <p> Event that makes it real...  </p>
                
                </div>

                <div>
                    <div className="footer-section">

                        <h4> Contacts </h4>
                        
                        <p> <Mail size={16} /> saikatXX@gmail.com </p>
                        <p> <Phone size={16} /> XXXXXXXX44 / XXXXXXXX58</p>
                        
                    </div>

                    <div className="footer-section" >

                        <h4> Follow us </h4>
                        
                        <div className="social-icons" >
                            
                            <a
                            href="https://github.com/yourusername"
                            target="blank"
                            >
                                <FaGithub size= {22} />
                            </a>

                            <a
                            href="https://instagram.com/yourusername"
                            target="blank"
                            >
                                <FaInstagram size = {22} />
                            </a>

                            <a
                            href="https://linkedin.com/yourusername"
                            target="blank"
                            >
                                <FaLinkedin size = {22} />
                            </a>

                            <a
                            href="https://linkedin.com/yourusername"
                            target="blank"
                            >
                                <FaFacebook size = {22} />
                            
                            </a>
                            
                            </div> 
                    </div>
                    
                </div>

            </div>

    </footer>
    
  );

}

export default Footer;

/* 
<div className="developer-slider">
        <marquee behavior="scroll" direction="left">
          🚀 Developed by Your Name | MERN Stack Event Management System
        </marquee>
      </div>
      
     This is a slider use this just above the </footer> tag
      */ 