import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
         {/* <--------------------This is a left Section of Navbar----------------> */}
      <div className="left">
         <img src="./Img/logo.png"alt=""className="logo-img"/>
      </div>

      <div className="mid">
      <div className="dropdown">
          <select>
            <option value="" disabled selected hidden>
              Product
            </option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="dropdown">
          <select>
            <option value="" disabled selected hidden>
              Solution
            </option>
            <option value="solution1">Solution 1</option>
            <option value="solution2">Solution 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="dropdown">
          <select>
            <option value="" disabled selected hidden>
              Training
            </option>
            <option value="training1">Training 1</option>
            <option value="training2">Training 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

           <div>Discover Avence</div>
           <div>Contact</div>              
       </div>
       <div className="right">
          <div>Get Free Quotes</div>
                  
         </div>
    </div>
  );
}

export default Navbar;