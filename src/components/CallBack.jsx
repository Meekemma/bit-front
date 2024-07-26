import React from 'react';
import '../styles/CustomCarousel.css';

const CallBack = () => {
  return (
    <div className='trade text-center'>
      <h4 className='text-4xl font-extrabold'>Request Call Back</h4>

      <form action="/your-endpoint" method="POST" className='mt-8 max-w-lg mx-auto '>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-left text-lg font-semibold'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-left text-lg font-semibold'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='phone' className='block text-left text-lg font-semibold'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>

        <button
          type='submit'
          className='create-account-button'
        >
          Request Call Back
        </button>
      </form>
    </div>
  );
};

export default CallBack;
