import React from 'react';
import Draggable from 'react-draggable'; // Import Draggable for drag functionality
import { motion } from 'framer-motion'; // Import motion from Framer Motion for animations
import './ProjectCard.css'; // Import CSS file for styling

const ProjectCard = ({ title = "Untitled", description = "No description available", image, link }) => (
  <Draggable> 
    <div> {/* Ensure Draggable wraps only one child */}
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <img src={image || "placeholder.jpg"} alt={title} className="project-card-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </motion.div>
    </div>
  </Draggable>
);

export default ProjectCard;
