import RegisterPatient from '../../components/register-patient';
import {Link, useHistory} from 'react-router-dom';
import './hospital-profile.css';
import {withAuth} from '../../components/utils';

const HospitalPage = () => {
    const history = useHistory()
    
  const logout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <div className="profile wrapper">
      <nav className="side-nav">
        <ul>
          <li>
            <Link to="/">
              <img src="/images/logo.svg" className="link" alt=''/>
            </Link>
          </li>
          <li className="dash-nav current">Registration</li>
          <li className="dash-nav">Add Record</li>
          <li className="dash-nav">Patients</li>
        </ul>
      </nav>
      <div className="dashboard">
        <div className="top">
          <div className="left">
            <p className="hide">Edit</p>
            <p>
              <span>
                <img src="/images/arrow.svg" alt=''/>
              </span>
            </p>
          </div>
          <div className="rite">
            <label>
              <input
                type="search"
                id="psearch"
                placeholder="search patient..."
              />
            </label>
            <p className="orange link" onClick={logout}>
              Logout
            </p>
          </div>
        </div>
        <div className="body">
          <h2>Register New Patient</h2>
          <RegisterPatient />
        </div>
      </div>
    </div>
  );
};

export default withAuth(HospitalPage);
