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


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-type" element={<Account />} />
        <Route path="/partners" element={<Partner />} />
        <Route path="/company" element={< Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<CustomLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
};

export default App;
