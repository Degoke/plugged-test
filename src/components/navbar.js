import { NavLink } from 'react-router-dom';
import BigNavBar from './big-navbar';
import MobileNavBar from './mobile-navbar';
import './navbar.css';

const NavBar = () => {
    return (
        <header className="header">
        <nav className="navbar" id="navbar">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/Logo.svg" alt="plugged logo" />
            </NavLink>
          </div>
          <BigNavBar />
        </nav>
        <MobileNavBar />
        </header>
    )
}

export default NavBar;