import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import PolicyFooter from './PolicyFooter';
import axiosInstance from '../utils/axiosInstance';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    referral: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { referral } = formData;
    if (referral.length > 6) {
      toast.error("Invalid referral code");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/management/referrals/", formData);
      if (res.status === 200) {
        navigate("/login");
        toast.success("Valid referral Code");
      } else {
        toast.error("Invalid referral code");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
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
        <div className='signup-form'>
          <h2>Referral Code</h2>
          <form onSubmit={handleSubmit} className="form-group">
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="Enter referral code (Optional)"
            />
            <div className='flex justify-between mt-3'>
                <button 
                  type="submit" 
                  className="create-button  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                <button 
                  type="button" 
                  className="create-button focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => navigate('/profile')}
                >
                  Continue
                </button>
              </div>
          </form>
        </div>
      </div>
      <div>
        <PolicyFooter />
      </div>
    </>
  );
};

export default Referral;
