import './sign-in-form.css';
import { useState } from "react";
import {useLocation, Link} from "react-router-dom";

const Form = () => {
  const [category, setCategory] = useState("hospital");

  const [state, setState] = useState({});

  const [setUser] = useState({});

  const [error, setError] = useState(null);

  const location = useLocation();

  const display = () => {
    if(location.pathname === '/login'){
      return 'block'
    }
    else{
      return "none"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === "patient") {
      const response = await fetch(
        "https://pluggedhackathon.herokuapp.com/api/patients/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        //const userName = `${data.firstname}-${data.lastname}`;
        setUser(data);
        
      } else setError(data.message);
    } else if (category === "hospital") {
      const response = await fetch(
        "https://pluggedhackathon.herokuapp.com/api/hospitals/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setUser(data);
      } else setError(data.message);
    }
  };

  const handleChange = (e) => {
    setError(null);
    const names = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return { ...prev, [names]: value };
    });
  };



  return (
    <div className="form" style={{display: display()}} id="login-form" >
      <div className="form-text">
        <p className="bold sign">Sign in to continue</p>
        <p className="lite">Not a member yet?</p>
        
          <Link to='/register' className="red bold">Register now</Link>
        
      </div>
      <form className="form-container" method="POST" onSubmit={handleSubmit}>
        <label>
          <select
            id="category"
            name="category"
            onChange={e => setCategory(e.target.value)}
          >
            <option value="hospital">Hospital</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address..."
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <input type="checkbox" id="check" name="check"></input>
          Keep me logged in
        </label>
        <p className='error'>{error}</p>
        <label>
          <input type="submit" id="submitLogin" value="LOGIN NOW" />
        </label>
      </form>
        <Link to="/recover-password" id="forgot">Forgot your password?</Link>
    </div>
  );
};

export default Form;
