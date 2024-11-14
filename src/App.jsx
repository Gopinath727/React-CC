// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Checkout from './Checkout';  // Import Checkout component
import Header from './Header'; // Import Header component

// Sample items data
const items = [
  { id: 1, name: 'Item 1', image: '/path/to/image1.jpg', price: 10 },
  { id: 2, name: 'Item 2', image: '/path/to/image2.jpg', price: 15 },
  { id: 3, name: 'Item 3', image: '/path/to/image3.jpg', price: 20 },
  // Add more items as needed
];

function App() {
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleConfirmAddress = (address) => {
        setDeliveryAddress(address);
        alert(`Delivery confirmed to: ${address}`);
    };

    const handleLogin = () => {
        setIsLoggedIn(true); // Update login state
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Reset login state
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="App">
            {/* Only show the Header when logged in */}
            {isLoggedIn && <Header onCartClick={() => navigate('/cart')} onLogout={handleLogout} />}
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard items={items} />} /> {/* Pass items to Dashboard */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout onConfirm={handleConfirmAddress} />} /> {/* Checkout Route */}
                <Route path="/" element={<Login onLogin={handleLogin} />} /> {/* Default route */}
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
