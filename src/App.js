import './App.css';
import Home from './pages/home';
import Mission from './pages/mission';
import Login from './pages/login';
import ContactUs from './pages/contact';
import Register from './pages/register';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Recover from './pages/recover-password';
import PatientProfile from './pages/patient/profile';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/mission'>
          <Mission />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/contact'>
          <ContactUs />
        </Route>
        <Route exact path='/recover-password'>
          <Recover />
        </Route>
        <Route exact path='/user/:id'>
          <PatientProfile />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
