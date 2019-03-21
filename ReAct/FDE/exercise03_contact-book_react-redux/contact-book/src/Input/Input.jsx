import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setInputValue} from '../redux/actions/setInputValue';

import './Input.css';


const Input = ({type, id, name, placeholder, isRequired, pattern, setInputValue}) => {
    return (
        <input className="Input" type={type} name={name} id={name+id} pattern={pattern} placeholder={placeholder} required={isRequired} onChange={setInputValue} />
    );
};

// Input.propTypes = {
//     
// };

function MSTP (state) {
    return {

    }
}

function MDTP (dispatch) {
    return {
      setInputValue: function(e) {      
        dispatch(setInputValue(e))
      },
    }
  }

export default connect(null, MDTP) (Input);