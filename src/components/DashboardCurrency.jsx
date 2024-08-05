import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardCurrency = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/management/get_currency/');
                setCurrencies(response.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);

    return (
        <div className='flex justify-between my-8'>
            {currencies.map((currency, index) => (
                <div key={index} className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 mx-2'>
                    <h2 className='text-xl font-bold text-white'>
                        {currency.symbol.charAt(0).toUpperCase() + currency.symbol.slice(1)}
                    </h2>
                    <img className="w-8 h-8 rounded-full" src={currency.image} alt={currency.name} />
                    <p className='text-white font-bold'>${currency.current_price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default DashboardCurrency;
