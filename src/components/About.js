import React from 'react'; // Import React
import './About.css'; // Import CSS file for styling the About section

// About component to display user information
const About = ({ profilePic, skills, description }) => (
  <section className="about"> {/* Main container for About section */}
    <img src={profilePic} alt="Profile" /> {/* Display profile picture */}
    <h2>About Me</h2> {/* Section title */}
    <p>{description}</p> {/* Display user description */}
    <h3>Skills:</h3> {/* Skills heading */}
    <ul>
      {skills.map((skill, i) => <li key={i}>{skill}</li>)} {/* Display list of skills */}
    </ul>
  </section>
);

export default About; // Export About component