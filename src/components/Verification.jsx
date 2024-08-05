import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomCarousel.css';
import PolicyFooter from './PolicyFooter';
import axiosInstance from '../utils/axiosInstance';

const Verification = () => {
  const [codes, setCodes] = useState(Array(6).fill(''));
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const refs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const handleChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      refs[index + 1].current.focus();
    }
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !codes[index]) {
      refs[index - 1].current.focus();
    }
  };

  const handleResendCode = async () => {
    try {
      await axiosInstance.post('/resend_code/');
      toast.success('Verification code resent');
    } catch (error) {
      console.error('Error resending verification code:', error);
      toast.error('Error resending verification code');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = codes.join('');
    try {
      const response = await axiosInstance.post('/verify_code/', { code });
      if (response.status === 200) {
        toast.success('Code verified successfully');
        navigate('/profile');
      } else {
        setError('Invalid verification code');
      }
    } catch (error) {
      setError('Error verifying code');
      console.error('Error verifying code:', error);
      toast.error('Error verifying code');
    }
  };

  return (
    <>
      <div className="bg-egyptian flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Confirmation Code</h1>
          <p className="text-gray-600 mb-6">Please enter the verification code sent to your email</p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-6">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={refs[index]}
                  type="text"
                  className="border border-gray-400 rounded-lg px-4 py-2 w-12 text-center text-lg font-bold focus:outline-none focus:border-blue-500 mx-1"
                  value={code}
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex justify-center mb-6">
              <button
                className="create-button text-white font-bold py-2 px-4 rounded flex-grow focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                type="submit"
              >
                Continue
              </button>
            </div>

            <span className="text-gray-600 px-5">
              Didn't receive a verification code?{' '}
              <a
                href="#"
                className="text-[#4A4A4A] hover:underline"
                onClick={handleResendCode}
              >
                Resend
              </a>
            </span>
          </form>
        </div>
      </div>

      <div>
        <PolicyFooter />
      </div>

      {/* Add ToastContainer here */}
      <ToastContainer />
    </>
  );
};

export default Verification;
