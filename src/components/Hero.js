import React from 'react'; // Import React
import './Hero.css'; // Import CSS file for styling the Hero section

// Hero component to display the main introduction section
const Hero = ({ name, bio }) => (
  <section className="hero"> {/* Main Hero section */}
    <h2>{name}</h2> {/* Display user's name dynamically */}
    <p>{bio}</p> {/* Display user's bio dynamically */}
    <button>View My Work</button> {/* Call-to-action button */}
  </section>
);

export default Hero; // Export Hero component
