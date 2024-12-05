import React from "react";

const Homepagejs = () => {
  return (
  <div className="top-left">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={activeComponent === 'home'} onClick={() => setActiveComponent('home')}>Home</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected={activeComponent === 'profile'} onClick={() => setActiveComponent('profile')}>Profile</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected={activeComponent === 'contact'} onClick={() => setActiveComponent('contact')}>Contact</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected={activeComponent === 'login'} onClick={() => setActiveComponent('login')}>Login</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected={activeComponent === 'signup'} onClick={() => setActiveComponent('signup')}>Signup</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div className={`tab-pane fade ${activeComponent === 'home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">Home Content</div>
      <div className={`tab-pane fade ${activeComponent === 'profile' ? 'show active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">Profile Content</div>
      <div className={`tab-pane fade ${activeComponent === 'contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">Contact Content</div>
      <div className={`tab-pane fade ${activeComponent === 'login' ? 'show active' : ''}`} id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab" tabIndex="0"><Logindiv /></div>
      <div className={`tab-pane fade ${activeComponent === 'signup' ? 'show active' : ''}`} id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab" tabIndex="0"><Signupdiv /></div>
      <div className={`tab-pane fade ${activeComponent === 'disabled' ? 'show active' : ''}`} id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">Disabled Content</div>
    </div>
  </div>
  );};

  export default Homepagejs;