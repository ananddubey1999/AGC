import React from 'react';
import './Solutions.css'; // Import the CSS file for styling

function Solutions() {
  return (
    <div className="solutionsContainer">
    <div>
        <h1>Solutions Offering</h1>
         <p>AGC is a innovative end-to-end enterprise solution provider<br/> for mission-critical applications, 
            IT Infrastructure Service setups, <br/>Internet of Things (IoT), Training and ERPs across <br/>industry verticals.</p>
    </div>
      <div className="contentContainer">

        <div className="gridContainer">
          {/* Content for 6 topics in a grid */}
          <div className="topic">Systems Integrator</div>
          <div className="topic">Custom Software Development</div>
          <div className="topic">PMO Outsourcing</div>
          <div className="topic">Call Center Setup & perations</div>
          <div className="topic">Customized ERP Solutions</div>
          <div className="topic">Digital Marketing</div>
        </div>
        {/* Image section */}
       <div className="imageContainer">
        {/* Your image content */}
        <img src="./Img/choose-1.png" alt="Image 1"  className='img'/>
      </div>
      </div>
    </div>
  );
}

export default Solutions;
