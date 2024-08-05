import React from 'react';

const DashBoardFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' text-[#1D2B53] '>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex space-x-4'>
          <a href='/terms-of-use' className='hover:underline'>Terms of Use</a>
          <a href='/privacy-policy' className='hover:underline'>Privacy Policy</a>
        </div>
        <div>
          <p>© {currentYear} BOBBYGRAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default DashBoardFooter;
