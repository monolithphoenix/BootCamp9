import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

const Header = ({cart, toogleCart}) => {
    return (
        <header className='Header'>
            <span className='cartInclude'>{cart}</span>
            <button className='cart' onClick={toogleCart}>Cart</button>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;