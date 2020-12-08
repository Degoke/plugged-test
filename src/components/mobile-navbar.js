const MobileNavBar = () => {
  return (
    <div className="mobile" id="mNav">
      <ul className="nav" id="nav">
        <li>
          <a href="/" className="mNav">
            Our Mission
          </a>
        </li>
        <li>
          <a href="/" className="mNav">
            Register/Login
          </a>
        </li>
        <li>
          <a href="/" id="contact" className="mNav">
            Contact Us
          </a>
        </li>
      </ul>
      <img src="/images/menu-rod.png" alt="" />
    </div>
  );
};

export default MobileNavBar;
