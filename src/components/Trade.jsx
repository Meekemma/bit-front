import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradePlan from "./TradePlan";
import '../styles/CustomCarousel.css'; 
import tether from '../assets/images/tether.svg';
import ethereum from '../assets/images/ethereum.png';
import litecoin from '../assets/images/litecoin.svg';
import solana from '../assets/images/solana.svg';
import bitcoin from '../assets/images/bitcoin.png';
import xrp from '../assets/images/xrp.svg';
import usd from '../assets/images/usd.svg';
import bnb from '../assets/images/bnb.svg';

import Mastercard from '../assets/images/Mastercard.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import bank from '../assets/images/bank.svg';
import unionpay from '../assets/images/unionpay.svg';

const Trade = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/management/get_currency/');
        setCurrencies(response.data); // Get only the first 10 currencies
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="container mx-auto px-4 my-4">
      <div className="flex justify-center">
        <div className="text-center markets">
          <h3 className="text-4xl font-extrabold text-wrap md:text-balance">Trade the world’s market with BOBBYGRAM LTD</h3>
          <p className="mt-4">We offer 300+ instruments under 7 asset classes of world-renowned markets.</p>
        </div>
      </div>

      <div className="mt-2 overflow-hidden relative border border-gray-300 rounded-lg">
        <div className="flex animate-scroll">
          {currencies.slice(0, 20).map((currency)  => (
            <div key={currency.id} className="flex-shrink-0 mx-4 my-2">
              <img className="w-8 h-8 rounded-full" src={currency.image} alt={currency.name} />
              <div className="mt-2">
                <div className="text-sm font-medium text-gray-900">{currency.name}</div>
                <div className="text-sm text-gray-500">${currency.current_price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="text-center mt-8 trade ">
        <h3 className="text-4xl font-extrabold text-wrap md:text-balance">Trading Account Types</h3>
        <p className="mt-2">
          With our 3 types of trading accounts, you will find the complete flexibility to trade at the level you want.
        </p>

        <div>
          <TradePlan />
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center">
          <h4 className="text-4xl font-extrabold text-wrap md:text-balance">Instant deposit and withdrawal</h4>
          <p className="mt-2">With cryptocurrency & stable coin.</p>
          <div className="cryptos">
            <img src={ethereum} alt="Ethereum" />
            <img src={bitcoin} alt="Bitcoin" />
            <img src={tether} alt="Tether" />
            <img src={solana} alt="Solana" />
            <img src={litecoin} alt="Litecoin" />
            <img src={xrp} alt="xrp" />
            <img src={usd} alt="usd" />
            <img src={bnb} alt="bnb" />
          </div>
          <div className="cryptos mt-6">
            <img src={Mastercard} alt="Mastercard" />
            <img src={paypal} alt="Paypal" />
            <img src={visa} alt="Visa" />
            <img src={bank} alt="Bank" />
            <img src={unionpay} alt="Unionpay" />
          </div>

          <div className="mt-6">
            <button className="create-account-button">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
