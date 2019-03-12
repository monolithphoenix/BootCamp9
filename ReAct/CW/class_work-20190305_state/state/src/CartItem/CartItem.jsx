import React from 'react';
import './CartItem.css'

const CartItem = ({title, price}) => {
    return (
        <li className='CartItem'>
            <h3>{title}</h3>
            <p>{price}</p>
        </li>
    );
};

export default CartItem;