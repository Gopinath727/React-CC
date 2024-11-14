import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout, onBack }) => {
    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <button onClick={onBack}>Back to Dashboard</button> {/* Back Button */}
            {cartItems.length > 0 ? (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <span>{item.name} - ${item.price}</span>
                                <button onClick={() => onRemove(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={onCheckout}>Checkout</button>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
