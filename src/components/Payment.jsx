import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

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
        <div className="payment-form-container">
            <h2>Make a Payment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter Amount"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="currency_original">Original Currency:</label>
                    <input
                        type="text"
                        id="currency_original"
                        value={formData.currency_original}
                        onChange={handleChange}
                        placeholder="Enter Original Currency"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="currency_paid">Currency to be Paid:</label>
                    <input
                        type="text"
                        id="currency_paid"
                        value={formData.currency_paid}
                        onChange={handleChange}
                        placeholder="Enter Currency to be Paid"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="buyer_email">Buyer Email:</label>
                    <input
                        type="email"
                        id="buyer_email"
                        value={formData.buyer_email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        required
                    />
                </div>
                <button type="submit">Pay Now</button>
            </form>
            {error && <p className="error">{error}</p>}
            {paymentUrl && (
                <div>
                    <p>Redirect to complete payment:</p>
                    <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                        Complete Payment
                    </a>
                </div>
            )}
        </div>
    );
};

export default Payment;


