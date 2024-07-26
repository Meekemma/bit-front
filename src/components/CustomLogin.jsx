import React, { useState } from 'react';
import '../styles/main.css';
import '../styles/CustomCarousel.css';
import google from '../assets/images/google.svg';
import PolicyFooter from './PolicyFooter';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
        <div className="signup-container ">
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
           
           
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
          
            <button type="submit" className='create-account-button'>Continue</button>
        
        </form>
        <p className="login-link">
          Don't have an account? <a href="/login">Sign Up</a>
        </p>

        <div className='text-center'>
            <h2>OR</h2>
            <button className="google-button">
            <img src={google} alt="Google logo" className="google-logo" />
            Continue with Google
            </button>
        </div>

        
        </div>
    
        <PolicyFooter />
    </>
    
  );
};

export default SignUp;
