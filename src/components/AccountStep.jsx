import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountStep = () => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <div className='bg-[#1D2B53] my-5 py-10'>
      <div className="container mx-auto px-4">
        <div className='text-center'>
          <h1 className='font-bold text-5xl my-2 text-white'>
            Open account in simple 3 steps
          </h1>
          <p className='text-white opacity-70'>
            Major global markets at your fingertips. Trade wherever you are, whenever you want to. It has never been more accessible.
        </p>

        </div>

        <div className='flex justify-around items-center mt-10'>
          {/* Step 1 - Create Account */}
          <div className='text-center'>
            <div className='w-20 h-20 bg-white text-[#1D2B53] bg-[#e4d00a] font-bold text-3xl rounded-full flex items-center justify-center mx-auto'>
              1
            </div>
            <button 
              onClick={handleOnClick} // Corrected event handler
              className='text-white mt-4 bg-[#BA0021] px-4 py-2 rounded-full hover:bg-white hover:text-[#1D2B53] transition duration-300 font-bold'
            >
              Create Account
            </button>
          </div>

          {/* Step 2 */}
          <div className='text-center'>
            <div className='w-20 h-20 bg-white text-[#1D2B53] bg-[#355e3b] font-bold text-3xl rounded-full flex items-center justify-center mx-auto'>
              2
            </div>
            <p className='text-white mt-4 font-bold'>Make a Deposit</p>
          </div>

          {/* Step 3 */}
          <div className='text-center'>
            <div className='w-20 h-20 bg-white text-[#1D2B53] bg-[#0C0404] font-bold text-3xl rounded-full flex items-center justify-center mx-auto'>
              3
            </div>
            <p className='text-white mt-4 font-bold'>Find Your Trade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStep;
