import React from 'react';
// import PropTypes from 'prop-types';

import './Button.css'


const Button = ({action, text}) => {
    return (
        <button className="Button" onClick={action}>{text}</button>
    );
};
 
// Button.propTypes = {
    
// };

export default Button;