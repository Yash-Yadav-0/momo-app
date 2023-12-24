import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import OurMenu from './components/OurMenu';
import OurServices from './components/OurServices';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourMenu" element={<OurMenu />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
