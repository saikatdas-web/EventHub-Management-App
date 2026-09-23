import react from "react";
import { useState } from "react";
import { Eye,EyeOff } from "lucide-react";

import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.jpg";
import "../styles/Login.css";

function Login () {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email ==="eventHub@gmail.com" && password === "12345") {
            
            localStorage.setItem("isLoggedIn", "true");

            navigate("/dashboard");
        
        } else {
            alert ("Invalid Email or Password");
        }
    };
    
    return (
        
    <div
        className="login-container"
        style={{backgroundImage: `url(${loginBg})`,}}
    >

        <div className="login-card">

            <h1>EventHub!!</h1>

            <p>Plan • Organize • Celebrate</p>

            <form onSubmit={handleLogin}>
           
            <div className="input-group">

                <label>Email</label>

                <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
        </div>

        <div className="input-group">

            <label>Password</label>

            <div className="password-box">

                <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />

            <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
            >
                {
                    showPassword? <EyeOff size={20} />
                    :
                    <Eye size={20} />
                }

              </button>

            </div>

        </div>

        <button
        
        className="login-btn" 
        type="submit"
        >
            Login

            </button>
        
        </form>

    </div>
  
  </div>
  
)};

export default Login;