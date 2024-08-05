import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomAppBar from './CustomAppBar';
import Trending from './Trending';
import '../styles/market.css'; 


const CustomMarket = () => {
    const [markets, setMarkets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarkets = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/management/get_currency/');
                setMarkets(response.data);
                console.log('Response:', response);
                console.log('Data:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarkets();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <CustomAppBar />
            <Trending />
            <div className='container mx-auto px-4 my-8'>
                <h1 className="text-2xl font-bold mb-4 text-center text-[#1D2B53]">Cryptocurrency Market Data</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coin</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h High</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Low</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Volume</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {markets.map((market) => (
                                <tr key={market.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="w-8 h-8 rounded-full" src={market.image} alt={market.name} />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{market.name}</div>
                                                <div className="text-sm text-gray-500">{market.symbol.toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${market.current_price.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">${market.high_24h.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">${market.low_24h.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">{market.price_change_percentage_24h.toFixed(2)}%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${market.total_volume.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${market.market_cap.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CustomMarket;
