import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";





import Home from "./Home";
import About from "./About";
import OurTeam from "./OurTeam";
import Contact from "./Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Contact" element={<Contact />} />
     

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
