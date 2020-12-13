import RegisterPatient from "../components/register-patient";
import RegisterHospital from "../components/register-hospital";
import NavBar from "../components/navbar";
import { useState } from "react";
import './register.css';
import {Link, useHistory} from 'react-router-dom';

const Register = () => {
  const [category, setCategory] = useState("patient");

  const [patient, setPatient] = useState({});

  const [hospital, setHospital] = useState({});

  const [error, setError] = useState(null);

  const history = useHistory();

  const handleChange = (e) => {
    setError(null);
    const names = e.target.name;
    const value = e.target.value;
    if (category === "patient") {
      setPatient((prev) => {
        return { ...prev, [names]: value };
      });
    } else if (category === "hospital") {
      setHospital((prev) => {
        return { ...prev, [names]: value };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === "patient") {
      const response = await fetch(
        "https://pluggedhackathon.herokuapp.com/api/patients",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patient),
        }
      );
      const data = await response.json();

      if (response.status === 200 || response.status === 201) {
        history.push('/login');
      } else {
        setError(data.message);
      }
    } else if (category === "hospital") {
      const response = await fetch(
        "https://pluggedhackathon.herokuapp.com/api/hospitals",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hospital),
        }
      );
      const data = await response.json();

      if (response.status === 200 || response.status === 201) {
        alert("Success, check your email to verify your account");
      } else {
        setError(data.message);
      }
    }
    e.target.reset();
  };

  return (
    <div className='wrapper'>
      <NavBar />

      <div className="register-container"  id="register">
        <select
          id="register-category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="patient">Patient</option>
          <option value="hospital">Hospital</option>
        </select>
        <div className="register-body">
          <h2>Create your plugged Account</h2>
          {category === "patient" ? (
            <RegisterPatient
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
            />
          ) : (
            <RegisterHospital
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
            />
          )}
          
            <Link to='/login'><p>Sign in instead</p></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Register;