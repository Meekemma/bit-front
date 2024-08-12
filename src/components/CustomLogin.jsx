import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../assets/images/google.svg';
import PolicyFooter from './PolicyFooter';
import AuthContext from '../context/AuthContext'; // Adjust the path as necessary

const CustomLogin = () => {
  const { formData, handleChange, loginUser } = useContext(AuthContext);

  return (
    <>
     
      <div className="signup-container">
        <form className="signup-form" onSubmit={loginUser}>
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
          <button type="submit" className='create-button'>Continue</button>
        </form>
        <p className="login-link">
          Don't have an account? <a href="/signup">Sign Up</a>
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

export default CustomLogin;
