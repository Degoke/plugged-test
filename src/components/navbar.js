import { NavLink } from "react-router-dom";
import BigNavBar from "./big-navbar";
import MobileNavBar from "./mobile-navbar";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [shown, setShown] = useState(false);

  const showForm = () => {
    const form = document.getElementById("login-form");
    if (!shown) {
      form.style.display = "block";
      setShown(true);
    } else if (shown) {
      form.style.display = "none";
      setShown(false);
    }
  };

  const switchNav = (category) => {
    switch (location.pathname) {
      case "/":
      case "/mission":
        return (
          <button
            onClick={showForm}
            id="regbut"
            className={category === "mobile" ? "mNavs" : ""}
          >
            Register/Login
          </button>
        );

      case "/register":
      case "/login":
        return (
          <NavLink
            to={location.pathname === "/register" ? "/login" : "/register"}
            id="registerLink"
            className={category === "mobile" ? "mNavs" : ""}
          >
            Register/Login
          </NavLink>
        );

      default:
        return (
          <NavLink to="/login" id="registerLink">
            Register/Login
          </NavLink>
        );
    }
  };
  return (
    <header className="header">
      <nav className="navbar" id="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/Logo.svg" alt="plugged logo" />
          </NavLink>
        </div>
        <BigNavBar switchNav={switchNav} />
      </nav>
      <MobileNavBar switchNav={switchNav} />
    </header>
  );
};

export default NavBar;
