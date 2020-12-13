import MobileBar from "./mobile-bar";
import { NavLink } from 'react-router-dom';


const BigNavBar = ({switchNav}) => {
 
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink to="/register">Get Started</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Our Mission</NavLink>
        </li>
        <li>
          {switchNav()}
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
