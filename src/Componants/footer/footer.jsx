// Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const services = [
        'Systems Integrator',
        'Custom Software Development',
        'PMO Outsourcing',
        'Call Center Setup & Operations',
        'Customized ERP Solutions',
        'Digital Marketing'
      ];
      const quickLinks = [
        'About Us',
        'Case Study',
        'Contact Us',
        'Blogs'
      ];
      const contactInfo = [
        'Phone: +91-120-4362095',
        'Email: info@avanceglobal.in',
        'Address: C-54 Second Floor, Sector 2 Noida - 201301, Uttar Pradesh, India'
      ];
  return (
    <div className="footerContainer">
      <div className="footerPart">
        <div className="firstPart">
          <div className="logo">
          <img src="./Img/logo (1).png"alt=""className="logo-img"/>
          </div>
          <p>We believe in delivering simple, secure, and cost-effective solutions, Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project</p>
          <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="socialIcon" />
        <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
        <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
        <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
      </div>
        </div>
      </div>
      <div className="footerPart">
        <div className="secondPart">
          <h3>Our Services</h3>
          <ul className="serviceList">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="footerPart">
        <div className="thirdPart">
          <h3>Quick Links</h3>
          <ul className="quickLinksList">
          {quickLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="footerPart">
        <div className="fourthPart">
            <h3>Contact Information</h3>
          <div className="verticalTitles">
          <ul className="contactList">
          {contactInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
          </div>
          <div className="placeholder">
        <input type="text" placeholder="Enter Your Email..." className="subscribeInput" />
        <button className="subscribeButton">Subscribe</button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
