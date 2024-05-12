import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Clients from "./pages/clients/Clients.jsx";
import Certificates from "./pages/certificates/Certificates.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/our-clients" element={<Clients />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
