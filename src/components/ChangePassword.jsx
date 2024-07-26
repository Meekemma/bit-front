import React from 'react';
import '../styles/CustomCarousel.css';
import '../styles/main.css';
import PolicyFooter from './PolicyFooter';

const ChangePassword = () => {
  return (
    <>
        <div className="change-password-container">
        <form className="change-password-form">
            <h2 className="form-title">Change Password</h2>
            
            <label htmlFor="old-password">Old Password</label>
            <input
            id="old-password"
            type="password"
            placeholder="Enter old password"
            required
            />

            <label htmlFor="new-password">New Password</label>
            <input
            id="new-password"
            type="password"
            placeholder="Enter new password"
            required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
            id="confirm-password"
            type="password"
            placeholder="Enter confirm password"
            required
            />
            <button type="submit" className='create-account-button'>Submit</button>
        </form>
        </div>
    

        <div>
            <PolicyFooter />
        </div>
    </>
  );
};

export default ChangePassword;
