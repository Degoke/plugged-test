import NavBar from "../components/navbar";
import BackgroundVideo from "../components/background-video";
import "./home.css";
import Form from "../components/sign-in-form";

const Home = () => {
  return (
    <div className="home">
      <BackgroundVideo />
      <NavBar />
      <Form />
      <div className="home-body">
        <p id="one">THE HEALTH RECORDS COMPANY</p>
        <p id="two">Digitalizing Patients Medical Records</p>
        <p id="three">THE FUTURE OF HEALTHCARE</p>
        <p id="four">GET STARTED</p>
      </div>
    </div>
  );
};

export default Home;
