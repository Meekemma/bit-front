import React, { useContext } from 'react';
import CryptoContext from '../context/CryptoContext';

const DashboardCurrency = () => {
    const { markets } = useContext(CryptoContext);

    return (
        <div className='flex justify-between my-8'>
            {markets.slice(0, 3).map((market, index) => (
                <div key={index} className='card bg-[#1D2B53] p-4 rounded-lg shadow-lg flex-1 mx-2'>
                    <h2 className='text-xl font-bold text-white'>
                        {market.symbol.charAt(0).toUpperCase() + market.symbol.slice(1)}
                    </h2>
                    <img className="w-8 h-8 rounded-full" src={market.image} alt={market.name} />
                    <p className='text-white font-bold'>${market.current_price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default DashboardCurrency;
