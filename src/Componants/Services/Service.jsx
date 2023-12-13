import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <div>
      <div className='Service'>
        <h1>Our Services</h1>
        <h4 className='h4'>We are deeply committed to the growth and success of our clients.</h4>
      </div>
      <div className="service-container">
        <div className="service-item">
          <FontAwesomeIcon icon={faDesktop} size="3x" />
          <h3>Web App Development</h3>
          <p>We specialize in creating and optimizing high-quality, custom webportal & Mobile App for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use interface for clients.</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info"></div>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faGlobe} size="3x" />
          <h3>Systems Integrator</h3>
          <p>We are the premier Information Technologies provider, delivering cutting-edge solutions that redefine industry standards.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info"></div>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faServer} size="3x" />
          <h3>Domain and Hosting Services</h3>
          <p>Experience the expertise of our top-tier project management trainers, dedicated to educating both aspiring candidates and corporate professionals.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info"></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
