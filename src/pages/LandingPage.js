import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Custom styles for background

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>House Pack</h1> {/* Company name */}
      <p>Welcome to House Pack, your destination for the best houseplants. We believe in the beauty and benefits of greenery in your living space.</p> {/* Company paragraph */}
      <Link to="/products">
        <button>Get Started</button> {/* Link to product listing */}
      </Link>
    </div>
  );
};

export default LandingPage;
