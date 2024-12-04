import './App.css';

function App() {
  return (
    <div>
      {/* <div class="container"> <h1>Welcome to My Page</h1> <div class="content"> <p>This is a sample div element.</p> </div> </div> */}
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

        <span style="--i:0;"></span>

      </div>
    </div>
    </div>
  );
}

export default App;
