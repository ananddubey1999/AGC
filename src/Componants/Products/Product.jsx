import React from 'react';
import './Product.css'; // Import the CSS file for the Product component

function Product() {
  return (
    <div>
      <h1 className='Product'>Our Products</h1>
      <div className="product-container">
        <div className="product-item">
          <h3>Insurance Broking Policy Portal</h3>
          <p>"InsureIT Pro" is a single-window login platform for Employee, Business Associates, and Customers to the Insurance Brokers digital journey. The portal offers products like Motor, Health, Life, Personal accident insurance online. Access all users in a single window Customer login to check their policy status</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info">
          </div>
        </div>
        <div className="product-item">
          <h3>Education Institute Management</h3>
          <p>We have delivered University Management Solution for Universities, Colleges & Schools. This is running successfully to date with clients. By adopting a complete higher education solution that supports and connects departments, users, and institutional goals, you will improve efficiency and productivity campus-wide.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info">
          </div>
        </div>
        <div className="product-item">
          <h3>Enterprise Resource Planning</h3>
          <p>We offer ready-made as well as customized Enterprise Resource Planning solutions and have expertise on diverse platforms. We implement the latest technology and entrepreneurial skills to our offerings. These ERP solutions are effective at streamlining business processes that cut across the functional areas of your business.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
