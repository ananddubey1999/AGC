import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainHome from './Pages/MainHome';
import Contact from './Pages/Contacts/Contact';
import LearnMore from './Pages/LearnMore/LearnMore';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn-more" element={<LearnMore />} />
          {/* Define more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
