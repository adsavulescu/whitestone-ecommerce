import React, { useContext } from 'react';
import { CartContext } from '../CartContext.jsx';

const Cart = () => {
    const { cart, removeFromCart, addQty, removeQty } = useContext(CartContext);

    return (
        <div className='cart'>
            <h2>Your Cart</h2>

            <table>
                <thead>
                    <tr>
                        <th>product</th>
                        <th>quantity</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(product => (
                    <tr key={product.id}>
                        <td>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                        </td>
                        <td>
                            <span>{product.quantity} <button onClick={() => addQty(product)}>+</button> <button onClick={() => removeQty(product)}>-</button></span>
                        </td>
                        <td>
                            <button onClick={() => removeFromCart(product)}>remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;

