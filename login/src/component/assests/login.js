import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ mode }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const renderForm = () => {
    switch (mode) {
      case 'register':
        return (
          <>
            <h3 className="text-center mb-4">Register</h3>
            {['First Name', 'Last Name', 'Date of Birth', 'Password', 'Confirm Password'].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label">{field}</label>
                <input
                  type={field.includes('Password') ? 'password' : field === 'Date of Birth' ? 'date' : 'text'}
                  className="form-control"
                />
              </div>
            ))}
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </>
        );
      case 'forgotPassword':
        return (
          <>
            <h3 className="text-center mb-4">Forgot Password</h3>
            {['New Password', 'Confirm Password'].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label">{field}</label>
                <input type="password" className="form-control" />
              </div>
            ))}
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </>
        );
      default:
        return (
          <>
            <h3 className="text-center mb-4">Login</h3>
            {['Username', 'Password'].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label">{field}</label>
                <input type={field === 'Password' ? 'password' : 'text'} className="form-control" />
              </div>
            ))}
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="captcha" />
              <label className="form-check-label" htmlFor="captcha">I'm not a robot</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
            <div className="mt-3">
              <button className="btn btn-link w-100" onClick={() => navigate('/register')}>New Register</button>
              <button className="btn btn-link w-100" onClick={() => navigate('/forgot-password')}>Forgot Password</button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm">
        {renderForm()}
        <div className="dropdown mt-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            onClick={toggleDropdown}
          >
            Options
          </button>
          {showDropdown && (
            <ul className="dropdown-menu show">
              {['Home', 'Contact', 'Help'].map((item, idx) => (
                <li key={idx}><a className="dropdown-item" href="#">{item}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
