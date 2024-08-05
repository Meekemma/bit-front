import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = false; 

  useEffect(() => {
    console.log('Private route works');
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
