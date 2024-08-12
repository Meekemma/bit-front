import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import Company from './pages/Company';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import SignUp from './components/SignUp';
import Verification from './components/Verification';
import Referral from './components/Referral';
import ChangePassword from './components/ChangePassword';
import ResetPassword from './components/ResetPassword';
import CustomLogin from './components/CustomLogin';
import PageNotFound from './pages/PageNotFound';
import Market from './pages/Market';
import Side from './components/Side';
import PrivateRoute from './utils/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <Router> {/* Wrap your app with Router */}
      <AuthProvider> {/* Wrap your app with AuthProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account-type" element={<Account />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<CustomLogin />} />
          <Route path="/markets" element={<Market />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Side /></PrivateRoute>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
};

export default App;
