import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/login/", formData);
      const response = res.data;

      const user = {
        email: response.email,
        names: response.full_name
      };

      if (res.status === 200) {
        
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('access_token', JSON.stringify(response.access));
        localStorage.setItem('refresh_token', JSON.stringify(response.refresh));
        localStorage.setItem('user_id', JSON.stringify(response.user_id));
        localStorage.setItem('is_verified', JSON.stringify(response.is_verified));
        
        setUser(user);

        toast.success("Login successful");
        navigate("/profile");
      } else {
        toast.error("Login failed. Please try again");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Login failed. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_verified');
    setUser(null);
    navigate('/login');
  };

  const contextData = {
    formData,
    handleChange,
    user,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
