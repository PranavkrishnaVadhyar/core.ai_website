import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Core.AI</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/projects">Student Projects</Link></li>
        <li><Link to="/reach-out">Reach Out</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
