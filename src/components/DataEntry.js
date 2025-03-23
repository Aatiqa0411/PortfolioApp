import React, { useState } from 'react';
import './DataEntry.css';


const DataEntry = ({ setData }) => {
  const [formData, setFormData] = useState({
    name: '', bio: '', profilePic: '', skills: '', description: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setData(formData);
  };

  return (
    <section className="data-entry">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="bio" placeholder="Short Bio" onChange={handleChange} required />
        <input type="text" name="profilePic" placeholder="Profile Picture URL" onChange={handleChange} />
        <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="description" placeholder="About You" onChange={handleChange} required />
        <button type="submit">Generate Portfolio</button>
      </form>
    </section>
  );
};

export default DataEntry;
