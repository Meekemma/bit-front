import React, { useEffect  } from 'react';
import '../styles/CustomCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CallBack = () => {

  useEffect(() => {
    AOS.init({ duration: 1000,once: true, });
  }, []);


  return (
    <>
      <div className='trade text-center' data-aos="fade-up">
        <h4 className='text-4xl font-extrabold' >Request Call Back</h4>

        <form action="/your-endpoint" method="POST" className='mt-8 max-w-lg mx-auto'>
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
            className='create-button py-2 px-4 rounded'
          >
            Request Call Back
          </button>
        </form>
      </div>

      <div className='mt-10'>
        <div className='flex flex-wrap justify-center gap-8'>
          <div className='flex flex-col items-center p-6 rounded-lg shadow-md'data-aos="fade-right">
            <h2 className='text-4xl font-bold text-[#1D2B53]'>15M+</h2>
            <h2 className='text-lg font-medium text-[#4A4A4A]'>Total Asset</h2>
          </div>

          <div className='flex flex-col items-center p-6 rounded-lg shadow-md' data-aos="fade-right">
            <h2 className='text-4xl font-bold text-[#1D2B53]'>13M+</h2>
            <h2 className='text-lg font-medium text-[#4A4A4A]'>Years of experience</h2>
          </div>

          <div className='flex flex-col items-center p-6 rounded-lg shadow-md' data-aos="fade-left">
            <h2 className='text-4xl font-bold text-[#1D2B53]'>2853+</h2>
            <h2 className='text-lg font-medium text-[#4A4A4A]'>Qualified traders</h2>
          </div>

          <div className='flex flex-col items-center p-6 rounded-lg shadow-md' data-aos="fade-left">
            <h2 className='text-4xl font-bold text-[#1D2B53]'>57</h2>
            <h2 className='text-lg font-medium text-[#4A4A4A]'>Countries supported</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallBack;
