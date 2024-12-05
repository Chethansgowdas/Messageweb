// Signupdiv.js
import React from "react";

const Signupjs = () => {
  return (
    <div>
        <div class="container">
        <div class="login-box">
            <h2>Signup</h2>
            <form action="#">
              <div class="input-box">
                <input type="email" required/>
                <label>Email</label>
              </div>
              <div class="input-box">
                <input type="password" required/>
                <label>Password</label>
              </div>
              <div class="input-box">
                <input type="Confirmpassword" required/>
                <label>Confirm Password</label>
              </div>
              <button type="submit" class="btn">Submit</button>
            </form>
        </div>

        {Array.from({ length: 60 }, (_, i) => (
          <span key={i} style={{ '--i': i + 1 }}></span>
        ))}

      </div>
    </div>
  );
};

export default Signupjs;
