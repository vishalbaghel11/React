import { LOGO_URL } from "../utils/logo";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './App.css'
import useOnlineStatus from "../utils/useonlinestatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const handleLoginClick = () => {
    if (btnNameReact === "Login") {
      setBtnNameReact("Logout");
      navigate("/Inputform");
    } else {
      setBtnNameReact("Login");
      navigate("/"); 
    }
  };

  return (
    <div id="header">
      <div id="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div>
      <h1>Food App</h1>
      <p>Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
            <button className="login" onClick={handleLoginClick}>
              {btnNameReact}
            </button>
            
          </li>
           <p>Vishal Baghel</p> 
        </ul>
      </div>
    </div>
  );
};

export default Header;
