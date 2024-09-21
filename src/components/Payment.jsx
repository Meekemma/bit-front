import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import DashBoardFooter from './DashBoardFooter';
import bank from '../assets/images/bank.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import banktransfer from '../assets/images/bank_transfer.svg';
import unionpay from '../assets/images/unionpay.svg';
import mastercard from '../assets/images/Mastercard.svg';
import westernunion from '../assets/images/western-union.svg';

const Payment = () => {
    const [formData, setFormData] = useState({
        amount: '',
        currency_original: 'USD',
        currency_paid: 'LTCT',
        buyer_email: ''
    });
    const [paymentUrl, setPaymentUrl] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/payment/create-payment/', formData);

            if (response.data.checkout_url) {
                setPaymentUrl(response.data.checkout_url);
                setError('');
            } else {
                setError('Failed to create payment. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className='container mx-auto flex flex-col justify-center items-center min-h-screen'>
                <div className="bg-[#FFF5EE] p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-center text-2xl font-bold mb-6">Make a Payment</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="amount" className="block font-semibold mb-2">Amount:</label>
                            <input
                                type="number"
                                id="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="Enter Amount"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency_original" className="block font-semibold mb-2">Original Currency:</label>
                            <input
                                type="text"
                                id="currency_original"
                                value={formData.currency_original}
                                onChange={handleChange}
                                placeholder="Enter Original Currency"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency_paid" className="block font-semibold mb-2">Currency to be Paid:</label>
                            <input
                                type="text"
                                id="currency_paid"
                                value={formData.currency_paid}
                                onChange={handleChange}
                                placeholder="Enter Currency to be Paid"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="buyer_email" className="block font-semibold mb-2">Buyer Email:</label>
                            <input
                                type="email"
                                id="buyer_email"
                                value={formData.buyer_email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-[#1D2B53] text-white py-2 rounded-full hover:bg-[#4A4A4A] transition-colors"
                        >
                            Pay Now
                        </button>
                    </form>

                    {/* Error message */}
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                    {/* Payment URL */}
                    {paymentUrl && (
                        <div className="mt-4 text-center">
                            <p>Redirect to complete payment:</p>
                            <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                Complete Payment
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Note for Depositors */}
            <div className='container mx-auto px-4 mt-8 mb-12'>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-2'>Note for Depositors:</h3>
                    <p className='text-gray-700'>
                        Before proceeding with your deposit, please ensure the following:
                    </p>
                    <ul className='list-disc list-inside mt-2 text-gray-700'>
                        <li><strong>Correct Information:</strong> Double-check that all provided details, including your currency selection and email address, are accurate.</li>
                        <li><strong>Transaction Time:</strong> Deposits may take up to 24 hours to reflect in your account depending on the payment method and currency selected.</li>
                        <li><strong>Fees and Limits:</strong> Be aware of any transaction fees or limits associated with your selected payment method. These may vary based on currency and deposit amount.</li>
                        <li><strong>Security:</strong> For your safety, always ensure that your connection is secure (look for the lock icon in your browser). We will never ask for your password or sensitive information via email.</li>
                    </ul>
                    <p className='text-gray-700 mt-4'>For any questions or assistance, please feel free to reach out to our support team at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.</p>
                </div>
            </div>

            {/* Accepted Payment Methods */}
            <div className='container mx-auto px-4 my-8'>
                <h1 className='text-center font-bold text-lg mb-4'>We Also Accept </h1>
                <div className='flex flex-wrap justify-between items-center space-x-4'>
                    
                    <img src={paypal} alt="paypal" className='w-16 h-auto' />
                    <img src={visa} alt="visa" className='w-16 h-auto' />
                    <img src={mastercard} alt="mastercard" className='w-16 h-auto' />
                    <img src={westernunion} alt="western-union" className='w-20 h-auto' />
                    <img src={bank} alt="bank" className='w-16 h-auto' />                   
                     <img src={banktransfer} alt="bank transfer" className='w-16 h-auto' />
                    <img src={unionpay} alt="unionpay" className='w-16 h-auto' />
                    
                    
                </div>
            </div>

            <DashBoardFooter />
        </>
    );
};

export default Payment;
