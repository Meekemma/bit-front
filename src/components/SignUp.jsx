import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import '../styles/registration.css';
import '../styles/CustomCarousel.css';
import google from '../assets/images/google.svg';
import PolicyFooter from './PolicyFooter';
import AuthContext from '../context/AuthContext'; 

const SignUp = () => {
    
  const  {loginWithGoogle} = useContext(AuthContext);


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '', // Change confirm_password to password2
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = formData; // Use password2

    if (!first_name || !last_name || !email || !password || !password2) {
      toast.error("All fields are required");
      return;
    }

    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/register/", formData);
      if (res.status === 201) {
        localStorage.setItem('email', formData.email);
        navigate("/verification");
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data); // Log the detailed error response
        toast.error(error.response.data.message || "Registration failed. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      
      <div className="signup-container">
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
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2" // Updated id to password2
              name="password2" // Updated name to password2
              value={formData.password2}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='create-button' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Continue'}
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
        <div className='text-center'>
          <h2>OR</h2>
          <button className="google-button" onClick={loginWithGoogle}>
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
