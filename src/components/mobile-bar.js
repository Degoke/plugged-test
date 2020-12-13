import {useState} from 'react';

const MobileDar = () => {
  const[status, setStatus] = useState(false)

  const showNav =() => {
    const nav = document.getElementById('mNav')
    if(!status){
      nav.style.display = 'flex'
      setStatus(true)
    }
    else if(status){
      nav.style.display = 'none'
      setStatus(false)
    }
  }
  return (
    <div className="mobileBar" onClick={showNav}>
      <img src="/images/menu.png" alt="" />
    </div>
  );
};

export default MobileDar;
