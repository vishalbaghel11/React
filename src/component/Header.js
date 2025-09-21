import { LOGO_URL } from "../utils/logo";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold text-green-600">Food App</h1>
            <p className="text-sm text-gray-500">
              Status:{" "}
              {onlineStatus ? (
                <span className="text-green-500">🟢 Online</span>
              ) : (
                <span className="text-red-500">🔴 Offline</span>
              )}
            </p>
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-green-600 transition-colors"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/Grocery"
                className="hover:text-green-600 transition-colors"
              >
                Grocery
              </Link>
            </li>
            <li>
              <button
                onClick={handleLoginClick}
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
              >
                {btnNameReact}
              </button>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:block">
          <p className="text-gray-600 font-semibold">👤 Vishal Baghel</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
