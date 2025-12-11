import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./component/Service-us";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";






 function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<contact />} />
        </Routes>
    </BrowserRouter>
  );
}
