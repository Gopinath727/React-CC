// Item.js
import React from 'react';
import './Item.css'; // Include styles for Item component

const Item = ({ item, addToCart }) => {
    return (
        <div className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <button className="item-button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default Item;
