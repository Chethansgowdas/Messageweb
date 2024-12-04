// SpanList.js
import React from "react";

const SpanList = () => {
  return (
    <div>
        <div class="container">
        <div class="login-box">
            <h2>Login</h2>
            <form action="#">
              <div class="input-box">
                <input type="email" required/>
                <label>Email</label>
              </div>
              <div class="input-box">
                <input type="password" required/>
                <label>Password</label>
              </div>
              <div class="forgot-pass">
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" class="btn">Login</button>
                <div class="signup-link">
                    <a href="#">Signup</a>
                </div>
            </form>
        </div>

        {Array.from({ length: 60 }, (_, i) => (
          <span key={i} style={{ '--i': i + 1 }}></span>
        ))}

      </div>
    </div>
  );
};

export default SpanList;
