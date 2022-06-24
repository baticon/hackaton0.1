import Login from "../src/components/pages/login/login";
import Registration from "../src/components/pages/registration/registration";
import RegistrationParticipants from "../src/components/pages/registrationParticipants/registrationParticipant";
import Home from "./components/pages/home/home";
import AdminHome from "../src/components/pages/adminHome/adminHome";
import About from "./components/pages/about/about";
import ScoreSubmit from "../src/components/pages/scoreSubmit/scoreSubmit";

import "./style.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <div>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} /> */}
          <Route path="/" element={<RegistrationParticipants />} />
          {isLoggedIn
            ? [
                <Route path="/about" element={<About />} />,
                <Route path="/admin" element={<AdminHome />} />,
                <Route path="/scoresubmit" element={<ScoreSubmit />} />,
              ]
            : null}
        </Routes>
      </div>
    </div>
  );
}

export default App;
