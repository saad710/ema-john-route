import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="review-item">
            <h4 className="product-item">Name: {name}</h4>
            <p>Quantity: {quantity}</p>
            <button className="btn-cart">Remove</button>
            
        </div>
    );
};

export default ReviewItem;