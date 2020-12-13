import './overview.css'
const PatientOverview = ({ state, record }) => {
    const showRecord = (data) => {
      if(record){
          return record.data
      }
      else{
        return 'not yet available'
      }
    }
    return (
      <div className="overview">
        <div className="o-left">
          <div className="profile-card boxs">
            <img src={'/images/avatar.svg'} alt='' width='200' />
            <p>{state.firstname + " " + state.lastname}</p>
            <p className="orange">Status</p>
            <div className="side">
              <p>Gender</p> <p>{state.gender}</p>
            </div>
            <div className="side">
              <p>Age</p> <p>Age</p>
            </div>
            <div className="side">
              <p>Height</p> <p>{state.height}</p>
            </div>
            <div className="side">
              <p> Weight</p> <p>{state.weight}</p>
            </div>
            <p className="add">+Add</p>
          </div>
          <div className="boxs">
            <p className="orange">Allergies</p><p>
              {showRecord('allergies')}</p> <p className="add">+Add</p>
          </div>
          <div className="boxs">
            <p className="orange">Notes</p> 
            <p>{showRecord('notes')}</p>
            <p className="add">+Add</p>
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
                <p>Birth date</p> <p>{new Date(state.dateOfBirth).toLocaleString().split(',')[0]}</p>
              </div>
            </div>
            <div className="side">
              <div>
                <p>Address</p> <p>{state.address}</p>
              </div>
              <div>
                <p>phone-number</p> <p>{state.contactInfo}</p>
              </div>
            </div>
  
            <div>
              <p>Email</p> <p>{state.email}</p>
            </div>
            <p className="add">+Add</p>
          </div>
          <div className="boxs box-last">
            <div className="side">
              <p>Date</p> <p>{showRecord('created_at')}</p>
            </div>
            <div className="side">
              <p>symptoms</p> <p>{showRecord('symptoms')}</p>
            </div>
            <div className="side">
              <p>diagnosis</p> <p>{showRecord('diagnosis')}</p>
            </div>
            <div className="side">
              <p className="orange">PRESCRIPTION</p> <p>{showRecord('prescription')}</p>
            </div>
            <div className="side">
              <p>doctor</p> <p>{showRecord('hospital[hospital]')}</p>
            </div>
            <p className="add">+Add</p>
          </div>
        </div>
        </div>
    )
}
export default PatientOverview;