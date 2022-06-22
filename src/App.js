import Login from "../src/components/pages/login/login";
import Registration from "../src/components/pages/registration/registration";
import Home from "./components/pages/home/home";
import Snow from "../src/components/backgrounds/snow";

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
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {isLoggedIn ? [<Route path={"/home"} element={<Home />} />] : null}
      </Routes>
      <Snow />
    </div>
  );
}

export default App;
