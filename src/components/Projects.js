import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import ProjectCard from './ProjectCard'; // Import ProjectCard component to display individual projects
import './Projects.css'; // Import CSS file for styling the Projects section

const Projects = () => {
  const [projects, setProjects] = useState([]); // State to store fetched project data

  useEffect(() => {
    fetch('https://api.github.com/users/Aatiqa0411/repos')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Data:", data); // Debugging log
        setProjects(data.slice(0, 3));
      });
  }, []);
  
  return (
    <section className="projects"> {/* Main container for the Projects section */}
      <h2>Projects</h2>
      {projects.map((proj, i) => (
        <ProjectCard 
          key={i} 
          title={proj.name} 
          description={proj.description} 
          image={"placeholder.jpg"} // Placeholder image for projects
          link={proj.html_url} // GitHub repository link
        />
      ))}
    </section>
  );
};

export default Projects; // Exporting the Projects component
