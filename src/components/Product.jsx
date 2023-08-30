import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, actionText, onAction }) => (
    <div className='product' key={product.id}>
        <div className="img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="text">
            <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => onAction(product)}>{actionText}</button>
        </div>
    </div>
);

export default Product;
