import MobileBar from "./mobile-bar";
import { NavLink } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import {useState} from 'react';

const BigNavBar = () => {
  const location = useLocation();
  const [shown, setShown] = useState(false)

  const showForm = () => {
    const form = document.getElementById('login-form')
    if(!shown){
      form.style.display = 'block';
      setShown(true)
    }
    else if(shown){
      form.style.display = 'none' ;
      setShown(false)
    }
  }

  const SwitchNav = () => {
    switch(location.pathname){
      case '/':
        case '/mission':
         return <button onClick={showForm} id='regbut'>Register/Login</button>
         
         case '/register':
           case '/login':
             return <NavLink to={location.pathname === '/register' ? '/login' : '/register'} id="registerLink">
             Register/Login
           </NavLink>
          
           default:
             return <NavLink to='/login' id="registerLink">
             Register/Login
           </NavLink>

    }
  }
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
          {SwitchNav()}
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
