import PatientOverview from "../../components/patient-overview";
import { Link, useLocation,useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import './profile.css';
import {withAuth} from '../../components/utils';

const PatientProfile = () => {
  const [state, setState] = useState("loading");
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const data = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      let x = sessionStorage.key(i);
      data[x] = sessionStorage[x];
    }
    setState(data);
  }, [location.pathname]);

  const logout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <div className='wrapper'>
      {state === "loading" ? (
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
              <li className="dash-nav">History</li>
              <li className="dash-nav">Drugs</li>
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
            <PatientOverview state={state} />
          </div>
        </div>
      )}
    </div>
  );
};

export default withAuth(PatientProfile);
