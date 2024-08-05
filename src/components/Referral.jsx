import React, { useState } from 'react';
import '../styles/main.css';
import PolicyFooter from './PolicyFooter';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Referral Code Submitted:', referralCode);
  };

  return (
    <>
        <div className="referral-form-container ">
        <h2 className="referral-heading">Referral Code</h2>
        <form onSubmit={handleSubmit} className="referral-form">
            <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            placeholder="Enter referral code(Optional)"
            className="referral-input"
            />
            <button type="submit" className="create-account-button">Submit</button>
        </form>
        </div>
        <div>
            <PolicyFooter/>
        </div>
    </>
  );
};

export default Referral;
