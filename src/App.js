import React, { useState } from 'react'; // Importing React and useState hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing React Router for navigation
import Navbar from './components/Navbar'; // Importing Navbar component
import Hero from './components/Hero'; // Importing Hero component
import About from './components/About'; // Importing About component
import Projects from './components/Projects'; // Importing Projects component
import Contact from './components/Contact'; // Importing Contact component
import Footer from './components/Footer'; // Importing Footer component
import DataEntry from './components/DataEntry'; // Importing DataEntry component
import './App.css'; // Importing CSS file for styling

const App = () => {
  const [theme, setTheme] = useState('light'); // State to manage theme (light/dark mode)
  const [userData, setUserData] = useState(null); // State to store user-entered data

  // Function to toggle between light and dark mode
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router> {/* Wrapping the application inside Router for navigation */}
      <div className={theme}> {/* Applying theme class to the main div */}
        <Navbar toggleTheme={toggleTheme} /> {/* Navbar component with theme toggle */}
        {!userData ? ( // If user data is not available, show DataEntry component
          <DataEntry setData={setUserData} />
        ) : (
          <>
            <Routes> {/* Defining different routes for the application */}
              <Route path="/" element={<Hero name={userData.name} bio={userData.bio} />} />
              <Route path="/about" element={<About profilePic={userData.profilePic} skills={userData.skills.split(',')} description={userData.description} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer /> {/* Footer component */}
          </>
        )}
      </div>
    </Router>
  );
};

export default App; // Exporting App component
