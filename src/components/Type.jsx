import React from 'react';
import CustomAppBar from './CustomAppBar';
import type from '../assets/images/type.jpg'; // Fixed typo in the import statement
import Footer from './Footer';

const TradingTable = () => {
  const data = [
    { noHeader: 'Trading Platform', column1: 'MetaTrader 5', column2: 'MetaTrader 5', column3: 'MetaTrader 5' },
    { noHeader: 'Account Currency', column1: 'USD', column2: 'USD', column3: 'USD' },
    { noHeader: 'Leverage', column1: 'From 1:10 to 1:500', column2: 'From 1:10 to 1:500', column3: 'From 1:10 to 1:500' },
    { noHeader: 'Maximum Deposit', column1: 'No Limit', column2: 'No Limit', column3: 'No Limit' },
    { noHeader: 'Minmum Deposit', column1: '$100', column2: '$500', column3: '$5000' },
    { noHeader: 'Order Execution', column1: 'Market', column2: 'Market', column3: 'Market' },
    { noHeader: 'Spread from', column1: '1.5', column2: '1.2', column3: 'RAW' },
    { noHeader: 'Margin Call', column1: '50%', column2: '50%', column3: '50%' },
    { noHeader: 'Stop Out', column1: '30%', column2: '30%', column3: '30%' },
    { noHeader: 'Swap-Free', column1: 'No%', column2: 'No%', column3: 'No%' },
    { noHeader: 'Limit & Stop Order', column1: '5 Spread', column2: '5 Spread', column3: '5 Spread' },
    { noHeader: 'Minimum Volume in Lots/Trade', column1: '5 0.01', column2: '0.01', column3: '0.01' },
    { noHeader: 'Trading Instruments', column1: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies', column2: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies', column3: 'FX Major, FX Crossess, FX Minor, FX TRY, Spot Metals, CFDs, Spot Indices, Shares, Cryptocurrencies' },
  ];

  return (
    <div>
      <CustomAppBar />

      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-3xl font-extrabold text-wrap md:text-balance">Trading Account Type</h4>
            <p className="mt-4 text-lg">
              With our 3 types of trading accounts, you will find the complete flexibility to trade at the level you want.
            </p>

            <div className="mt-6">
              <button className="create-button">
                Trade Now
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img src={type} alt="Trading Account Type" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8 overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">STARTER</th>
              <th className="px-4 py-2">STANDARD</th>
              <th className="px-4 py-2">ECN</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-left ">
                <td className="px-4 py-2 font-bold">{row.noHeader}</td>
                
                <td className="px-4 py-2 text-center text-[#36454F]">{row.column1}</td>
                <td className="px-4 py-2 text-center text-[#36454F]">{row.column2}</td>
                <td className="px-4 py-2 text-center text-[#36454F]">{row.column3}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mt-4'>
            <h3 className='text-2xl font-extrabold mb-4 md:text-3xl text-[#1D2B53]'>Notes</h3>

            <ul className='list-outside hover:list-inside'>
                <li className='my-2'>Spreads are variable and during volatile time spreads might expand.</li>
                <li className='my-2'>Leverage will be changed as per account size and exposure (lots traded).</li>
                <li className='my-2'>Please read the trading terms & Conditions for further information. </li>
            </ul>
            
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
};

export default TradingTable;
