import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;


    return (
        <div className="product">
            <div className="product-image"> <img src={img} alt="" /> </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small> by: {seller} </small></p>
                <p>${price}</p>
                <br />
                <p>only {stock} left in stock-order soon</p>
                <button 
                onClick = {() => props.handleAddProduct(props.product)}
                 className="btn-cart" > 
                 <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;