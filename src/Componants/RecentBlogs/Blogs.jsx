import React from 'react';
import './Blogs.css'; // Import the CSS file for styling

function Blogs() {
  return (
    <div className="blogsContainer">
      <h1 className="title">Latest Blogs</h1>
      <div className="framesContainer">
        <div className="frame">
          <img src="./Img/blog-1.jpg" alt="Image 1" />
          <p>The Biggest Trends in Technology We've Seen This Year</p>
        </div>
        <div className="frame">
          <img src="./Img/blog-2.jpg" alt="Image 2" />
          <p>Why We Love Technology (And You Should, Too!)</p>
        </div>
        <div className="frame">
          <img src="./Img/blog-3.jpg" alt="Image 3" />
          <p>The 17 Most Misunderstood Facts About Technology</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
