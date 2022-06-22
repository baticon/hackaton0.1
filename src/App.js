import Login from "../src/components/pages/login/login";
import Registration from "../src/components/pages/registration/registration";
import About from "../src/components/pages/about/about";
import Snow from "../src/components/backgrounds/snow";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Snow />
    </div>
  );
}

export default App;
