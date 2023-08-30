import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext.jsx';
import data from '../data.json';
import Product from './Product';

const ProductDetail = () => {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

    return (
        <div className='product-detail'>

            <h2>Product</h2>

            <Product
                product={product}
                actionText="Add to Cart"
                onAction={addToCart}
            />
        </div>
    );
};

export default ProductDetail;
