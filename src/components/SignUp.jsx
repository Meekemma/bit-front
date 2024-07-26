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
            <h2>Create an account</h2>
            <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
            />
            </div>
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
            <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit" className='create-account-button'>Continue</button>
        
        </form>
        <p className="login-link">
            Already have an account? <a href="/login">Login</a>
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
