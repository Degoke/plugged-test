import { NavLink } from 'react-router-dom';
import {useEffect} from 'react';

const MobileNavBar = ({switchNav}) => {
  useEffect(() => {
    const navMenu = document.querySelectorAll(".mNavs");
    const nav = document.getElementById('mNav')
    navMenu.forEach((link) => {
      link.onclick = () => {
        nav.style.display = "none";
      };
    });
  });

  return (
    <div className="mobile" id="mNav">
      <ul className="nav" id="nav">
      <li>
          <NavLink to="/mission" className='mNavs'>Our Mission</NavLink>
        </li>
        <li>
          {switchNav()}
        </li>
        <li>
          <NavLink to="/contact" id="contact" className='mNavs'>
            Contact Us
          </NavLink>
        </li>
      </ul>
      <img src="/images/menu-rod.png" alt="" />
    </div>
  );
};

export default MobileNavBar;
