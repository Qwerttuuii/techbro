import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";





import Home from "./Home";
import About from "./About";
import News from "./News";
import Attorneys from "./Attorneys";
import Contact from "./Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/Attorneys" element={<Attorneys />} />
        <Route path="/Contact" element={<Contact />} />
     

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
