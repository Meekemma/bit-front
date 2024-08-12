import React, { useState } from 'react';
import '../styles/CustomCarousel.css'; 
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/email-subscription/", formData);
      if (res.status === 200) {
        toast.success("Successfully subscribed to the newsletter");
        setFormData({ email: '' }); // Reset the form to initial state
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data); // Log the detailed error response
        const errorMessage = error.response.data.email?.[0] || "Subscription failed. Please try again.";
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="subscription-container my-8">
        <h2 className="subscription-title">Subscribe to our Newsletter</h2>
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="subscription-input"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="subscription-button" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Subscription;
