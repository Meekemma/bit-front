import React, { useState, useEffect } from 'react';
import DashBoardFooter from './DashBoardFooter';
import axiosInstance from '../utils/axiosInstance';

const list = ['All', 'Deposit', 'Withdrawal'];

const CustomTransaction = () => {
  const [transaction, setTransaction] = useState('All');
  const [withdrawals, setWithdrawals] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTypeChange = (type) => {
    setTransaction(type);
    if (type === 'Withdrawal') {
      fetchWithdrawal(); 
    } else if (type === 'Deposit') {
      fetchDeposit();
    }
  };

  const fetchDeposit = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('payment/transactions');
      if (response.status === 200) {
        setDeposits(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching deposits:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchWithdrawal = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('payment/withdrawal_history');
      if (response.status === 200) {
        setWithdrawals(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching withdrawals:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 my-8">
        <h1 className="font-bold text-xl">Transactions History</h1>

        <div className="bg-[#FFF5EE] p-5 rounded-lg">
          <div className="flex flex-row justify-between space-x-2 text-center">
            {list.map((value) => (
              <button
                key={value}
                className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  transaction === value
                    ? 'bg-[#1D2B53] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#4A4A4A] hover:text-white'
                }`}
                onClick={() => handleTypeChange(value)}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Conditionally render content based on selected transaction type */}
          <div className="mt-4">
            {transaction === 'All' && (
              <div>
                <p>Displaying all transactions including deposits and withdrawals.</p>
              </div>
            )}

            {transaction === 'Deposit' && (
              <div>
                {loading ? (
                  <p>Loading deposit transactions...</p>
                ) : deposits.length === 0 ? (
                  <p>No deposits found.</p>
                ) : (
                  <div className='text-[#1D2B53]'>
                    {deposits.map((deposit) => (
                      <div key={deposit.id} className="p-4 border-b border-gray-200">
                        <p>
                          <strong>Amount:</strong> {deposit.amount}
                        </p>
                        <p>
                          <strong>Original Currency:</strong> {deposit.currency_original}
                        </p>
                        <p>
                          <strong>Paid Currency:</strong> {deposit.currency_paid}
                        </p>
                        <p>
                          <strong>Amount Paid:</strong> {deposit.amount_paid}
                        </p>
                        <p>
                          <strong>Status:</strong> {deposit.status}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {transaction === 'Withdrawal' && (
              <div>
                {loading ? (
                  <p>Loading withdrawal transactions...</p>
                ) : withdrawals.length === 0 ? (
                  <p>No withdrawals found.</p>
                ) : (
                  <div className='text-[#1D2B53]'>
                    {withdrawals.map((withdrawal) => (
                      <div key={withdrawal.id} className="p-4 border-b border-gray-200">
                        <p>
                          <strong>Amount:</strong> {withdrawal.amount}
                        </p>
                        
                        {withdrawal.crypto_currency ? (
                          <>
                            <p>
                              <strong>Cryptocurrency:</strong> {withdrawal.crypto_currency}
                            </p>
                            <p>
                              <strong>Crypto Address:</strong> {withdrawal.crypto_address}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              <strong>Bank Name:</strong> {withdrawal.bank_name}
                            </p>
                            <p>
                              <strong>Bank Account Number:</strong> {withdrawal.bank_account_number}
                            </p>
                            <p>
                              <strong>Bank Account Name:</strong> {withdrawal.bank_account_name}
                            </p>
                            <p>
                              <strong>SWIFT Code:</strong> {withdrawal.bank_swift_code}
                            </p>
                            <p>
                              <strong>Routing Number:</strong> {withdrawal.bank_routing_number}
                            </p>
                          </>
                        )}

                        <p>
                          <strong>Status:</strong> {withdrawal.status}
                        </p>

                        <p>
                          <strong>Date:</strong> {new Date(withdrawal.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <DashBoardFooter />
    </>
  );
};

export default CustomTransaction;
