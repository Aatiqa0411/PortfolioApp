import React, { useState } from 'react'; // Import React and useState hook
import './Contact.css'; // Import CSS file for styling the Contact form

// Contact component to allow users to send a message
const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // State to track if the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input changes and update state
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <section className="contact"> {/* Main container for Contact section */}
      <h2>Contact Me</h2> {/* Section title */}
      <form onSubmit={handleSubmit}> {/* Form for user input */}
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send</button> {/* Submit button */}
      </form>
      {submitted && <p>Message Sent Successfully!</p>} {/* Show message on successful submission */}
    </section>
  );
};

export default Contact; // Export Contact component