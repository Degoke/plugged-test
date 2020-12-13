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
    const vid = document.getElementById("vid");
    const home = document.querySelector('.home-body')
    const mission = document.getElementById("mission");
    if (!shown) {
      
      switch(location.pathname){
        case '/':
          vid.pause();
          home.style.opacity = '0.5';
          form.style.display = "block";
          break
        case '/mission':
          mission.style.opacity = '0.5';
          form.style.display = "block";
          break
          default:
            form.style.display = "block";
      }
      setShown(true);
    } else if (shown) {
      switch(location.pathname){
        case '/':
          vid.play();
          home.style.opacity = '1';
          form.style.display = "none";
          break
        case '/mission':
          mission.style.opacity = '1';
          form.style.display = "none";
          break
          default:
            form.style.display = "none";
      }
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
