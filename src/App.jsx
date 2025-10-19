import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleHome from "./SimpleHome";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DriverPage from "./pages/DriverPage";
import MechanicPage from "./pages/MechanicPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SimpleHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/drivers" element={<DriverPage />} />
            <Route path="/mechanics" element={<MechanicPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
