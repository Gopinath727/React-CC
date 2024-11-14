import React, { useState } from 'react';
import Cart from './Cart';
import Header from './Header';
import Item from './Item';
import './Dashboard.css';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const items = [
        { id: 1, name: 'Football', price: 29.99, image: 'https://up.yimg.com/ib/th?id=OIP.vNSYG4fBvP7X5CHXEb6UAgHaE8&pid=Api&rs=1&c=1&qlt=95&w=145&h=97' },
        { id: 2, name: 'Basketball', price: 24.99, image: 'https://up.yimg.com/ib/th?id=OIP.18nJmr1DCT8-1CDxNxLxMAHaGp&pid=Api&rs=1&c=1&qlt=95&w=130&h=116' },
        { id: 3, name: 'Tennis Racket', price: 49.99, image: 'https://tse1.mm.bing.net/th?id=OIP.WoD-9cmzx-0oLXolrHfuoAHaHa&pid=Api&P=0&h=180' },
        { id: 4, name: 'Baseball', price: 39.99, image: 'https://tse2.mm.bing.net/th?id=OIP.nGf6Yr3X4rE49WEsJnkdEAHaE8&pid=Api&P=0&h=180' },
        { id: 5, name: 'Cricket Bat', price: 59.99, image: 'https://tse1.mm.bing.net/th?id=OIP.8u2Bn7djs1ClMBJSpq62EAHaHa&pid=Api&P=0&h=180' },
        { id: 6, name: 'Sports Shoes(White)', price: 74.99, image: 'https://tse3.mm.bing.net/th?id=OIP.C97L8TBBuVYuAwwIhLUBvgHaHa&pid=Api&P=0&h=180' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // The search action is handled by filtering items in real-time
    };

    const handleCartClick = () => {
        setShowCart(true);
    };

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        alert(`${item.name} has been added to your cart!`);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const handleCheckout = () => {
        const deliveryAddress = prompt("Please enter your delivery address:");
        if (deliveryAddress) {
            alert(`Delivery confirmed to: ${deliveryAddress}`);
            setCartItems([]);  // Clear the cart after checkout
        }
    };

    const handleBackToDashboard = () => {
        setShowCart(false);  // Set showCart to false to return to dashboard
    };

    // Filter items based on the search query
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-page">
            <Header onCartClick={handleCartClick} />
            {/* Removed the welcome message */}
            {/* <h1>Welcome to the Dashboard!</h1> */}

            {showCart ? (
                <Cart
                    cartItems={cartItems}
                    onRemove={removeFromCart}
                    onCheckout={handleCheckout}
                    onBack={handleBackToDashboard}  // Pass handleBackToDashboard to Cart
                />
            ) : (
                <>
                    <form onSubmit={handleSearch} className="search-box">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for items..."
                        />
                        <button type="submit">Search</button>
                    </form>

                    <div className="items-container">
                        {filteredItems.length > 0 ? (
                            filteredItems.map(item => (
                                <Item key={item.id} item={item} addToCart={addToCart} />
                            ))
                        ) : (
                            <p>No items found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
