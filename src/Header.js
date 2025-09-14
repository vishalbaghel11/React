import { LOGO_URL } from "./utils/logo";
import { useState } from "react";
const Header = () => {
  const [btnNameReact,setbtnNameReact]  = useState("Login");
   return (
    <div id="header">
      <div id="logo">
       <img
  src={LOGO_URL}
  alt="logo"
/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact us</li>
          <button className="login" onClick={()=>{
           btnNameReact==="Login"? setbtnNameReact("Logout"): setbtnNameReact("Login");
          }}
          >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header ;