import './App.css';
import React from "react";
import Logindiv from "./Components/pages/login";
import Signupdiv from "./Components/pages/Signup";

function App() {
  return (
    <div>
      {/* <div class="container"> <h1>Welcome to My Page</h1> <div class="content"> <p>This is a sample div element.</p> </div> </div> */}
      <div>
        <Signupdiv/>
      </div>
    </div>
  );
}

export default App;
