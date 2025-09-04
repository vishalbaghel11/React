import { LOGO_URL } from "./utils/logo";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header ;