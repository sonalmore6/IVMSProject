import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/Login/Head";
import Home from './components/collage login/Home';
import About from './components/collage login/About';
import Agenda from './components/collage login/Agenda';
import Feedback from "./components/collage login/Feedback";
import Gallery from './components/collage login/Gallery';
import PendingFees from './components/collage login/PendingFees';
import Visit from './components/collage login/Visit';
import Footers from "./components/Login/Footers";
import Login from "./components/Login/Login";
import Visitform from './components/collage login/Visitform';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function App() {
  // State to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* If not logged in, show only the login page */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {/* After login, show header and routes */}
          <Head />
          <Routes>
            {/* All pages that require header and footer */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Visit />} />
            <Route path="/addvisit" element={<Visitform />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/fees" element={<PendingFees />} />
            <Route path="/" element={<Home />} /> {/* Default route to home page */}
          </Routes>

          {/* Fixed WhatsApp and Call Icons */}
          <div className="icon-container">
            <a
              href="https://api.whatsapp.com/send/?phone=918010385237&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaWhatsapp size={50} color="#25D366" className="icon" />
            </a>
            <a href="tel:+918010385237" className="icon-link">
              <FaPhoneAlt size={50} color="#34b7f1" className="icon" />
            </a>
          </div>

          {/* Footer */}
          <Footers />
        </>
      )}
    </>
  );
}

export default App;
