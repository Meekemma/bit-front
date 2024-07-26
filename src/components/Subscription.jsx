import React from 'react';
import '../styles/CustomCarousel.css'; 

const Subscription = () => {
  return (
    <div className="subscription-container my-8">
      <h2 className="subscription-title">Subscribe to our Newsletter</h2>
      <form className="subscription-form">
        <input type="email" className="subscription-input" placeholder="Enter your email" required />
        <button type="submit" className="subscription-button">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscription;
