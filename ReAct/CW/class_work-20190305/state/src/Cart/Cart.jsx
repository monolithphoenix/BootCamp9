import React, { PropTypes } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem'

const Cart = ({cart, toogleCart}) => {
    return (
        <div className='Cart_hide Cart'>
            <span className='close' onClick={toogleCart}>X</span>
            <span> close</span>
            <ul className='Cart_list'>
                {cart.map(el => <CartItem key={el.title} title={el.title} price={el.price}/>)}
            </ul>
            <span>
                Total: {cart.reduce((acc, el) => acc + el.price, 0)} UAH
            </span>
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;