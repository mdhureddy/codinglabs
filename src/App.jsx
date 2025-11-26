import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ITTraining from "./pages/ITTraining";
import Internship from "./pages/Internship";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./components/Footer.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ittraining" element={<ITTraining />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* ✅ WhatsApp Floating Button (bottom-left, visible on all pages) */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
