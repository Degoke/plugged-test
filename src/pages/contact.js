import NavBar from "../components/navbar";
import './contact.css';

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="contact">
        <div className="body">
          <h1>Let's Talk</h1>
          <p>
            We'd love to talk to you on <u>08089675114</u>
          </p>
          <p id="bordered">plugged@gmail.com</p>
          <div className="social"></div>
        </div>
        
      </div>
    </>
  );
};

export default ContactUs;
