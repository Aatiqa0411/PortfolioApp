import React, { useState } from 'react'; // Import React and useState hook
import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import './Navbar.css'; // Import CSS file for styling the Navbar

// Navbar component for navigation and theme toggling
const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu open/close
  
  return (
    <nav className="navbar"> {/* Navbar container */}
      <h1>My Portfolio</h1> {/* Website title */}
      
      {/* Button to toggle mobile menu */}
      <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      
      {/* Navigation links */}
      <ul className={isOpen ? "open" : ""}>
        <li><Link to="/">Home</Link></li> {/* Link to Home page */}
        <li><Link to="/about">About</Link></li> {/* Link to About page */}
        <li><Link to="/projects">Projects</Link></li> {/* Link to Projects page */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
      </ul>
      
      {/* Button to toggle dark/light mode */}
      <button onClick={toggleTheme}>🌙</button>
    </nav>
  );
};

export default Navbar; // Export Navbar component