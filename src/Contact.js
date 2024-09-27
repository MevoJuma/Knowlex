import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="contact-map-section">
        <h2>Our Location</h2>
        <iframe
          title="company-location"
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6979407816896!2d39.16265686950958!3d-6.77952026784822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f007427a78f%3A0x38582c82e73f6188!2sContena%20Magorofani%20(Mzee%20John)!5e1!3m2!1sen!2stz!4v1725346515131!5m2!1sen!2stz"
          width="100%"
          height="450"
          loading="lazy"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
