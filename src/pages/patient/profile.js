import PatientOverview from "../../components/patient-overview";
import { Link, useLocation,useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import './profile.css';
import {withAuth} from '../../components/utils';

const PatientProfile = () => {
  const [state, setState] = useState("loading");
  const [record, setRecord] = useState('loading')
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const data = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      let x = sessionStorage.key(i);
      data[x] = sessionStorage[x];
    }
    setState(data);
    const email = sessionStorage.getItem('email')
    const getData = async () => {
      const response = await fetch(
        "https://pluggedhackathon.herokuapp.com/api/healthrecords",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      
      if (response.status === 200) {
        const z = data.filter((user) => user.patientEmail === email)
        setRecord(z[0])
      } else {alert(data.message)};
    }

    getData()
    
    
  }, [location.pathname]);

  const logout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <div className='wrapper'>
      {state === "loading" || record === 'loading' ? (
        <div>Loading</div>
      ) : (
        <div className="profile">
          <nav className="side-nav">
            <ul>
              <li>
                <Link to="/">
                  <img src="/images/logo.svg" className="link" alt="" />
                </Link>
              </li>
              <li className="dash-nav current">Overview</li>
            </ul>
          </nav>
          <div className="dashboards">
            <div className="tops">
              <div className="lefts">
                <p className="hide">Edit</p>
                <p id="prof">
                  <span>
                    <img src="/images/arrow.svg" alt="" />
                  </span>
                  Profile
                </p>
              </div>
              <div>
                <p className="orange link" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
            <PatientOverview state={state} record={record}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default withAuth(PatientProfile);
