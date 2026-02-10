import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import PracticeAreas from "./PracticeAreas";
import Attorneys from "./Attorneys";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/PracticeAreas" element={<PracticeAreas />} />
        <Route path="/Attorneys" element={<Attorneys />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
