import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <div className="counter-content">
        <h3>Have a Project in Mind?</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit,ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur.</h5>
        <Link to="/contact">
          <button className='buttons'>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
