import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Please enter your phone number';
    }
    // Add similar checks for other fields (location, subject, message)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form submission logic (could be API call, etc.)
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange}
          />
          {formErrors.location && <span className="error">{formErrors.location}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {formErrors.subject && <span className="error">{formErrors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
