import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import ReachOut from './pages/ReachOut';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reach-out" element={<ReachOut />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
