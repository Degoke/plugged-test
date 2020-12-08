import NavBar from "../components/navbar";
import { useState } from "react";
import './recover-password.css';

const Recover = () => {
  const [verified, setVerified] = useState(false);

  const verify = (e) => {
    e.preventDefault();
    setVerified(true);
  };
  return (
    <div className='wrapper'>
      <NavBar />
      <div className="container">
        <img
          src={verified ? "/images/verify-emoji.svg" : "/images/forgot-emoji.svg"}
                  className="main-1"
                  alt=''
        />

        <div className="main-2">
          <section>
            <h2>{verified ? "Verification" : "Forgot Password ?"}</h2>
            <p className='recover-text'>
              {verified
                ? "Enter the verification code sent to your mail"
                : "Enter the email address associated with your account"}
            </p>
          </section>
          <form method="POST" onSubmit={verify}>
            <label>
              <input
                type="email"
                placeholder={verified ? "Code" : "Email..."}
                              required
                              className='recover-input'
              />
            </label>
            <label>
              <input
                type="submit"
                value={verified ? "VERIFY" : "SEND"}
                id="sub"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recover;
