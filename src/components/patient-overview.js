import './overview.css'

const PatientOverview = ({ state }) => {
    return (
      <div className="overview">
        <div className="o-left">
          <div className="profile-card boxs">
            <img src={state.image} alt='' />
            <p>{state.firstname + " " + state.lastname}</p>
            <p className="orange">Status</p>
            <div className="side">
              <p>Gender</p> <p>{state.gender}</p>
            </div>
            <div className="side">
              <p>Age</p> <p>{state.age}</p>
            </div>
            <div className="side">
              <p>Height</p> <p>{state.height}</p>
            </div>
            <div className="side">
              <p>Weight</p> <p>{state.weight}</p>
            </div>
            <p className="add">+Add</p>
          </div>
          <div className="boxs">
            <p className="orange">Allergies</p> <p className="add">+Add</p>
          </div>
          <div className="boxs">
            <p className="orange">Notes</p> <p className="add">+Add</p>
          </div>
        </div>
        <div className="o-right">
          <div className="boxs box-mid">
            <p className="title">PERSONAL DETAILS</p>
            <div className="side">
              <div>
                <p>Last name</p> <p>{state.lastname}</p>
              </div>
              <div>
                <p>First name</p> <p>{state.firstname}</p>
              </div>
              <div>
                <p>Birth date</p> <p>{new Date().getFullYear() - state.age}</p>
              </div>
            </div>
            <div className="side">
              <div>
                <p>Address</p> <p>where i live</p>
              </div>
              <div>
                <p>phone-number</p> <p>lol</p>
              </div>
            </div>
  
            <div>
              <p>Email</p> <p>nairamarley@yahoo.om</p>
            </div>
            <p className="add">+Add</p>
          </div>
          <div className="boxs box-last">
            <div className="side">
              <p>Date</p> <p>today date</p>
            </div>
            <div className="side">
              <p>symptoms</p> <p>symptoms, one, two, three, four, fivem six</p>
            </div>
            <div className="side">
              <p>diagnosis</p> <p>diagnosis</p>
            </div>
            <div className="side">
              <p className="orange">PRESCRIPTION</p> <p>treatment</p>
            </div>
            <div className="side">
              <p>doctor</p> <p>doctor</p>
            </div>
            <p className="add">+Add</p>
          </div>
        </div>
        </div>
    )
}
export default PatientOverview;