import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for the Home component

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        {/* Content for the Home page */}
        <h2>Creating software solutions with<br/> 
          utmost precision to match your<br/>
          <span style={{ color: '#5da8f8' }}>Distinct Business & Technology</span><br/>requirements.</h2>
        <p>"We proudly stand as the premier Information Technologies<br/>
          provider, delivering unparalleled solutions for a digital world.”</p>
        <div className="buttons">
          {/* Link to the LearnMore page */}
          <Link to="/learn-more">
            <button className="custom-button1">Read More</button>
          </Link>
          {/* Link to the Contact page */}
          <Link to="/contact">
            <button className="custom-button2">Contact Us</button>
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="image-container">
        <img src="./Img/home-font.png" alt="Your Image" />
      </div>
    </div>
  );
}

export default Home;
