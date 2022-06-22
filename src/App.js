import Login from "../src/components/pages/login/login";
import Registration from "../src/components/pages/registration/registration";
import Home from "./components/pages/home/home";
import Snow from "../src/components/backgrounds/snow";
import AdminHome from "../src/components/pages/adminHome/adminHome";

import About from "./components/pages/about/about";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        {isLoggedIn
          ? [
              <Route path="/about" element={<About />} />,
              <Route path={"/home"} element={<Home />} />,
              <Route path="/admin" element={<AdminHome />} />,
            ]
          : null}
      </Routes>
      <Snow />
    </div>
  );
}

export default App;
