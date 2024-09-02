import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import Side from './Side';

const ReferralList = () => {
  const [referees, setReferees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const user_id = localStorage.getItem('user_id');
  const [totalBonus, setTotalBonus] = useState('0.00');
  const [totalReferees, setTotalReferees] = useState(0);

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        const response = await axiosInstance.get(`/management/referrers/${user_id}/`);
        setReferees(response.data.referees);
        setTotalBonus(response.data.referrer_stats.total_bonus);
        setTotalReferees(response.data.referrer_stats.total_referees);
        console.log('Data', response.data.referees);
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          toast.error(error.response.data);
        } else {
          toast.error('An error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferral();
  }, [user_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Side showProfile={false} />
      <div className='my-8 text-center relative'>
        <h2>Referral List</h2>
        <p className='text-xl md:text-2xl font-bold text-black'>{totalBonus}</p>
        <p className='text-xl md:text-2xl font-bold text-black'>{totalReferees}/{totalReferees}</p>
        {referees.length === 0 ? (
          <p>No referees found.</p>
        ) : (
          <ul>
            {referees.map((referral, index) => (
              <li key={index}>
                <p>First Name: {referral.referee.first_name}</p>
                <p>Last Name: {referral.referee.last_name}</p>
                <p>Email: {referral.referee.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ReferralList;
