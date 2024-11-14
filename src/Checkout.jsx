// Checkout.js
import React, { useState } from 'react';
import './Checkout.css'; // Include styles for Checkout

const Checkout = ({ onConfirm }) => {
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address) {
            onConfirm(address); // Pass the address back to the parent component
        } else {
            alert('Please enter a delivery address.');
        }
    };

    return (
        <div className="checkout-page">
            <h2>Enter Delivery Address</h2>
            <form onSubmit={handleSubmit} className="address-form">
                <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address here..."
                    required
                    rows="4"
                />
                <button type="submit" className="confirm-button">Confirm Address</button>
            </form>
        </div>
    );
};

export default Checkout;
