import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashBoardBalance = () => {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate('/referral-page'); 
    };

    return (
        <div className='flex flex-wrap justify-between my-8'>
            <div className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 mx-2 my-2 h-auto min-h-[200px] flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold text-white'>Account Balance</h2>
                    <p className='text-xl md:text-2xl font-bold text-white'>BTC 0.000</p>
                </div>
                <div>
                    <p className='text-xl md:text-2xl font-bold text-white'>$0.000</p>
                </div>
            </div>
            <div className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 mx-2 my-2 h-auto min-h-[200px] flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold text-white'>Referrals</h2>
                    <p className='text-xl md:text-2xl font-bold text-white'>0/0</p>
                </div>
                <div className='flex justify-between items-end mt-4'>
                    <button onClick={handleMoreClick} className='text-white hover:underline'>
                        More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashBoardBalance;
