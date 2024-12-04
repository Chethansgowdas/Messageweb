import './App.css';
import React, { useState } from "react";
import Logindiv from "./Components/pages/login";
import Signupdiv from "./Components/pages/Signup";
import Homepage from "./Components/pages/home";
function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    // <div className="App">
    //   {/* Buttons */}
    //   <div>
    //     <button onClick={() => setActiveComponent("login")}>Login</button>
    //     <button onClick={() => setActiveComponent("signup")}>Signup</button>
    //   </div>

    //   {/* Conditional Rendering */}
    //   <div>
    //     {activeComponent === "login" && <Logindiv />}
    //     {activeComponent === "signup" && <Signupdiv />}
    //   </div>
    // </div>
    <Homepage/>
  );
}

export default App;
