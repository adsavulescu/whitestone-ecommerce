import React from 'react';
import data from '../data.json';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className='product-list'>

            <h2>Products</h2>

            <div className="list">
                {data.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        actionText="View"
                        onAction={product => window.location.href=`/product/${product.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
