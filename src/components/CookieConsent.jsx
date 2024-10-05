import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // Import the useCookies hook
import '../styles/consent.css';


const CookieConsent = () => {
    // Initialize cookie management with react-cookie
    const [cookies, setCookie] = useCookies(['cookieConsent']);
    const location = useLocation();
     

    // Check if the user has already given or rejected consent
    useEffect(() => {
        // If cookieConsent exists, no need to show the banner
        if (cookies.cookieConsent) {
            return;
        }
    }, [cookies]);

    // Function to handle when the user clicks "Accept"
    const handleAccept = () => {
        // Set the cookie for consent with a 30-day expiration
        setCookie('cookieConsent', 'accepted', { path: '/', maxAge: 3600 * 24 * 30 }); 
    };

    // Function to handle when the user clicks "Reject"
    const handleReject = () => {
        // Set the cookie for rejection with a 30-day expiration
        setCookie('cookieConsent', 'rejected', { path: '/', maxAge: 3600 * 24 * 30 }); 
    };

    // If the consent is already given or rejected, do not display the banner
    if (cookies.cookieConsent || location.pathname === '/login' || location.pathname === '/signup') {
        return null;
    }

    return (
        <div className="cookie-consent-banner">
            <p>
                We use cookies to enhance your browsing experience, provide personalized content, and analyze site traffic. 
                By clicking 'Accept', you consent to our use of cookies. You can manage your preferences or reject cookies at any time. 
                For more details, please refer to our <a className='text-red-500' href="/privacy-policy">Privacy Policy</a> and <a className='text-red-500'  href="/cookie-policy">Cookie Policy</a>.
            </p>
            {/* Buttons to handle the user's consent */}
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
        </div>
    );
};

export default CookieConsent;
