import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <div className="containers">
      <div className="Contact-content">
        <h3>Have a Project in Mind?</h3>
        <h5>Lorem ipsum dolor sit amet, Ut enim ad minim veniam,<br/> quis nostrud consectetur.</h5>
        <Link to="/contact">
          <button className='Contactbuttons'>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
