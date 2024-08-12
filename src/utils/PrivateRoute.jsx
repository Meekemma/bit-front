import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  // Check if user data exists to determine if authenticated
  const isAuthenticated = user !== null || localStorage.getItem('access_token');

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
