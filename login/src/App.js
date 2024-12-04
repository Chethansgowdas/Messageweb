import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentView, setCurrentView] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
    newPassword: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="container">
      {/* Toggle Dropdown Menu */}
      <div className="toggle-container">
        <button
          className="toggle-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="dropdown-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>

      {/* Conditional Form Views */}
      {currentView === "login" && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group remember-me"> 
  <input
    type="checkbox"
    id="rememberMe"
    name="rememberMe"
    checked={formData.rememberMe}
    onChange={handleInputChange}
  />
  <label htmlFor="rememberMe">Remember Me</label>
</div>npm
          <button type="submit" className="login-button">
            Sign In
          </button>
          <button
            type="button"
            className="link-button"
            onClick={() => setCurrentView("forgotPassword")}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="link-button"
            onClick={() => setCurrentView("register")}
          >
            New Registration
          </button>
        </form>
      )}

      {currentView === "forgotPassword" && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="link-button"
            onClick={() => setCurrentView("login")}
          >
            Back to Login
          </button>
        </form>
      )}

      {currentView === "register" && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="link-button"
            onClick={() => setCurrentView("login")}
          >
            Back to Login
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
