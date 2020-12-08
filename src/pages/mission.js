import NavBar from "../components/navbar";
import Form from "../components/sign-in-form";
import "./mission.css";

const Mission = () => {
  return (
    <div className="wrapper">
          <NavBar />
          <Form />
      <div className="mission-container" id="mission">
        <section className="mission-details">
          <h1>Our Mission</h1>
          <p>
            Our Unique solution is to make patient medical records easily
            accessible to health care providers and patients when needed
          </p>
          <p>
            Keeping hospitals updated on patient health records and post
            treatment follow up.
          </p>
        </section>
        <div className="mission-images">
          <div>
            <div id="imgone">
              <img src="/images/mission-fibers.png" alt="" className='misiion-img'/>
            </div>
            <div className="mid">
              <div id="imgtwo">
                <img src="/images/mission-hand.png" alt="" className='mission-img'/>
              </div>
              <div id="imgthree">
                <img src="/images/mission-woman.png" alt="" className='mission-img'/>
              </div>
            </div>
          </div>

          <div id="imgfour">
            <img src="/images/mission-man.png" alt="" className='mission-img'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
