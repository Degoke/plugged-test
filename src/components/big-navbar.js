import MobileBar from "./mobile-bar";
import { NavLink } from 'react-router-dom';

const BigNavBar = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink to="/">Get Started</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Our Mission</NavLink>
        </li>
        <li>
          <NavLink to="/register" id="registerLink">
            Register/Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" id="contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <MobileBar />
    </>
  );
};

export default BigNavBar;
