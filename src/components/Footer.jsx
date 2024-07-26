import React from 'react';
import Subscription from './Subscription';

const Footer = () => {
  return (
    <footer className="bg-[#1D2B53] text-white py-8">
      <div className="container mx-auto px-4 footer">
        <>
          <Subscription />
        </>
        
        <div className="flex flex-wrap justify-between gap-8">
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">ADDRESS</h3>
            <p>
              20 Battersea Road,<br />
              Bristol, England, BS5 6AL
            </p>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Trading</a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">How it works</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Why Quicktrade LTD</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Services</a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">BROWSE</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Security Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Refund Policy</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bottom-0 w-full py-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} BOBBYGRAM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
